# Deployment Guide

Pre-launch checklist and production setup for the Northline marketing site.

## Important: DNS cutover

The live domain `northlinedigital.com` may still serve a **legacy website** until DNS points to this Next.js deployment. Run Lighthouse against the local production build until after cutover:

```bash
npm run build && npm run start
npm run lighthouse
```

After DNS cutover, run `npm run lighthouse:prod`.

## Recommended platform

**Vercel** (native Next.js support, edge caching, automatic HTTPS).

Alternative: any Node.js host that supports Next.js 16 (`npm run build` + `npm run start`).

## Pre-deploy checklist

### 1. Environment variables

Set in your hosting provider (Vercel → Project → Settings → Environment Variables):

```
NEXT_PUBLIC_SITE_URL=https://northlinedigital.com
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=hello@northlinedigital.com
CONTACT_FROM_EMAIL=Northline Digital <hello@northlinedigital.com>
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

- `NEXT_PUBLIC_SITE_URL` must match your live domain (no trailing slash).
- Verify the sender domain in [Resend](https://resend.com) before go-live.
- Configure GA4 conversions - see [`docs/GA4-CONVERSION-SETUP.md`](./docs/GA4-CONVERSION-SETUP.md).
- Use **either** direct GA4 **or** GTM as the primary analytics loader to avoid double-counting.

### 2. Brand & content

**Marketing images:** Commit `public/images/` and `public/brand/og-default.jpg` to the repository so deploys work offline. The build runs `npm run images:fetch` automatically (`prebuild`) and skips files that already exist. To refresh all assets: `FORCE_IMAGES=1 npm run images:fetch`.

Edit `src/content/brand.ts`:

- [ ] Company name (`shortName`, `legalName`)
- [ ] Contact email, phone, address
- [ ] Social links (LinkedIn, Instagram, X)
- [ ] Cal.com URL (`schedulingUrl`)
- [ ] Clutch and Google review URLs (`reviewProfiles`)

Edit `src/content/team.ts`:

- [ ] Replace practice-area cards with named leadership when approved
- [ ] Add real team photos to `public/brand/team/` when available

Edit `src/content/testimonials.ts`:

- [ ] Replace anonymized quotes with named client quotes when approval is on file
- [ ] Swap `industryFocus` badges for licensed client logos when available

Edit `src/content/visuals.ts`:

- [ ] Replace branded SVG placeholders with licensed client screenshots when available

### 3. SEO verification

After deploy, confirm:

- [ ] `https://northlinedigital.com/sitemap.xml` loads
- [ ] `https://northlinedigital.com/robots.txt` loads
- [ ] Homepage Open Graph preview (LinkedIn Post Inspector)
- [ ] Submit sitemap in Google Search Console
- [ ] Validate structured data in [Rich Results Test](https://search.google.com/test/rich-results)

### 4. GA4 conversion setup

Mark these as **Key events** in GA4 Admin:

| Event | Purpose |
|-------|---------|
| `generate_lead` | Contact form submission |
| `schedule_call_click` | Cal.com / booking clicks |
| `cta_click` | Primary CTAs |
| `whatsapp_click` | WhatsApp engagement |

Full instructions: [`docs/GA4-CONVERSION-SETUP.md`](./docs/GA4-CONVERSION-SETUP.md)

### 5. Functional smoke test

- [ ] Homepage loads (light + dark theme)
- [ ] Solutions mega menu + mobile nav
- [ ] Contact form submission → email received
- [ ] WhatsApp button opens correct chat
- [ ] All `/solutions/*`, `/services/*`, `/work/*`, `/insights/*` pages
- [ ] 404 page for invalid URLs
- [ ] Cal.com link opens from contact sidebar

## Vercel deployment

```bash
cd web
npx vercel link
npx vercel          # preview
npx vercel --prod   # production
```

Or connect the Git repository in the Vercel dashboard:

- **Root directory:** `web`
- **Build command:** `npm run build`
- **Output:** Next.js default

## Final QA checklist (pre-production)

- [ ] All env vars set in Vercel (especially `RESEND_API_KEY` and `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- [ ] Contact form sends email in production (without Resend, API returns 503)
- [ ] Solutions mega menu + mobile nav open all routes
- [ ] Theme toggle: light and dark mode on homepage + inner pages
- [ ] WhatsApp button + sticky mobile CTA do not overlap awkwardly
- [ ] `/sitemap.xml` and `/robots.txt` return 200
- [ ] Open Graph preview correct on homepage and one article page
- [ ] External review links (Clutch, Google) point to live profiles
- [ ] Lighthouse: Performance ≥ 85, Accessibility ≥ 90 (`npm run lighthouse`)
- [ ] Responsive QA at 375px, 768px, 1280px viewports

## Post-deploy

1. Point DNS A/CNAME records to Vercel.
2. Enable HTTPS (automatic on Vercel).
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain and redeploy.
4. Link GA4 to Search Console.
5. Monitor contact form delivery for the first 48 hours.
6. Run `npm run lighthouse:prod` after DNS cutover.

## Performance notes

- All marketing pages are statically generated at build time.
- Marketing images live in `public/images/` (JPG) with `public/brand/og-default.jpg` for social previews. Run `npm run images:fetch` after clone if images are missing.
- Theme preference persists via `localStorage` (`northline-theme` key).

## Support

For content updates, edit files in `src/content/` and redeploy. No database required.
