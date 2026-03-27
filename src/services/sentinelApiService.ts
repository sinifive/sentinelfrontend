/**
 * Sentinel AI Backend API Service
 * Handles communication with the multi-modal phishing detection API
 */

// Use environment variable for API base URL with fallback
const SENTINEL_API_BASE_URL = import.meta.env.VITE_SENTINEL_API_URL || "https://SINIFI-sentinelai-backend.hf.space";

// Build the predict endpoint URL
export const API_URL = `${SENTINEL_API_BASE_URL}/predict`;

/**
 * Request payload for the Sentinel API /predict endpoint
 */
export interface SentinelRequest {
  text: string;
  image: string | null; // base64 or null
  metadata: {
    sender: string;
    url: string;
    timestamp: string;
  };
}

/**
 * Response from the Sentinel API /predict endpoint
 */
export interface SentinelResponse {
  final_score: number;
  decision: "SPAM" | "HAM";
  confidence: "HIGH" | "MEDIUM" | "LOW";
  pipeline_scores: {
    text: number | null;
    metadata: number | null;
    image: number | null;
  };
  explainability: {
    contributing_words: { word: string; score: number }[];
    contributing_features: { feature: string; score: number }[];
    ocr_text: string | null;
  };
  fusion_weights_used: {
    text: number;
    metadata: number;
    image: number;
  };
}

/**
 * Analyze SMS message for phishing detection
 * @param payload - SMS content, image, and metadata
 * @returns Prediction response with scores and explainability
 * @throws Error if the API request fails
 */
export async function analyzeSMS(
  payload: SentinelRequest
): Promise<SentinelResponse> {
  const normalizedPayload: SentinelRequest = {
    text: payload.text,
    image: payload.image ?? null,
    metadata: {
      sender: payload.metadata?.sender ?? "",
      url: payload.metadata?.url ?? "",
      timestamp: payload.metadata?.timestamp ?? new Date().toISOString(),
    },
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(normalizedPayload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = `API request failed with status ${response.status}`;

    try {
      const errorJson = JSON.parse(errorText);
      errorMessage = errorJson.message || errorJson.detail || errorMessage;
    } catch {
      // If error is not JSON, use the text or default message
      errorMessage = errorText || errorMessage;
    }

    throw new Error(errorMessage);
  }

  return response.json();
}

/**
 * Check if the Sentinel backend is healthy and ready
 * @returns true if backend is healthy, false otherwise
 */
export async function checkBackendHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${SENTINEL_API_BASE_URL}/health`, {
      method: "GET",
    });
    return response.status === 200;
  } catch {
    return false;
  }
}

/**
 * Request payload for the /justify endpoint
 */
export interface JustifyRequest {
  final_score: number;
  decision: "SPAM" | "HAM";
  confidence: "HIGH" | "MEDIUM" | "LOW";
  pipeline_scores: {
    text: number | null;
    metadata: number | null;
    image: number | null;
  };
  explainability: {
    contributing_words: { word: string; score: number }[];
    contributing_features: { feature: string; score: number }[];
    ocr_text: string | null;
  };
  fusion_weights_used: {
    text: number;
    metadata: number;
    image: number;
  };
  language: string;
  original_message?: string;
}

/**
 * Response from the /justify endpoint
 */
export interface JustifyResponse {
  justification: string;
}

/**
 * Get justification for ML detection result
 * @param result - The SentinelResponse from /predict
 * @param language - Target language (english, hindi, telugu, urdu, tamil)
 * @param originalMessage - Original SMS message text (optional)
 * @returns Human-readable justification in the specified language
 */
export async function getJustification(
  result: SentinelResponse,
  language: string,
  originalMessage?: string
): Promise<string> {
  const payload: JustifyRequest = {
    final_score: result.final_score,
    decision: result.decision,
    confidence: result.confidence,
    pipeline_scores: result.pipeline_scores,
    explainability: result.explainability,
    fusion_weights_used: result.fusion_weights_used,
    language,
    original_message: originalMessage,
  };

  try {
    const response = await fetch(`${SENTINEL_API_BASE_URL}/justify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Justification API error:", errorText);
      throw new Error(`Justification failed: ${response.status}`);
    }

    const data: JustifyResponse = await response.json();
    return data.justification;
  } catch (error) {
    console.error("Error fetching justification:", error);
    // Return empty string to indicate failure - component will show loading or skip
    throw error;
  }
}
