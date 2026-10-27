import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos of villa gardens VIA Organic has planted and cared for in Dubai and Abu Dhabi.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Gardens we have planted"
        intro="Real villa gardens in Dubai and Abu Dhabi. Follow us on Instagram for the latest."
        image="/images/entrance-pathway.jpg"
        imageAlt="Villa entrance with paved steps, turf and garden lighting"
      />
      <Gallery />
      <CtaBand />
    </>
  );
}
