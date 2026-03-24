# SentinelAI

AI-powered SMS fraud detection for India. Detect scams instantly in Hindi, English, and Telugu.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Auth, Database, Edge Functions)
- **AI**: Google Gemini 2.0 Flash
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- Supabase CLI
- A Supabase project
- A Google Gemini API key ([get one free](https://aistudio.google.com))

### Local Development

```sh
# Clone the repo
git clone <YOUR_GIT_URL>
cd sentinelai

# Install dependencies
npm install

# Create a .env file with your Supabase credentials
cp .env.example .env

# Start the dev server
npm run dev
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| VITE_SUPABASE_URL | Yes | Supabase project URL (e.g. https://your-project.supabase.co) |
| VITE_SUPABASE_PUBLISHABLE_KEY | Yes | Supabase anon key |
| VITE_SENTINEL_API_URL | Yes | FastAPI backend URL (e.g. http://localhost:8000 or https://your-backend.com) |

**Note:** For local development, copy `.env.example` to `.env.local` and fill in values.

### Backend Setup

```sh
# Link to your Supabase project
supabase link --project-ref <your-project-ref>

# Push database migrations
supabase db push

# Set the Gemini API key as a secret
supabase secrets set GEMINI_API_KEY=your_key_here

# Deploy edge functions
supabase functions deploy analyze-sms
supabase functions deploy chat-assistant
```

## Deployment

The app is deployed on Vercel. Push to `main` to trigger a redeployment.

For the Vercel deployment to work with Google OAuth, ensure your Vercel URL is added to:
- Supabase → Authentication → URL Configuration → Redirect URLs
