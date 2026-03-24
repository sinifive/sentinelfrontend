import { useState } from "react";
import {
  analyzeSMS,
  SentinelRequest,
  SentinelResponse,
} from "../services/sentinelApiService";
import { saveAnalysis } from "../services/analysisService";
import type { AnalysisResult, AnalysisData, Language } from "@/types";

interface UseAnalysisReturn {
  loading: boolean;
  error: string | null;
  result: SentinelResponse | null;
  runAnalysis: (
    payload: SentinelRequest,
    metadata: {
      senderPhone: string;
      messageContent: string;
      dateReceived: string;
      timeReceived: string;
      screenshotUrl?: string;
      language: Language;
    }
  ) => Promise<void>;
}

/**
 * Hook for analyzing SMS messages using the Sentinel AI backend
 * Handles API calls and saves results to Supabase
 */
export function useAnalysis(): UseAnalysisReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SentinelResponse | null>(null);

  /**
   * Run analysis on SMS message
   * Calls FastAPI backend and saves result to Supabase
   */
  const runAnalysis = async (
    payload: SentinelRequest,
    metadata: {
      senderPhone: string;
      messageContent: string;
      dateReceived: string;
      timeReceived: string;
      screenshotUrl?: string;
      language: Language;
    }
  ) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Call FastAPI backend for analysis
      const apiResult = await analyzeSMS(payload);
      setResult(apiResult);

      // Map risk level from API response
      const riskScore = apiResult.final_score * 100; // Convert 0-1 to 0-100

      // Map decision to risk level
      let riskLevel: "LOW" | "MEDIUM" | "HIGH";
      if (apiResult.decision === "HAM") {
        riskLevel = "LOW";
      } else {
        // SPAM - determine severity based on score
        if (riskScore >= 70) {
          riskLevel = "HIGH";
        } else if (riskScore >= 40) {
          riskLevel = "MEDIUM";
        } else {
          riskLevel = "LOW";
        }
      }

      // Generate verdict based on risk level
      const verdict =
        riskLevel === "HIGH"
          ? "This message is likely a phishing/smishing attempt"
          : riskLevel === "MEDIUM"
          ? "This message shows suspicious characteristics"
          : "This message appears to be legitimate";

      // Build threat indicators from explainability data
      const threats = [
        ...apiResult.explainability.contributing_words
          .slice(0, 3)
          .map((word) => ({
            title: `Suspicious word: "${word.word}"`,
            description: `This word contributed ${(word.score * 100).toFixed(
              1
            )}% to the spam detection`,
            severity: word.score > 0.7 ? ("high" as const) : word.score > 0.4 ? ("medium" as const) : ("low" as const),
          })),
        ...apiResult.explainability.contributing_features
          .slice(0, 3)
          .map((feature) => ({
            title: `Suspicious ${feature.feature}`,
            description: `This feature contributed ${(
              feature.score * 100
            ).toFixed(1)}% to the detection`,
            severity: feature.score > 0.7 ? ("high" as const) : feature.score > 0.4 ? ("medium" as const) : ("low" as const),
          })),
      ];

      // Build recommendations
      const recommendations = {
        do:
          riskLevel === "HIGH"
            ? [
                "Delete this message immediately",
                "Block the sender number",
                "Report to your service provider",
                "Warn friends and family about this scam",
                "Check your accounts for unauthorized activity",
              ]
            : riskLevel === "MEDIUM"
            ? [
                "Verify the sender through official channels",
                "Do not click any links in the message",
                "Keep this message for your records",
                "Report if confirmed as spam",
              ]
            : [
                "Keep this for your records if needed",
                "Stay vigilant with future messages",
              ],
        dont:
          riskLevel === "HIGH"
            ? [
                "Don't click any links in the message",
                "Don't call the number back",
                "Don't share OTPs, passwords, or PINs",
                "Don't forward without warning others",
                "Don't respond to the sender",
              ]
            : riskLevel === "MEDIUM"
            ? [
                "Don't share personal information",
                "Don't click links without verification",
                "Don't respond hastily",
              ]
            : ["Don't share sensitive information with unverified sources"],
      };

      // Build sender analysis
      const senderAnalysis = {
        phone: metadata.senderPhone,
        inContacts: false, // Could be enhanced with contact check
        reportCount: 0, // Could be enhanced with database lookup
        isNew: true,
      };

      // Build content analysis
      const contentAnalysis = {
        hasLinks: (payload.metadata?.url?.length ?? 0) > 0,
        linkDomain: payload.metadata?.url,
        hasUrgency: apiResult.explainability.contributing_words.some((w) =>
          ["urgent", "immediate", "expire", "block", "suspend"].includes(
            w.word.toLowerCase()
          )
        ),
        grammarScore: 7, // Could be enhanced with actual grammar analysis
        keywords: apiResult.explainability.contributing_words
          .slice(0, 5)
          .map((w) => w.word),
      };

      // Save to Supabase with Sentinel API result
      const analysisData: AnalysisData = {
        senderPhone: metadata.senderPhone,
        messageContent: metadata.messageContent,
        dateReceived: metadata.dateReceived,
        timeReceived: metadata.timeReceived,
        screenshotUrl: metadata.screenshotUrl,
        language: metadata.language,
        riskScore: Math.round(riskScore),
        riskLevel,
        verdict,
        threats,
        recommendations,
        senderAnalysis,
        contentAnalysis,
      };

      console.log("Attempting to save analysis to database:", analysisData);
      const saveResult = await saveAnalysis(analysisData, apiResult);

      if (!saveResult.success) {
        console.error("Failed to save analysis to database:", saveResult.error);
        console.error("Analysis data that failed to save:", analysisData);
        console.error("API result:", apiResult);
        // Don't throw error - analysis was successful, just saving failed
      } else {
        console.log("Analysis successfully saved to database with ID:", saveResult.data?.id);
      }

      setLoading(false);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to analyze message";
      setError(errorMessage);
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    result,
    runAnalysis,
  };
}
