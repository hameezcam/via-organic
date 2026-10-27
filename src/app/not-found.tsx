import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] py-24 flex flex-col items-center justify-center gap-6 px-4 text-center ">
      <p className="text-sm font-semibold tracking-widest uppercase text-forest-light">404</p>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">This page could not be found</h1>
      <p className="text-charcoal-muted max-w-md">
        The page may have moved. Head back to the homepage to see our garden packages and services.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-forest text-sand-light font-semibold hover:bg-forest-light transition-colors"
      >
        Back to VIA Organic
      </Link>
    </div>
  );
}
