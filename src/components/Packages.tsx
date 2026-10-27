import React from 'react';
import { Check, Star, MessageSquare, ArrowRight } from 'lucide-react';
import { PACKAGES_DATA, buildWhatsAppLink } from '@/data/siteData';

export default function Packages() {
  return (
    <section id="packages" className="py-20 sm:py-28 bg-cream text-charcoal border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-forest-light mb-3 inline-block">
            Transparent Investment Tiers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6">
            Bespoke Villa Landscaping Packages
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            All packages feature 100% certified organic soil amendments, climate-adapted plants, and dedicated agronomist oversight.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const isGold = pkg.isPopular;
            const whatsappUrl = buildWhatsAppLink(pkg.whatsappMessage);

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isGold
                    ? 'bg-forest text-sand-light shadow-2xl scale-105 z-20 border-2 border-gold ring-4 ring-gold/20'
                    : 'bg-white text-charcoal shadow-sm hover:shadow-xl border border-sand/80'
                }`}
              >
                {/* Most Popular Badge for Gold */}
                {isGold && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-forest-dark text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="mb-6">
                    <h3
                      className={`font-serif text-2xl font-bold mb-1 ${
                        isGold ? 'text-white' : 'text-forest'
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-xs uppercase tracking-wider font-medium ${
                        isGold ? 'text-gold' : 'text-forest-light'
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing in AED */}
                  <div className="mb-6 pb-6 border-b border-sand/40">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold uppercase tracking-wider">AED</span>
                      <span
                        className={`font-serif text-4xl sm:text-5xl font-bold tracking-tight ${
                          isGold ? 'text-white' : 'text-forest'
                        }`}
                      >
                        {pkg.priceAed.toLocaleString('en-AE')}
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1 font-light ${
                        isGold ? 'text-sand/80' : 'text-charcoal-muted'
                      }`}
                    >
                      {pkg.cadence}
                    </p>
                  </div>

                  {/* Recommended For */}
                  <div
                    className={`p-3 rounded-xl mb-6 text-xs leading-relaxed ${
                      isGold
                        ? 'bg-forest-dark/60 text-sand/90 border border-sand/20'
                        : 'bg-sand-light text-charcoal-muted border border-sand/60'
                    }`}
                  >
                    <span
                      className={`font-semibold block mb-0.5 ${
                        isGold ? 'text-gold' : 'text-forest'
                      }`}
                    >
                      Ideal For:
                    </span>
                    {pkg.recommendedFor}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${
                        isGold ? 'text-sand-light/90' : 'text-charcoal'
                      }`}
                    >
                      Package Inclusions:
                    </span>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isGold ? 'text-gold' : 'text-emerald-600'
                          }`}
                        />
                        <span className={isGold ? 'text-sand-light' : 'text-charcoal-muted'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <div className="pt-4 border-t border-sand/40">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm active:scale-95 group ${
                      isGold
                        ? 'bg-gold hover:bg-amber-300 text-forest-dark shadow-gold/30 hover:shadow-lg'
                        : 'bg-forest hover:bg-forest-light text-sand-light hover:shadow-md'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Book {pkg.name.split(' ')[0]} on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Corporate & Estate Notice */}
        <div className="mt-16 text-center bg-sand-light p-6 rounded-2xl border border-sand max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-lg font-bold text-forest">
              Need a Custom Commercial or VIP Master Estate Proposal?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              We design and service hotels, corporate headquarters, restaurants, and private palaces.
            </p>
          </div>
          <a
            href={buildWhatsAppLink('Hello VIA Organic, I would like to discuss a custom Commercial / VIP Master Estate Landscaping project.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-forest text-sand-light text-xs sm:text-sm font-semibold hover:bg-forest-light whitespace-nowrap transition-colors"
          >
            Request Custom Scope
          </a>
        </div>
      </div>
    </section>
  );
}
