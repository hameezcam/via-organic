import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProofBar from '@/components/home/ProofBar';
import ServicesPreview from '@/components/home/ServicesPreview';
import WorkPreview from '@/components/home/WorkPreview';
import FarmStory from '@/components/home/FarmStory';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CtaBand from '@/components/CtaBand';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'VIA Organic | Landscaping & Organic Agriculture in the UAE',
  absoluteTitle: true,
  description:
    'Organic landscaping for villas and apartments, plus commercial farms, greenhouse and hydroponic systems, farm management and fresh vegetables across the UAE.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <ServicesPreview />
      <WorkPreview />
      <FarmStory />
      <HowItWorks />
      <Testimonials />
      <CtaBand />
    </>
  );
}
