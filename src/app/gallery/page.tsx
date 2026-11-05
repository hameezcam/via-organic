import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import CtaBand from '@/components/CtaBand';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Garden Project Gallery: Dubai and Abu Dhabi',
  description:
    'Photos of villa gardens planted by VIA Organic in Dubai Hills Estate, Jumeirah, Tilal Al Ghaf, Abu Dhabi and across Dubai.',
  path: '/gallery',
  image: { url: '/images/entrance-pathway.jpg', alt: 'Villa entrance with paved steps, turf and garden lighting' },
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Gardens we have planted"
        intro="Real villa gardens our team has planted in Dubai and Abu Dhabi. Select a photo to see it larger."
        image="/images/entrance-pathway.jpg"
        imageAlt="Villa entrance with paved steps, turf and garden lighting"
      />
      <Gallery />
      <CtaBand
        title="Planning a garden like these?"
        text="Send us a few photos of your space on WhatsApp and tell us what you have in mind. We will arrange a site visit and send you a clear quote."
        message="Hello VIA Organic, I saw your gallery and would like a quote for my garden."
        secondary={{ label: 'Landscaping service', href: '/services/landscaping' }}
      />
    </>
  );
}
