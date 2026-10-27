import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import { FAQ_DATA } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers about organic gardens in the UAE heat, pest control, water use, booking and maintenance.',
  alternates: { canonical: '/faq' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        intro="What to expect from an organic garden in the UAE, and how working with us works."
        image="/images/project-dubai-hills.jpg"
        imageAlt="Open villa lawn with hedged borders in Dubai Hills"
      />
      <Faq />
    </>
  );
}
