import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact VIA Organic in Deira, Dubai. Message us on WhatsApp at +971 55 959 6830 for a garden quote or site visit.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your garden"
        intro="Fill in the form to start a WhatsApp chat, or call or email us directly."
        image="/images/project-side-garden.jpg"
        imageAlt="Turf side garden with a raised planting bed"
      />
      <Contact />
    </>
  );
}
