import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PACKAGES_DATA } from '@/data/siteData';

function fromPrice(space: 'apartment' | 'villa') {
  const prices = PACKAGES_DATA.filter((p) => p.space === space).map((p) => p.priceAed);
  return Math.min(...prices).toLocaleString('en-AE');
}

export default function PackagesTeaser() {
  return (
    <section className="py-20 sm:py-24 bg-sand-light/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-xl order-last lg:order-first">
          <Image
            src="/images/project-tilal-al-ghaf.jpg"
            alt="Side garden with planters and a green walkway in Tilal Al Ghaf"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest uppercase text-forest-light mb-3">Home garden packages</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-5">
            Fresh herbs and vegetables, set up for you
          </h2>
          <p className="text-lg text-charcoal-muted font-light leading-relaxed mb-8">
            Pick a size, and we handle the rest: setup, seeds chosen with you, and a weekly visit from an organic farm consultant.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl bg-white border border-sand p-6">
              <p className="text-sm text-charcoal-muted mb-1">Apartment balcony</p>
              <p className="font-serif text-3xl font-bold text-forest">
                <span className="text-base font-sans font-semibold mr-1">from AED</span>
                {fromPrice('apartment')}
              </p>
              <p className="text-sm text-charcoal-muted mt-2">Aeroponic towers, herbs and leafy greens</p>
            </div>
            <div className="rounded-2xl bg-white border border-sand p-6">
              <p className="text-sm text-charcoal-muted mb-1">Villa garden</p>
              <p className="font-serif text-3xl font-bold text-forest">
                <span className="text-base font-sans font-semibold mr-1">from AED</span>
                {fromPrice('villa')}
              </p>
              <p className="text-sm text-charcoal-muted mt-2">Vegetables, herbs and leafy greens outdoors</p>
            </div>
          </div>

          <ul className="space-y-2 mb-8 text-charcoal-muted">
            {['Setup and planting included', 'Seeds chosen with you', 'Weekly visit from a farm consultant'].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600" /> {item}
              </li>
            ))}
          </ul>

          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest hover:bg-forest-light text-sand-light font-semibold transition-colors"
          >
            Compare all packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
