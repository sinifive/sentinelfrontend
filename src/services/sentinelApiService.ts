/**
 * Sentinel AI Backend API Service
 * Handles communication with the multi-modal phishing detection API
 */

// API Base URL from environment variable with fallback
export const SENTINEL_API_BASE_URL =
  import.meta.env.VITE_SENTINEL_API_URL || "http://localhost:8000";

/**
 * Request payload for the Sentinel API /predict endpoint
 */
export interface SentinelRequest {
  text?: string;
  image?: string; // base64
  metadata?: {
    sender?: string;
    url?: string;
    timestamp?: string;
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
  const response = await fetch(`${SENTINEL_API_BASE_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
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
