import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/siteData";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1B3B22",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.shortName} | Organic Landscaping & Garden Design Dubai`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description:
    "Organic home gardens and landscaping for villas and apartments in Dubai and the UAE. Garden packages from AED 1,000, drip irrigation and garden maintenance.",
  keywords: [
    "organic landscaping dubai",
    "villa garden design dubai",
    "organic vegetable garden uae",
    "landscaping company dubai",
    "smart irrigation dubai",
    "dubai hills landscaping",
    "jumeirah villa garden",
    "chemical free gardening uae",
    "landscape maintenance dubai amc",
    "living soil conditioner dubai",
    "via organic",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VIA Organic | Organic Landscaping & Garden Design Dubai",
    description:
      "Organic home gardens and landscaping for villas and apartments in Dubai and the UAE. Garden packages from AED 1,000.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lush green garden by VIA Organic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIA Organic | Organic Landscaping & Garden Design Dubai",
    description:
      "Organic home gardens and landscaping for villas and apartments in Dubai and the UAE.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.shortName,
  image: `${SITE_CONFIG.url}/images/og-image.jpg`,
  logo: `${SITE_CONFIG.url}/images/logo.png`,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  priceRange: "AED 1,000 - 3,800",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.emirate,
    addressCountry: "AE",
  },
  sameAs: [SITE_CONFIG.instagram],
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Organic Landscaping Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Organic Home Garden Packages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Organic Vegetable & Kitchen Gardens",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Drip Irrigation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Living Soil Care & Organic Regeneration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annual Estate Maintenance Contract (AMC)",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-cream text-charcoal antialiased selection:bg-sand-dark selection:text-forest">
        {children}
      </body>
    </html>
  );
}
