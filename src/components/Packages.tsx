'use client';

import React, { useState } from 'react';
import { Check, MessageSquare, ArrowRight } from 'lucide-react';
import {
  PACKAGES_DATA,
  PACKAGE_SPACES,
  buildWhatsAppLink,
  packageWhatsAppMessage,
} from '@/data/siteData';

type Space = (typeof PACKAGE_SPACES)[number]['key'];

export default function Packages() {
  const [activeSpace, setActiveSpace] = useState<Space>('villa');
  const visiblePackages = PACKAGES_DATA.filter((pkg) => pkg.space === activeSpace);

  return (
    <section id="packages" className="py-20 sm:py-28 bg-cream text-charcoal border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-forest-light mb-3 inline-block">
            Home Garden Packages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6">
            Grow Your Own, Whatever Your Space
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            Every package includes setup, seeds chosen with you, and a weekly visit from an organic farm consultant.
          </p>
        </div>

        {/* Apartment / Villa Toggle */}
        <div
          role="tablist"
          aria-label="Package type"
          className="flex items-center justify-center gap-2 sm:gap-3 mb-12"
        >
          {PACKAGE_SPACES.map((space) => (
            <button
              key={space.key}
              type="button"
              role="tab"
              id={`tab-${space.key}`}
              aria-selected={activeSpace === space.key}
              aria-controls="packages-panel"
              onClick={() => setActiveSpace(space.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSpace === space.key
                  ? 'bg-forest text-sand-light shadow-md'
                  : 'bg-sand-light text-charcoal-muted hover:bg-sand/60 hover:text-charcoal'
              }`}
            >
              {space.label}
            </button>
          ))}
        </div>

        {/* 4 Packages Grid */}
        <div
          id="packages-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeSpace}`}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch"
        >
          {visiblePackages.map((pkg) => {
            const whatsappUrl = buildWhatsAppLink(packageWhatsAppMessage(pkg));

            return (
              <div
                key={pkg.id}
                className="relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-white text-charcoal shadow-sm hover:shadow-xl border border-sand/80 transition-all duration-300"
              >
                <div>
                  {/* Header */}
                  <h3 className="font-serif text-2xl font-bold mb-4 text-forest">{pkg.name}</h3>

                  {/* Pricing in AED */}
                  <div className="mb-6 pb-6 border-b border-sand/40">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold uppercase tracking-wider">AED</span>
                      <span className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-forest">
                        {pkg.priceAed.toLocaleString('en-AE')}
                      </span>
                    </div>
                    <p className="text-sm mt-2 text-charcoal-muted">{pkg.recommendedFor}</p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                        <span className="text-charcoal-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm active:scale-95 group bg-forest hover:bg-forest-light text-sand-light hover:shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Choose {pkg.name} on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Custom Projects Notice */}
        <div className="mt-16 text-center bg-sand-light p-6 rounded-2xl border border-sand max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg font-bold text-forest">
              Need landscaping or a larger project?
            </h3>
            <p className="text-sm text-charcoal-muted">
              We also quote for full garden landscaping, irrigation, maintenance and commercial sites.
            </p>
          </div>
          <a
            href={buildWhatsAppLink('Hello VIA Organic, I would like a quote for a landscaping or larger garden project.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-forest text-sand-light text-sm font-semibold hover:bg-forest-light whitespace-nowrap transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
