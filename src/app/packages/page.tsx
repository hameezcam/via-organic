import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Packages from '@/components/Packages';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Garden Packages',
  description:
    'Organic home garden packages for UAE apartments (AED 1,200 to 3,400) and villas (AED 1,000 to 3,800), with setup, seeds and weekly visits included.',
  alternates: { canonical: '/packages' },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Grow your own, whatever your space"
        intro="Every package includes setup, seeds chosen with you, and a weekly visit from an organic farm consultant."
        image="/images/project-residential-pergola.jpg"
        imageAlt="Stepping stone path through turf with raised planters"
      />
      <Packages />
      <CtaBand
        title="Not sure which size fits?"
        text="Send us a photo of your balcony or garden on WhatsApp and we will recommend a package."
        message="Hello VIA Organic, can you help me choose a garden package? I will send a photo of my space."
      />
    </>
  );
}
