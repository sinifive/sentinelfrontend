// ============================================
// SentinelAI Type Definitions
// ============================================

// Risk level enum
export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

// Supported analysis languages
export type Language = 'english' | 'hindi' | 'telugu' | 'urdu' | 'tamil' | 'marathi';

// Threat indicator in analysis
export interface ThreatIndicator {
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

// Sender analysis data
export interface SenderAnalysis {
  phone: string;
  inContacts: boolean;
  reportCount: number;
  isNew: boolean;
}

// Content analysis data
export interface ContentAnalysis {
  hasLinks: boolean;
  linkDomain?: string;
  hasUrgency: boolean;
  grammarScore: number;
  keywords: string[];
  triggerPhrases?: string[];
}

// Recommendations
export interface Recommendations {
  do: string[];
  dont: string[];
}

// ============================================
// ML Backend Types
// ============================================

// Contributing word from text analysis
export interface ContributingWord {
  word: string;
  score: number;
}

// Contributing feature from metadata analysis
export interface ContributingFeature {
  feature: string;
  score: number;
}

// Pipeline scores from ML backend
export interface PipelineScores {
  text_score: number | null;
  metadata_score: number | null;
  image_score: number | null;
}

// Explainability data from ML backend
export interface MLExplainability {
  contributing_words: ContributingWord[];
  contributing_features: ContributingFeature[];
  ocr_extracted_text: string | null;
}

// Fusion weights used in prediction
export interface FusionWeightsUsed {
  text: number;
  metadata: number;
  image: number;
}

// Complete analysis result for display
export interface AnalysisResult {
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  confidence: number;
  verdict: string;
  action: string;
  threats: ThreatIndicator[];
  senderAnalysis: SenderAnalysis;
  contentAnalysis: ContentAnalysis;
  recommendations: Recommendations;
  // ML Backend specific fields
  mlDecision?: 'SPAM' | 'HAM';
  mlConfidence?: 'HIGH' | 'MEDIUM' | 'LOW';
  pipelineScores?: PipelineScores;
  explainability?: MLExplainability;
  fusionWeights?: FusionWeightsUsed;
  justification?: string;
}

// Data structure for saving to database
export interface AnalysisData {
  senderPhone: string;
  messageContent: string;
  dateReceived: string;
  timeReceived: string;
  screenshotUrl?: string;
  language: Language;
  riskScore: number;
  riskLevel: RiskLevel;
  verdict: string;
  threats: ThreatIndicator[];
  recommendations: Recommendations;
  senderAnalysis: SenderAnalysis;
  contentAnalysis: ContentAnalysis;
}

// User preferences
export interface UserPreferences {
  defaultLanguage: Language;
  theme: 'light' | 'dark' | 'system';
  emailNotifications: boolean;
  autoDeleteHistory: boolean;
}

// Database analysis row (from Supabase)
export interface AnalysisRow {
  id: string;
  user_id: string;
  sender_phone: string;
  message_content: string;
  date_received: string;
  time_received: string;
  screenshot_url: string | null;
  language: Language;
  risk_score: number | null;
  risk_level: RiskLevel | null;
  verdict: string | null;
  threats: ThreatIndicator[] | null;
  recommendations: Recommendations | null;
  sender_analysis: SenderAnalysis | null;
  content_analysis: ContentAnalysis | null;
  created_at: string;
  updated_at: string;
}

// Profile from database
export interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}
