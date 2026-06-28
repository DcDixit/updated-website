# Northline Digital — Website Project

Client-ready project bundle for the Northline Digital marketing website.

## Contents

| Folder / file | Description |
| --- | --- |
| `web/` | Production Next.js site (App Router, React 19, Tailwind 4) |
| `docs/` | Design handoff documentation |
| `Pages/` | Homepage PDF mockup and HTML redesign reference |
| `Our-Website-updated-2026-06-12.zip` | Full project snapshot archive |

## Quick start (local preview)

```bash
cd web
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

See `web/README.md` and `web/DEPLOYMENT.md` for environment variables and deployment.

## Deploy to Vercel (live demo URL)

1. Open [Import on Vercel](https://vercel.com/new/clone?repository-url=https://github.com/DcDixit/updated-website) and sign in with GitHub.
2. Set **Root Directory** to `web` (click **Edit** on the import screen).
3. Leave **Framework Preset** as **Next.js**; build command stays `npm run build`.
4. Add environment variable (optional for demo, recommended after deploy):
   - `NEXT_PUBLIC_SITE_URL` = your `*.vercel.app` URL (update after first deploy)
5. Click **Deploy** — your live URL appears in ~2 minutes.

The contact form needs `RESEND_API_KEY` in Vercel env vars; all other pages work without it.
