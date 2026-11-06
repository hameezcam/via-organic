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

## Motion system

Animations are CSS-first, with no animation library. The only JavaScript is one shared `IntersectionObserver` (`src/components/motion/RevealObserver.tsx`) and a small count-up component.

| Token (in `globals.css`) | Value | Used for |
|---|---|---|
| `--ease-organic` (`ease-organic` utility) | `cubic-bezier(0.22, 1, 0.36, 1)` | Every transition |
| `--motion-fast` | 280ms | Hovers, presses, focus |
| `--motion-menu` | 320ms | Dropdowns, menus, accordions, lightbox |
| `--motion-reveal` | 700ms | Scroll reveals |
| `--motion-hero` | 850ms | Hero entrance |
| `--motion-distance` | 24px | How far revealed content rises |
| `--motion-stagger` | 120ms | Delay between items in a group |

How to use it:

- `data-reveal` on an element fades it up once when it scrolls into view. `data-reveal-group` does the same for each direct child, staggered.
- `.hero-rise` with `--hero-delay` / `--hero-duration` is the hero entrance. It is pure CSS, so it starts on first paint.
- `.btn-motion`, `.arrow-motion` and `.field-motion` give buttons, arrows and form fields consistent hover, press and focus motion. `.collapse-motion` animates accordions and submenus to their natural height.
- Only `opacity` and `transform`/`translate`/`scale` are animated (plus the accordion's `grid-template-rows`). No layout-shifting properties are used.

Safety rules built in:

- Content is visible by default. A script in `<head>` only enables hiding of unrevealed content when `IntersectionObserver` exists, and switches it off again if the reveal script has not started within 3.5 seconds.
- `prefers-reduced-motion: reduce` removes all reveals, entrance animations and transitions, and the acreage figure shows its final value immediately.
- Closed menus and FAQ answers are `inert`, so they never receive keyboard focus.
- The acreage count keeps the real figure in the page text. Only a decorative overlay counts up, and it is hidden from assistive technology.

## SEO and structured data

- Per-page titles, descriptions, canonicals and social cards: `pageMetadata()` in [`src/lib/seo.ts`](src/lib/seo.ts)
- Site-wide Organization, LocalBusiness and WebSite JSON-LD in the root layout; Service and BreadcrumbList on each service page; FAQPage on `/faq`
- `src/app/sitemap.ts` and `src/app/robots.ts`

Ratings, reviews and opening hours are deliberately left out of the structured data until they are real and shown on the site.

## Photos

Only real photos are used: VIA Organic garden projects in Dubai and Abu Dhabi, and VIA Group farm photos from Sri Lanka. Images are served through `next/image`, which resizes them and serves modern formats automatically on Vercel.
