import type { TranslationKey } from "@/lib/translations";

export const RISK_THRESHOLDS = { LOW: 30, MEDIUM: 69 } as const;

export function getRiskColor(riskLevel: "low" | "medium" | "high"): string {
  switch (riskLevel) {
    case "high":   return "text-destructive";
    case "medium": return "text-warning";
    case "low":    return "text-success";
  }
}

export function getRiskBgColor(riskLevel: "low" | "medium" | "high"): string {
  switch (riskLevel) {
    case "high":   return "bg-destructive";
    case "medium": return "bg-warning";
    case "low":    return "bg-success";
  }
}

export function getThreatsTitle(riskLevel: "low" | "medium" | "high"): TranslationKey {
  switch (riskLevel) {
    case "high":   return "whyDangerous";
    case "medium": return "proceedWithCaution";
    case "low":    return "thingsToNote";
  }
}

/** "high" | "medium" → show warning/danger icon; "low" → info icon */
export function getThreatsIconType(riskLevel: "low" | "medium" | "high"): "info" | "warning" {
  return riskLevel === "low" ? "info" : "warning";
}
