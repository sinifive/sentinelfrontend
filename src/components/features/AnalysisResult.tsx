import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, Link, Image, Shield, TrendingUp, AlertTriangle } from "lucide-react";
import type { SentinelResponse } from "@/services/sentinelApiService";

interface AnalysisResultProps {
  result: SentinelResponse;
}

export function AnalysisResult({ result }: AnalysisResultProps) {
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
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Badge className={`${verdictColor} text-lg px-4 py-2`}>
                {result.decision}
              </Badge>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {result.confidence} Confidence
                </span>
                <span className={`text-2xl font-bold ${isSpam ? "text-destructive" : "text-success"}`}>
                  {riskPercentage}%
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Risk Score</span>
                <span className="font-medium">{riskPercentage}%</span>
              </div>
              <Progress value={riskPercentage} className={progressColor} />
            </div>
            <div className={`p-3 rounded-lg ${isSpam ? "bg-destructive/10" : "bg-success/10"}`}>
              <p className="text-sm">
                {isSpam ? (
                  <>
                    <AlertTriangle className="inline h-4 w-4 mr-1" />
                    This message appears to be spam/phishing. Exercise caution.
                  </>
                ) : (
                  <>
                    <Shield className="inline h-4 w-4 mr-1" />
                    This message appears to be legitimate.
                  </>
                )}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 - Pipeline Breakdown */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-5 w-5 text-primary" />
            Pipeline Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Text Score */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Text Analysis</span>
              </div>
              {result.pipeline_scores.text !== null ? (
                <>
                  <div className="text-2xl font-bold">
                    {Math.round(result.pipeline_scores.text * 100)}%
                  </div>
                  <Progress value={result.pipeline_scores.text * 100} className="h-2" />
                </>
              ) : (
                <div className="text-muted-foreground text-sm">N/A</div>
              )}
            </div>

            {/* Metadata Score */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <Link className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Metadata Analysis</span>
              </div>
              {result.pipeline_scores.metadata !== null ? (
                <>
                  <div className="text-2xl font-bold">
                    {Math.round(result.pipeline_scores.metadata * 100)}%
                  </div>
                  <Progress value={result.pipeline_scores.metadata * 100} className="h-2" />
                </>
              ) : (
                <div className="text-muted-foreground text-sm">N/A</div>
              )}
            </div>

            {/* Image Score */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <Image className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Image Analysis</span>
              </div>
              {result.pipeline_scores.image !== null ? (
                <>
                  <div className="text-2xl font-bold">
                    {Math.round(result.pipeline_scores.image * 100)}%
                  </div>
                  <Progress value={result.pipeline_scores.image * 100} className="h-2" />
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
            Fusion Weights Used
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full">
              <MessageSquare className="h-3 w-3 text-primary" />
              <span className="text-sm font-medium">Text:</span>
              <span className="text-sm font-bold">{Math.round(result.fusion_weights_used.text * 100)}%</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full">
              <Link className="h-3 w-3 text-primary" />
              <span className="text-sm font-medium">Metadata:</span>
              <span className="text-sm font-bold">{Math.round(result.fusion_weights_used.metadata * 100)}%</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full">
              <Image className="h-3 w-3 text-primary" />
              <span className="text-sm font-medium">Image:</span>
              <span className="text-sm font-bold">{Math.round(result.fusion_weights_used.image * 100)}%</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            These weights show how much each analysis pipeline contributed to the final decision.
          </p>
        </CardContent>
      </Card>

      {/* Section 4 - Key Indicators (Contributing Words) */}
      {result.explainability.contributing_words.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Key Indicators (Suspicious Words)
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
                  } border`}
                >
                  <span className="font-medium">{word.word}</span>
                  <span className="ml-2 text-xs opacity-75">
                    {Math.round(word.score * 100)}%
                  </span>
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              These words contributed most significantly to the spam detection.
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
              Suspicious Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {result.explainability.contributing_features.slice(0, 5).map((feature, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{feature.feature}</span>
                    <span className="text-muted-foreground">
                      {Math.round(feature.score * 100)}%
                    </span>
                  </div>
                  <Progress
                    value={feature.score * 100}
                    className={`h-2 ${
                      feature.score > 0.7 ? "bg-destructive" : "bg-warning"
                    }`}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              These metadata features contributed to the detection.
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
              Text Extracted from Image
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="border-l-4 border-primary bg-secondary/50 p-4 rounded-r-lg">
              <p className="text-sm whitespace-pre-wrap">{result.explainability.ocr_text}</p>
            </blockquote>
            <p className="text-xs text-muted-foreground mt-3">
              This text was extracted from the uploaded screenshot using OCR.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
