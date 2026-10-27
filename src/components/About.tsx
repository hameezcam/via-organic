import React from 'react';
import Image from 'next/image';
import { Leaf, Droplets, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream text-charcoal border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-forest-light mb-3 inline-block">
            Our Heritage & Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6">
            Rooted in True Agriculture. Built for Refined Outdoor Living.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            We are not simply landscapers who drop potted plants into sand. We are agronomists, soil biologists, and landscape artisans dedicated to cultivating thriving, permanent living ecosystems in the UAE.
          </p>
        </div>

        {/* Story & Why Organic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Visual & Milestone Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/crops.jpg"
                alt="Organic crops growing on a VIA Group farm in Sri Lanka"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-forest/80 backdrop-blur-md border border-white/10">
                <p className="font-serif text-lg font-semibold text-sand-light">
                  1,750 acres of organic mixed crops
                </p>
                <p className="text-sm text-sand/90 mt-1">
                  Farmed by the VIA Group in Sri Lanka since 2015
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-5 -right-5 sm:right-6 bg-sand-light border border-sand-dark p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]">
              <div className="w-10 h-10 rounded-full bg-forest text-gold flex items-center justify-center font-bold text-sm shrink-0">
                10+
              </div>
              <div className="text-sm text-forest font-semibold leading-tight">
                Years of Organic Farming Experience
              </div>
            </div>
          </div>

          {/* Right Column: Our Story & Why Organic */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-4">
                Our Story: From Organic Farms to UAE Gardens
              </h3>
              <p className="text-charcoal-muted leading-relaxed mb-4">
                VIA Organic began in Sri Lanka in 2015 as part of the VIA Group. Today the group runs a commercial organic farming operation across 1,750 acres of mixed crops, producing organic fertilizers and dried organic foods that meet export standards for Europe and the United States.
              </p>
              <p className="text-charcoal-muted leading-relaxed">
                We have brought that experience to the UAE, where we design, install and maintain organic gardens for villas and apartments, and advise farms on modern growing systems.
              </p>
            </div>

            {/* Why Organic Feature Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-sand-light/60 border border-sand space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-forest text-white">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl font-bold text-forest">
                  Why Organic in the UAE?
                </h4>
              </div>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                Conventional landscaping relies heavily on synthetic chemical NPK salts and harsh pesticides. Under intense Dubai heat, these salts scorch root systems, kill beneficial microbes, and compact desert sand like concrete.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Deep sponge-like moisture retention</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Safer for children, pets & pollinators</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Active mycorrhizae cool root temperatures</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>No synthetic chemical runoff</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Values */}
        <div className="mt-16 pt-16 border-t border-sand">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-forest-light">
              Guiding Principles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mt-1">
              Our Three Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-sand/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-forest" />
              </div>
              <h4 className="font-serif text-xl font-bold text-forest mb-3">
                1. Ecological Integrity
              </h4>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                We refuse toxic shortcuts. We use organic compost, soil amendments and natural pest deterrents that are kinder to children, pets and pollinators.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-sand/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6 text-forest" />
              </div>
              <h4 className="font-serif text-xl font-bold text-forest mb-3">
                2. Water Wisdom
              </h4>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Water is precious in the Arabian desert. Through root-zone subsurface drip networks and climate-responsive sensors, our gardens use water where the roots need it and waste less of it.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-sand/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-forest" />
              </div>
              <h4 className="font-serif text-xl font-bold text-forest mb-3">
                3. Bespoke Craftsmanship
              </h4>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                From handcrafted teak and cedar raised garden beds to architectural stone paving and night illumination, we design outdoor living areas tailored to each villa&apos;s architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
