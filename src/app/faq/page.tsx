import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import { FAQ_DATA } from '@/data/siteData';
import { faqStructuredData, jsonLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Frequent Questions About Organic Gardens and Farms',
  description:
    'Answers about organic gardens in the UAE heat, pest control, drip irrigation, quotes, commercial farm work and the areas VIA Organic covers.',
  path: '/faq',
  image: { url: '/images/project-dubai-hills.jpg', alt: 'Open villa lawn with hedged borders in Dubai Hills' },
});

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqStructuredData(FAQ_DATA))} />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        intro="What to expect from an organic garden or farm in the UAE, and how working with us works."
        image="/images/project-dubai-hills.jpg"
        imageAlt="Open villa lawn with hedged borders in Dubai Hills"
      />
      <Faq />
    </>
  );
}
