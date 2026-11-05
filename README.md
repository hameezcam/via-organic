# VIA Organic website

Marketing website for **VIA Organic Agriculture LLC**, Dubai, UAE: landscaping, commercial farms, advanced agriculture, farm management and fresh vegetable distribution.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Deployed on Vercel from the `main` branch.

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where to edit content

Almost all content lives in [`src/data/siteData.ts`](src/data/siteData.ts):

| What | Where |
|---|---|
| Phone, WhatsApp, email, address, Instagram | `SITE_CONFIG` |
| The five services and their detail pages | `SERVICES_DATA` |
| Gallery projects (keep `width`/`height` in step with the photo) | `GALLERY_PROJECTS` |
| FAQ (also feeds the FAQ structured data) | `FAQ_DATA` |
| Founder / leadership profile | `FOUNDER` (hidden while `null`) |
| Customer reviews | `TESTIMONIALS` (hidden while empty; add only genuine reviews, with permission) |
| Office hours | `BUSINESS_HOURS` (while `null`, the site says site visits are by appointment) |
| Google Maps pin for the office | `SITE_CONFIG.mapsPlaceUrl` (paste the place link from Google Maps) |

WhatsApp links are built with `buildWhatsAppLink()`, which uses the digits-only number `971559596830` and URL-encodes the message. The contact form's validation and message format are in [`src/lib/enquiry.ts`](src/lib/enquiry.ts). Nothing is sent automatically: the visitor reviews the message in WhatsApp and presses send.

## Production domain

Canonical URLs, the sitemap, robots.txt, Open Graph tags and structured data all use `SITE_CONFIG.url`. It resolves in this order:

1. `NEXT_PUBLIC_SITE_URL` environment variable, if set (for example `https://viaorganic.ae`)
2. `CONFIRMED_SITE_URL` in `src/data/siteData.ts`, if filled in
3. Vercel's production domain for the project (`VERCEL_PROJECT_PRODUCTION_URL`), falling back to `https://via-organic.vercel.app`

When a custom domain is confirmed, set it in one of the first two places and redeploy.

## SEO and structured data

- Per-page titles, descriptions, canonicals and social cards: `pageMetadata()` in [`src/lib/seo.ts`](src/lib/seo.ts)
- Site-wide Organization, LocalBusiness and WebSite JSON-LD in the root layout; Service and BreadcrumbList on each service page; FAQPage on `/faq`
- `src/app/sitemap.ts` and `src/app/robots.ts`

Ratings, reviews and opening hours are deliberately left out of the structured data until they are real and shown on the site.

## Photos

Only real photos are used: VIA Organic garden projects in Dubai and Abu Dhabi, and VIA Group farm photos from Sri Lanka. Images are served through `next/image`, which resizes them and serves modern formats automatically on Vercel.
