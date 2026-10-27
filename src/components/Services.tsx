import React from 'react';
import { Compass, Carrot, Droplets, Sprout, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { SERVICES_DATA, buildWhatsAppLink } from '@/data/siteData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-7 h-7 text-forest" />,
  Carrot: <Carrot className="w-7 h-7 text-forest" />,
  Droplets: <Droplets className="w-7 h-7 text-forest" />,
  Sprout: <Sprout className="w-7 h-7 text-forest" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-forest" />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-sand-light/50 border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-forest-light mb-3 inline-block">
            Our Core Disciplines
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6">
            Comprehensive Organic Landscaping & Estate Services
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            From complete architectural landscape designs to bespoke kitchen gardens, each service is executed with certified organic agronomy standards.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);
            const isLast = index === SERVICES_DATA.length - 1;

            return (
              <div
                key={service.id}
                className={`group rounded-3xl bg-white p-8 border border-sand/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-sand/40 border border-sand-dark/40 flex items-center justify-center group-hover:bg-forest group-hover:text-sand-light transition-colors duration-300">
                      <div className="group-hover:brightness-200 transition-all">
                        {ICON_MAP[service.iconName] || <Sprout className="w-7 h-7 text-forest" />}
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-charcoal-muted/60">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-forest mb-3 group-hover:text-forest-light transition-colors">
                    {service.title}
                  </h3>

                  {/* Required 2-Line Description */}
                  <p className="text-sm text-charcoal-muted leading-relaxed mb-6 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-sand/40 text-xs sm:text-sm text-charcoal">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                        <span className="text-charcoal-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required CTA */}
                <div className="pt-4 border-t border-sand/40">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full bg-sand/30 hover:bg-forest text-forest hover:text-sand-light font-medium text-xs sm:text-sm transition-all duration-300 group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-600 group-hover/btn:text-emerald-300" />
                      <span>Book on WhatsApp</span>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
