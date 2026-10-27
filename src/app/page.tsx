import React from 'react';
import Hero from '@/components/Hero';
import ProofBar from '@/components/home/ProofBar';
import ServicesPreview from '@/components/home/ServicesPreview';
import PackagesTeaser from '@/components/home/PackagesTeaser';
import WorkPreview from '@/components/home/WorkPreview';
import FarmStory from '@/components/home/FarmStory';
import HowItWorks from '@/components/home/HowItWorks';
import CtaBand from '@/components/CtaBand';

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <ServicesPreview />
      <PackagesTeaser />
      <WorkPreview />
      <FarmStory />
      <HowItWorks />
      <CtaBand />
    </>
  );
}
