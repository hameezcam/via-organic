# VIA Organic — Modern Organic Landscaping & Garden Website

A fast, mobile-first website for **VIA Organic Agriculture LLC** (`viaorganic.ae`), Dubai's premier organic landscaping and sustainable garden artisans.

Built with **Next.js 16 (App Router)**, **TypeScript (Strict Mode)**, and **Tailwind CSS**.

---

## 🌟 Brand Feel & Aesthetic Architecture

- **Visual Direction:** Natural, premium, and calm.
- **Palette:** Earthy greens (`#1B3B22`, `#2A5A35`), warm desert sand (`#EAE3D2`, `#F7F4EC`), off-white cream (`#FAF8F3`), and subtle gold accents (`#C29B38`).
- **Typography:**
  - **Headings:** *Cormorant Garamond* (editorial luxury serif via `next/font/google`).
  - **Body Text:** *Plus Jakarta Sans* (crisp, modern, high-legibility sans-serif).
- **Subtle Motion:** Micro-interactions, hover card translations, and soft pulsing WhatsApp action button.
- **Tone of Voice:** Persuasive, concise copy written in **British English** tailored for UAE villa owners, developers, and commercial hospitality.

---

## 📑 Included Sections & Features

1. **Header & Navigation:** Sticky header with brand logo mark, direct phone link (`+971 55 959 6830`), WhatsApp action trigger, and mobile drawer menu.
2. **Hero:** Bold one-line promise, concise subline, dual call-to-action buttons (*"Get a free quote"* opens WhatsApp, *"View packages"* smooth-scrolls), and trust indicators.
3. **About Section:** Our story (founded in 2016 in Sri Lanka with 10+ years agronomic experience, expanded to UAE in 2023), why organic living soil matters in desert climate, and three core values (Ecological Integrity, Water Wisdom, Bespoke Craftsmanship).
4. **Services (5 Disciplines):**
   - Bespoke Garden Design & Landscaping
   - Organic Vegetable & Kitchen Gardens
   - Smart Water & Precision Irrigation (up to 50% water savings)
   - Living Soil Care & Organic Nutrition
   - Annual Estate Maintenance (AMC)
   *Each with an icon, 2-line description, feature list, and WhatsApp enquiry button.*
5. **Packages (AED Pricing Cards):**
   - **Bronze:** AED 3,499 (Garden Revitalisation)
   - **Silver:** AED 6,999 (Living Villa Oasis)
   - **Gold (Most Popular):** AED 12,499 (Signature Villa Sanctuary) — highlighted with gold badge and elevated luxury styling
   - **Platinum:** AED 24,999 (Master Estate & Edible Haven)
6. **Organic Products Grid:** Certified organic living desert soil, micro-thermal compost, non-GMO heirloom seed collection, handcrafted cedar raised bed, seaweed foliar spray, and drip kit with AED prices and direct WhatsApp ordering.
7. **Project Gallery:** Filterable masonry-style showcase with authentic project imagery (Dubai Hills Estate, Jumeirah 3, Tilal Al Ghaf, Abu Dhabi) and direct link to Instagram (`@viaorganic`).
8. **Testimonials Carousel:** Interactive carousel with star ratings and reviews from verified UAE villa clients.
9. **FAQ Accordion:** Accessible accordion answering top questions (Dubai summer heat survival, non-toxic pest control, water savings, quotation process).
10. **Contact & Lead Generation:**
    - Interactive form that dynamically generates a pre-formatted message and opens WhatsApp.
    - Click-to-call phone (`+971 55 959 6830`) and click-to-email (`info@viaorganic.ae`).
    - Embedded Google Map of Dubai.
    - Working hours.
11. **Footer & Global Floating WhatsApp:** Complete company details, social channels, copyright notice, and a fixed pulsating WhatsApp button on every screen.

---

## 🛠️ Technical Stack & Quality Standards

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript 5+ with strict typing throughout (`src/types/index.ts`)
- **Styling:** Tailwind CSS v4 with custom organic design tokens
- **Icons:** Lucide React + custom SVG icons (`src/components/Icons.tsx`)
- **SEO & Social:** Open Graph, Twitter Cards, robots configuration, and JSON-LD `LocalBusiness` / `HomeAndConstructionBusiness` structured data for top Google ranking in Dubai.
- **Accessibility:** WCAG AA contrast, semantic HTML5, keyboard-navigable accordions, and descriptive `alt` tags on every image.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.18+ (Node 20 or 24 recommended)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/via-organic-website.git
cd via-organic-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## ☁️ Free Deployment Guide

### Option 1: Vercel (Recommended — 2 Minutes)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of VIA Organic website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **Add New Project** and select your repository.
4. Next.js is automatically detected with zero configuration required.
5. Click **Deploy**. Your site will be live instantly with global CDN and free HTTPS.
6. Under **Project Settings > Domains**, you can bind your custom domain `viaorganic.ae`.

### Option 2: GitHub Pages (Static HTML Export)
To deploy static HTML on GitHub Pages:
1. In `next.config.ts`, set `output: 'export'`.
2. Run `npm run build` to generate the static files in `out/`.
3. Push the `out/` folder or configure GitHub Actions with the official Next.js Pages action.

---

## 📝 Customization & `[REPLACE]` Placeholders

All content, telephone numbers, and email addresses are centralized in [`src/data/siteData.ts`](file:///C:/Users/ASUS%20TUF/.gemini/antigravity-ide/scratch/via-organic-website/src/data/siteData.ts):

| Setting | Current Value | To Customise |
|---|---|---|
| `whatsappNumber` | `+971559596830` | Update in `src/data/siteData.ts` |
| `phone` | `+971 55 959 6830` | Update in `src/data/siteData.ts` |
| `email` | `info@viaorganic.ae` | Update in `src/data/siteData.ts` |
| `address.street` | `Warehouse 14, Al Quoz Industrial Area 3 [REPLACE]` | Update with physical unit |
| `instagram` | `https://instagram.com/viaorganic` | Update handle |
| `domain` | `viaorganic.ae` | Update canonical domain |

---

## 📄 Licence

Proprietary © 2026 VIA Organic Agriculture LLC. All rights reserved.
