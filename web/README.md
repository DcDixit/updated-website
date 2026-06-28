# Northline Marketing Website

Production Next.js marketing site for **Northline Digital** - UI/UX design, product development, and AI-powered workflows.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Base UI / shadcn** components
- **Instrument Sans** typography

## Local development

```bash
cd web
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical site URL for SEO, sitemap, Open Graph |
| `RESEND_API_KEY` | Production | Resend API key for contact form email delivery |
| `CONTACT_TO_EMAIL` | Production | Inbox that receives form submissions |
| `CONTACT_FROM_EMAIL` | Production | Sender address (must be verified in Resend) |

Without `RESEND_API_KEY`, the contact API logs submissions in development and returns a warning in production.

## Content architecture

All editable marketing content lives in `src/content/`:

| File | Purpose |
| --- | --- |
| `brand.ts` | Company name, contact, social links, review profiles |
| `team.ts` | Leadership bios and culture |
| `services.ts` | Service catalog and detail copy |
| `portfolio.ts` | Case studies |
| `testimonials.ts` | Client quotes and logo strip |
| `insights.ts` | Blog articles |
| `navigation.ts` | Header, footer, CTAs |
| `visuals.ts` | Image URLs (replace with licensed client work) |

Update **`brand.ts`** first when renaming the company - metadata, footer, and legal pages pull from there.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build (static + SSG routes)
npm run start    # Serve production build
npm run lint     # ESLint
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Vercel/production checklist.

## Project structure

```
src/
├── app/              # Routes (pages, API, sitemap, robots)
├── components/
│   ├── contact/      # Form and sidebar
│   ├── layout/       # Container, Section, PageHero
│   ├── marketing/    # Cards, CTAs, testimonials
│   └── site/         # Header, footer, theme, mega menu
├── content/          # Marketing copy (edit here)
└── lib/              # SEO, contact validation, theme
```
