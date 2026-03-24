-- Add missing columns for Sentinel API integration
ALTER TABLE public.analyses ADD COLUMN IF NOT EXISTS decision TEXT;
ALTER TABLE public.analyses ADD COLUMN IF NOT EXISTS confidence TEXT;
ALTER TABLE public.analyses ADD COLUMN IF NOT EXISTS contributing_words JSONB;
ALTER TABLE public.analyses ADD COLUMN IF NOT EXISTS contributing_features JSONB;

-- Create an index on decision for performance
CREATE INDEX IF NOT EXISTS idx_analyses_decision ON public.analyses(decision);
CREATE INDEX IF NOT EXISTS idx_analyses_confidence ON public.analyses(confidence);