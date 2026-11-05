import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us in Dubai',
  description:
    'Contact VIA Organic in Deira, Dubai. WhatsApp or call +971 55 959 6830 about a garden, farm or fresh produce enquiry. Site visits by appointment.',
  path: '/contact',
  image: { url: '/images/project-side-garden.jpg', alt: 'Turf side garden with a raised planting bed' },
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        intro="Whether it is a villa garden, a farm or a fresh produce order, fill in the form to start a WhatsApp chat, or call or email us directly."
        image="/images/project-side-garden.jpg"
        imageAlt="Turf side garden with a raised planting bed"
      />
      <Contact />
    </>
  );
}
