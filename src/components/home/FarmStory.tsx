import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FARM_PHOTOS } from '@/data/siteData';

export default function FarmStory() {
  const [first, second, third] = FARM_PHOTOS;

  return (
    <section className="py-20 sm:py-24 bg-forest-dark text-sand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div data-reveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">From our farms</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Real farmers, not just landscapers
          </h2>
          <p className="text-lg text-sand/85 leading-relaxed mb-6">
            VIA Organic is part of the VIA Group, which has farmed organically in Sri Lanka since 2015 across 1,750 acres of mixed crops. We bring that same know-how to gardens, farms and growing projects in the UAE.
          </p>
          <Link
            href="/about"
            className="btn-motion inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sand text-forest-dark hover:bg-sand-dark font-semibold"
          >
            Our story <ArrowRight className="arrow-motion w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div data-reveal-group className="grid grid-cols-2 gap-4 h-[420px] sm:h-[520px]">
          <div className="relative rounded-3xl overflow-hidden row-span-2">
            <Image src={first.src} alt={first.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <Image src={second.src} alt={second.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <Image src={third.src} alt={third.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
