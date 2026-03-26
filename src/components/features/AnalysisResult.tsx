import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, Link, Image, Shield, TrendingUp, AlertTriangle, Sparkles, Loader2 } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import type { SentinelResponse } from "@/services/sentinelApiService";

interface AnalysisResultProps {
  result: SentinelResponse;
  justification?: string;
  justificationLoading?: boolean;
  justificationError?: boolean;
}

export function AnalysisResult({ result, justification, justificationLoading, justificationError }: AnalysisResultProps) {
  const { t } = useTranslation();
  const isSpam = result.decision === "SPAM";
  const riskPercentage = Math.round(result.final_score * 100);

  // Color scheme based on decision
  const verdictColor = isSpam ? "bg-destructive text-destructive-foreground" : "bg-success text-white";
  const progressColor = isSpam ? "bg-destructive" : "bg-success";

  return (
    <div className="space-y-6">
      {/* Section 1 - Verdict Banner */}
      <Card className="bg-card border-border">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 min-w-0">
              <Badge className={`${verdictColor} text-lg px-4 py-2 w-fit`}>
                {isSpam ? t("spam") : t("ham")}
              </Badge>
              <div className="flex flex-wrap items-baseline justify-start sm:justify-end gap-x-3 gap-y-1 sm:text-right min-w-0">
                <span className="text-sm font-medium text-muted-foreground break-words min-w-0">
                  {result.confidence} {t("confidence")}
                </span>
                <span className={`text-2xl font-bold whitespace-nowrap ${isSpam ? "text-destructive" : "text-success"}`}>
                  {riskPercentage}%
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("riskScore")}</span>
                <span className="font-medium">{riskPercentage}%</span>
              </div>
              <Progress value={riskPercentage} indicatorClassName={progressColor} />
            </div>
            <div className={`p-3 rounded-lg ${isSpam ? "bg-destructive/10" : "bg-success/10"}`}>
              <p className="text-sm">
                {isSpam ? (
                  <>
                    <AlertTriangle className="inline h-4 w-4 mr-1" />
                    {t("spamWarning")}
                  </>
                ) : (
                  <>
                    <Shield className="inline h-4 w-4 mr-1" />
                    {t("legitimateMessage")}
                  </>
                )}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 - AI Justification */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Sparkles className="h-5 w-5 text-primary" />
            {t("justification")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {justificationLoading ? (
            <div className="flex items-center gap-3 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">{t("loadingJustification")}</span>
            </div>
          ) : justificationError ? (
            <p className="text-sm text-muted-foreground italic">
              {t("justificationError")}
            </p>
          ) : justification ? (
            <div className="space-y-4">
              <blockquote className={`border-l-4 ${isSpam ? "border-destructive" : "border-success"} bg-secondary/50 p-4 rounded-r-lg overflow-visible h-auto w-full`}>
                <p className="text-base leading-relaxed break-words whitespace-pre-wrap hyphens-auto w-full" style={{ lineHeight: '1.7', maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>{justification}</p>
              </blockquote>
              <p className="text-xs text-muted-foreground">
                {t("justificationDesc")}
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">{t("loadingJustification")}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Section 3 - Pipeline Breakdown */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-5 w-5 text-primary" />
            {t("pipelineBreakdown")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Text Score */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2 min-w-0">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium break-words">{t("textAnalysis")}</span>
              </div>
              {result.pipeline_scores.text !== null ? (
                <>
                  <div className="text-2xl font-bold">
                    {Math.round(result.pipeline_scores.text * 100)}%
                  </div>
                  <Progress value={result.pipeline_scores.text * 100} className="h-2" indicatorClassName="bg-primary" />
                </>
              ) : (
                <div className="text-muted-foreground text-sm">N/A</div>
              )}
            </div>

            {/* Metadata Score */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2 min-w-0">
              <div className="flex items-center gap-2">
                <Link className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium break-words">{t("metadataAnalysis")}</span>
              </div>
              {result.pipeline_scores.metadata !== null ? (
                <>
                  <div className="text-2xl font-bold">
                    {Math.round(result.pipeline_scores.metadata * 100)}%
                  </div>
                  <Progress value={result.pipeline_scores.metadata * 100} className="h-2" indicatorClassName="bg-primary" />
                </>
              ) : (
                <div className="text-muted-foreground text-sm">N/A</div>
              )}
            </div>

            {/* Image Score */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2 min-w-0">
              <div className="flex items-center gap-2">
                <Image className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium break-words">{t("imageAnalysis")}</span>
              </div>
              {result.pipeline_scores.image !== null ? (
                <>
                  <div className="text-2xl font-bold">
                    {Math.round(result.pipeline_scores.image * 100)}%
                  </div>
                  <Progress value={result.pipeline_scores.image * 100} className="h-2" indicatorClassName="bg-primary" />
                </>
              ) : (
                <div className="text-muted-foreground text-sm">N/A</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 - Fusion Weights */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Shield className="h-5 w-5 text-primary" />
            {t("fusionWeightsUsed")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 min-w-0">
            <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full min-w-0 max-w-full">
              <MessageSquare className="h-3 w-3 text-primary" />
              <span className="text-sm font-medium">{t("text")}:</span>
              <span className="text-sm font-bold whitespace-nowrap">{Math.round(result.fusion_weights_used.text * 100)}%</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full min-w-0 max-w-full">
              <Link className="h-3 w-3 text-primary" />
              <span className="text-sm font-medium">{t("metadata")}:</span>
              <span className="text-sm font-bold whitespace-nowrap">{Math.round(result.fusion_weights_used.metadata * 100)}%</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full min-w-0 max-w-full">
              <Image className="h-3 w-3 text-primary" />
              <span className="text-sm font-medium">{t("image")}:</span>
              <span className="text-sm font-bold whitespace-nowrap">{Math.round(result.fusion_weights_used.image * 100)}%</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            {t("weightsContribution")}
          </p>
        </CardContent>
      </Card>

      {/* Section 4 - Key Indicators (Contributing Words) */}
      {result.explainability.contributing_words.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-5 w-5 text-warning" />
              {t("keyIndicatorsSuspicious")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {result.explainability.contributing_words.slice(0, 5).map((word, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`${
                    word.score > 0.7
                      ? "bg-destructive/20 text-destructive border-destructive/30"
                      : "bg-warning/20 text-warning border-warning/30"
                  } border max-w-full`}
                >
                  <span className="font-medium break-all">{word.word}</span>
                  <span className="ml-2 text-xs opacity-75">
                    {Math.round(word.score * 100)}%
                  </span>
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {t("wordsContributedDetection")}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Section 5 - Suspicious Features */}
      {result.explainability.contributing_features.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-5 w-5 text-warning" />
              {t("suspiciousFeatures")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {result.explainability.contributing_features.slice(0, 5).map((feature, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium break-words pr-2">{feature.feature}</span>
                    <span className="text-muted-foreground whitespace-nowrap">
                      {Math.round(feature.score * 100)}%
                    </span>
                  </div>
                  <Progress
                    value={feature.score * 100}
                    className="h-2"
                    indicatorClassName={feature.score > 0.7 ? "bg-destructive" : "bg-warning"}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {t("metadataFeaturesContributed")}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Section 6 - OCR Extracted Text */}
      {result.explainability.ocr_text && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Image className="h-5 w-5 text-primary" />
              {t("textExtractedImage")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="border-l-4 border-primary bg-secondary/50 p-4 rounded-r-lg">
              <p className="text-sm whitespace-pre-wrap">{result.explainability.ocr_text}</p>
            </blockquote>
            <p className="text-xs text-muted-foreground mt-3">
              {t("ocrExtractedText")}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
