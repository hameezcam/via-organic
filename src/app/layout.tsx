import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SERVICES_DATA, SITE_CONFIG } from "@/data/siteData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
    default: `${SITE_CONFIG.shortName} | Landscaping & Organic Agriculture in the UAE`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description:
    "Landscaping, commercial farms, advanced agriculture, farm management and fresh vegetable distribution in the UAE, from VIA Group's organic farming team.",
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
    title: "VIA Organic | Landscaping & Organic Agriculture in the UAE",
    description:
      "Landscaping, commercial farming, advanced agriculture, farm management and fresh vegetable distribution in the UAE.",
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
    title: "VIA Organic | Landscaping & Organic Agriculture in the UAE",
    description:
      "Landscaping, commercial farming, advanced agriculture, farm management and fresh vegetable distribution in the UAE.",
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
    name: "VIA Organic Services",
    itemListElement: SERVICES_DATA.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title },
    })),
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
      <body
        id="top"
        className="min-h-screen flex flex-col font-sans bg-cream text-charcoal antialiased selection:bg-sand-dark selection:text-forest"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full focus:bg-forest focus:text-sand-light"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
