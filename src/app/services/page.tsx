import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Check, MessageSquare } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { SERVICES_DATA, buildWhatsAppLink } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Organic garden design and landscaping, vegetable and kitchen gardens, drip irrigation, soil care and garden maintenance for villas and apartments in the UAE.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your garden needs, done organically"
        intro="Design, planting, irrigation and ongoing care from one team that farms for a living."
        image="/images/project-jumeirah.jpg"
        imageAlt="Palms and layered planting along a villa wall in Jumeirah"
      />

      <div className="py-16 sm:py-20 space-y-16 sm:space-y-24">
        {SERVICES_DATA.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className={`relative h-72 sm:h-[420px] rounded-3xl overflow-hidden shadow-xl ${idx % 2 ? 'lg:order-last' : ''}`}>
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-5xl font-bold text-sand-dark mb-2">0{idx + 1}</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">{service.title}</h2>
              <p className="text-lg text-charcoal-muted font-light leading-relaxed mb-6">{service.shortDesc}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-charcoal-muted">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest hover:bg-forest-light text-sand-light font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                Ask about this on WhatsApp
              </a>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
