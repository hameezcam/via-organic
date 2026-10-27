import React from 'react';
import Image from 'next/image';
import { MessageSquare, ArrowDown, ShieldCheck, Droplets, Sparkles } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/siteData';

export default function Hero() {
  const whatsappQuoteUrl = buildWhatsAppLink(
    'Hello VIA Organic, I would like to request a free quote for my villa garden in Dubai.'
  );

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-forest-dark text-sand-light pt-8 pb-16">
      {/* Background Image with Organic Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Lush luxury villa garden landscaped organically by VIA Organic in Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multi-layer gradient for readability and mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/75 to-forest-dark/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(16,36,21,0.6)_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/80 border border-sand/30 backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-sand uppercase">
            Bespoke Organic Landscaping & Garden Artisans • Dubai & Abu Dhabi
          </span>
        </div>

        {/* 1. Bold One-Line Promise */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.12] mb-6 drop-shadow-sm">
          Living Landscapes, Crafted Organically for Dubai&apos;s Finest Homes.
        </h1>

        {/* Short Subline */}
        <p className="text-base sm:text-xl text-sand/90 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10">
          We transform arid villa grounds into lush, chemical-free sanctuaries and productive kitchen gardens using living soil science and intelligent water curation.
        </p>

        {/* Two Required CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* Button 1: Opens WhatsApp */}
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg hover:shadow-emerald-900/40 active:scale-95 transition-all group"
          >
            <MessageSquare className="w-5 h-5 text-sand-light group-hover:scale-110 transition-transform" />
            <span>Get a Free Quote</span>
          </a>

          {/* Button 2: View Packages */}
          <a
            href="#packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sand-light/10 hover:bg-sand-light/20 text-sand border border-sand/40 font-medium text-base backdrop-blur-md active:scale-95 transition-all"
          >
            <span>View Packages</span>
            <ArrowDown className="w-4 h-4 text-gold" />
          </a>
        </div>

        {/* Value Proposition Micro-Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl pt-6 border-t border-sand/20 text-xs sm:text-sm text-sand/80">
          <div className="flex items-center justify-center gap-2 py-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Non-Toxic & Child-Safe</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <Droplets className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Up to 50% Water Reduction</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <Sparkles className="w-4 h-4 text-gold shrink-0" />
            <span>10+ Years Agronomy Expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
}
