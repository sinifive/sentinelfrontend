import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Phone,
  Link2,
  Share2,
  Download,
  ThumbsUp,
  ThumbsDown,
  Info,
  MapPin,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { ShareModal } from "./ShareModal";
import type { AnalysisResult } from "@/types";
import { translations, type Language } from "@/lib/translations";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getRiskColor, getRiskBgColor, getThreatsTitle, getThreatsIconType } from "@/utils/riskUtils";
import { getPhoneCountry, isShortCode } from "@/utils/phoneUtils";

interface AnalysisReportProps {
  result: AnalysisResult;
  language: string;
}

export function AnalysisReport({ result, language }: AnalysisReportProps) {
  const [showShareModal, setShowShareModal] = useState(false);
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);

  const t = (key: keyof typeof translations.english): string => {
    const lang = language as Language;
    return translations[lang]?.[key] || translations.english[key] || key;
  };

  const getRiskIcon = () => {
    switch (result.riskLevel) {
      case "high":   return <XCircle className="h-6 w-6" />;
      case "medium": return <AlertTriangle className="h-6 w-6" />;
      case "low":    return <CheckCircle className="h-6 w-6" />;
    }
  };

  const getRiskLevelText = () => {
    switch (result.riskLevel) {
      case "high":   return t("high");
      case "medium": return t("medium");
      case "low":    return t("low");
    }
  };

  const handleDownload = () => {
    toast({
      title: "Downloading Report",
      description: "Your PDF report is being generated.",
    });
  };

  const handleFeedback = (type: 'yes' | 'no') => {
    setFeedback(type);
    toast({
      title: type === 'yes' ? "Thank you!" : "Thanks for feedback",
      description: type === 'yes'
        ? "We're glad this helped!"
        : "We'll work to improve our analysis.",
    });
  };

  // Sender enrichment
  const phoneCountry = getPhoneCountry(result.senderAnalysis.phone);
  const shortCode = isShortCode(result.senderAnalysis.phone);

  // Threats section config
  const threatsTitle = t(getThreatsTitle(result.riskLevel));
  const threatsIconType = getThreatsIconType(result.riskLevel);
  const threatsIconColor = result.riskLevel === "high"
    ? "text-destructive"
    : result.riskLevel === "medium"
    ? "text-warning"
    : "text-muted-foreground";

  return (
    <div className="space-y-6">
      {/* Risk Score Card */}
      <Card className="bg-card border-border overflow-hidden">
        <div className={`h-2 ${getRiskBgColor(result.riskLevel)}`} />
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className={`flex items-center justify-center w-20 h-20 rounded-2xl ${getRiskBgColor(result.riskLevel)} ${getRiskBgColor(result.riskLevel) === "bg-warning" ? "text-warning-foreground" : "text-primary-foreground"}`}>
              {getRiskIcon()}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm font-semibold uppercase ${getRiskColor(result.riskLevel)}`}>
                  {t("riskLevel")}: {getRiskLevelText()}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  • {t("confidence")}: {result.confidence}%
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3 w-3 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="text-xs">
                        How certain our model is about this classification. Higher confidence means the analysis is more reliable.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-4xl font-bold ${getRiskColor(result.riskLevel)}`}>
                  {result.riskScore}
                </span>
                <span className="text-2xl text-muted-foreground">/100</span>
              </div>
              <Progress
                value={result.riskScore}
                className="h-3"
              />
              {/* Progress bar legend */}
              <div className="mt-2 flex items-center gap-4">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="inline-block w-2 h-2 rounded-sm bg-success" />
                  0–30 Safe
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="inline-block w-2 h-2 rounded-sm bg-warning" />
                  31–69 Caution
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="inline-block w-2 h-2 rounded-sm bg-destructive" />
                  70–100 Danger
                </span>
              </div>
              {result.contentAnalysis.triggerPhrases && result.contentAnalysis.triggerPhrases.length > 0 && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-muted-foreground shrink-0">Key phrases:</span>
                  {result.contentAnalysis.triggerPhrases.map((phrase, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        result.riskLevel === "low"
                          ? "bg-success/20 text-success"
                          : result.riskLevel === "medium"
                          ? "bg-warning/20 text-warning"
                          : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      "{phrase}"
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Summary - Verdict only (recommended action removed to avoid duplication) */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {result.riskLevel === "low" ? (
                <CheckCircle className="h-5 w-5 text-success" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
              <span className="font-semibold">{t("verdict")}</span>
            </div>
            <p className="text-foreground">
              {result.verdict || (
                result.riskLevel === "high" ? t("verdictHigh") :
                result.riskLevel === "medium" ? t("verdictMedium") : t("verdictLow")
              )}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What Should You Do? */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            {t("whatToDo")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Immediate Actions */}
          {result.recommendations.do.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-success mb-4">
                <CheckCircle className="h-5 w-5" />
                {t("immediateActions")}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {result.recommendations.do.map((action, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Do NOT */}
          {result.recommendations.dont.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-destructive mb-4">
                <XCircle className="h-5 w-5" />
                {t("doNot")}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {result.recommendations.dont.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-destructive/10 rounded-lg">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Threat Indicators — risk-conditional title & styling */}
      {result.threats.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {threatsIconType === "warning" ? (
                <AlertTriangle className={`h-5 w-5 ${threatsIconColor}`} />
              ) : (
                <Info className={`h-5 w-5 ${threatsIconColor}`} />
              )}
              <span className={result.riskLevel !== "high" ? "" : "text-destructive"}>
                {threatsTitle}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.threats.map((threat, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 rounded-lg ${
                  result.riskLevel === "low"
                    ? "bg-muted"
                    : threat.severity === "high"
                    ? "bg-destructive/10 border border-destructive/20"
                    : threat.severity === "medium"
                    ? "bg-warning/10 border border-warning/20"
                    : "bg-muted"
                }`}
              >
                {result.riskLevel === "low" ? (
                  <Info className="h-5 w-5 flex-shrink-0 mt-0.5 text-muted-foreground" />
                ) : (
                  <XCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                    threat.severity === "high" ? "text-destructive" : "text-warning"
                  }`} />
                )}
                <div>
                  <p className="font-semibold text-foreground">{threat.title}</p>
                  <p className="text-sm text-muted-foreground">{threat.description}</p>
                </div>
              </div>
            ))}

            {/* Sender & Content Analysis Details */}
            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
              {/* Sender Analysis */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{t("senderAnalysis")}</p>
                <div className="space-y-1">
                  <p className="text-sm flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {result.senderAnalysis.phone}
                  </p>
                  {phoneCountry && (
                    <p className="text-sm flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      {phoneCountry.flag} {phoneCountry.country}
                    </p>
                  )}
                  {shortCode && (
                    <p className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {t("otpShortCode")}
                    </p>
                  )}
                  {result.senderAnalysis.isNew && (
                    <p className="text-xs text-warning">{t("recentlyActivated")}</p>
                  )}
                  {result.senderAnalysis.reportCount > 0 ? (
                    <p className="text-sm text-destructive">
                      ⚠️ {t("reportedAsSpam").replace("{count}", String(result.senderAnalysis.reportCount))}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">{t("noReportsFound")}</p>
                  )}
                </div>
              </div>

              {/* Content Analysis — only if there's a suspicious link */}
              {result.contentAnalysis.hasLinks && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{t("contentAnalysis")}</p>
                  <div className="space-y-1">
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <Link2 className="h-4 w-4" />
                      {t("suspiciousLink")}: {result.contentAnalysis.linkDomain}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* ML Analysis Details */}
      {(result.pipelineScores || result.explainability || result.fusionWeights) && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              ML Analysis Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Pipeline Scores */}
            {result.pipelineScores && (
              <div className="space-y-4">
                <h4 className="font-semibold text-sm text-muted-foreground">Model Scores</h4>

                {/* Text Analysis */}
                {result.pipelineScores.text_score !== null && result.pipelineScores.text_score !== undefined && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">📝 Text Analysis</span>
                      <span className={`text-sm font-bold ${
                        result.pipelineScores.text_score > 0.6 ? 'text-destructive' :
                        result.pipelineScores.text_score > 0.4 ? 'text-warning' :
                        'text-success'
                      }`}>
                        {Math.round(result.pipelineScores.text_score * 100)}% risk
                      </span>
                    </div>
                    <Progress value={result.pipelineScores.text_score * 100} className="h-2" />
                  </div>
                )}

                {/* Metadata Analysis */}
                {result.pipelineScores.metadata_score !== null && result.pipelineScores.metadata_score !== undefined && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🔗 URL/Metadata Analysis</span>
                      <span className={`text-sm font-bold ${
                        result.pipelineScores.metadata_score > 0.6 ? 'text-destructive' :
                        result.pipelineScores.metadata_score > 0.4 ? 'text-warning' :
                        'text-success'
                      }`}>
                        {Math.round(result.pipelineScores.metadata_score * 100)}% risk
                      </span>
                    </div>
                    <Progress value={result.pipelineScores.metadata_score * 100} className="h-2" />
                  </div>
                )}

                {/* Image Analysis */}
                {result.pipelineScores.image_score !== null && result.pipelineScores.image_score !== undefined && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🖼️ Screenshot Analysis</span>
                      <span className={`text-sm font-bold ${
                        result.pipelineScores.image_score > 0.6 ? 'text-destructive' :
                        result.pipelineScores.image_score > 0.4 ? 'text-warning' :
                        'text-success'
                      }`}>
                        {Math.round(result.pipelineScores.image_score * 100)}% risk
                      </span>
                    </div>
                    <Progress value={result.pipelineScores.image_score * 100} className="h-2" />
                  </div>
                )}
              </div>
            )}

            {/* Contributing Words */}
            {result.explainability?.contributing_words && result.explainability.contributing_words.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground">Key Phrases Detected</h4>
                <div className="flex flex-wrap gap-2">
                  {result.explainability.contributing_words.map((word, index) => (
                    <div
                      key={index}
                      className="px-3 py-1.5 bg-destructive/10 border border-destructive/20 rounded-full text-sm"
                    >
                      <span className="font-medium text-destructive">{word.word}</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        ({Math.round(word.score * 100)}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contributing Features */}
            {result.explainability?.contributing_features && result.explainability.contributing_features.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground">Suspicious Patterns</h4>
                <div className="space-y-2">
                  {result.explainability.contributing_features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-3 py-2 bg-warning/10 border border-warning/20 rounded-lg"
                    >
                      <span className="text-sm capitalize">
                        {feature.feature.replace(/_/g, ' ')}
                      </span>
                      <span className="text-xs font-semibold text-warning">
                        {Math.round(feature.score * 100)}% importance
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* OCR Text */}
            {result.explainability?.ocr_extracted_text && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground">Text from Screenshot</h4>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-mono break-words">
                    "{result.explainability.ocr_extracted_text}"
                  </p>
                </div>
              </div>
            )}

            {/* Fusion Weights */}
            {result.fusionWeights && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground">Model Contribution</h4>
                <div className="grid grid-cols-3 gap-3">
                  {result.fusionWeights.text > 0 && (
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <p className="text-2xl font-bold text-primary">
                        {Math.round(result.fusionWeights.text * 100)}%
                      </p>
                      <p className="text-xs text-muted-foreground">Text</p>
                    </div>
                  )}
                  {result.fusionWeights.metadata > 0 && (
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <p className="text-2xl font-bold text-primary">
                        {Math.round(result.fusionWeights.metadata * 100)}%
                      </p>
                      <p className="text-xs text-muted-foreground">Metadata</p>
                    </div>
                  )}
                  {result.fusionWeights.image > 0 && (
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <p className="text-2xl font-bold text-primary">
                        {Math.round(result.fusionWeights.image * 100)}%
                      </p>
                      <p className="text-xs text-muted-foreground">Image</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ML Decision Details */}
            {result.mlDecision && (
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">ML Model Decision:</span>
                  <span className={`font-bold ${result.mlDecision === 'SPAM' ? 'text-destructive' : 'text-success'}`}>
                    {result.mlDecision} ({result.mlConfidence})
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Save & Share */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold flex items-center gap-2">
                <Share2 className="h-5 w-5 text-primary" />
                {t("saveAnalysis")}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t("keepEvidence")}
              </p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <Button variant="outline" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                {t("downloadPDF")}
              </Button>
              <Button
                className="bg-gradient-primary"
                onClick={() => setShowShareModal(true)}
              >
                <Share2 className="h-4 w-4 mr-2" />
                {t("shareAnalysis")}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feedback */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{t("wasAnalysisHelpful")}</p>
            <div className="flex gap-3">
              <Button
                variant={feedback === 'yes' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFeedback('yes')}
                disabled={feedback !== null}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                {t("helpful")}
              </Button>
              <Button
                variant={feedback === 'no' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFeedback('no')}
                disabled={feedback !== null}
              >
                <ThumbsDown className="h-4 w-4 mr-2" />
                {t("notHelpful")}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={result}
      />
    </div>
  );
}
