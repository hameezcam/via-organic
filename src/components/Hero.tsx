import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, ArrowRight, Leaf, Droplets, Sprout } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/siteData';

export default function Hero() {
  const whatsappQuoteUrl = buildWhatsAppLink(
    'Hello VIA Organic, I would like to request a free quote for my garden in the UAE.'
  );

  return (
    <section className="relative min-h-[86vh] flex items-end sm:items-center overflow-hidden bg-forest-dark text-sand-light">
      <Image
        src="/images/project-aldar-abu-dhabi.jpg"
        alt="Villa garden with palms, planting and a pool designed by VIA Organic"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-forest-dark via-forest-dark/75 to-forest-dark/10" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 sm:py-24">
        <div className="max-w-2xl">
          <p className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/70 border border-sand/30 backdrop-blur-md mb-6 text-sm font-medium tracking-wide text-sand">
            <Leaf className="w-4 h-4 text-gold" />
            Organic home gardens & landscaping • UAE
          </p>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
            Grow a garden that grows your food.
          </h1>

          <p className="text-base sm:text-xl text-sand/90 font-light leading-relaxed mb-8 max-w-xl">
            We design, plant and care for chemical-free gardens for villas and apartments, backed by a decade of organic farming.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Get a Free Quote</span>
            </a>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sand-light/10 hover:bg-sand-light/20 text-sand border border-sand/40 font-medium text-base backdrop-blur-md transition-colors"
            >
              <span>Packages from AED 1,000</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-sand/90">
            <li className="flex items-center gap-2">
              <Sprout className="w-4 h-4 text-emerald-400" /> Chemical-free methods
            </li>
            <li className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-emerald-400" /> Water-wise drip irrigation
            </li>
            <li className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-400" /> Weekly care visits
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
