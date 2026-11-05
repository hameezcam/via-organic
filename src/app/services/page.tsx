import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { WhatsAppIcon } from '@/components/Icons';
import { SERVICES_DATA, buildWhatsAppLink } from '@/data/siteData';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Our Services: Landscaping, Farming and Fresh Produce',
  description:
    'Five organic services in the UAE: landscaping, commercial farms, advanced agriculture, farm management and fresh vegetable distribution.',
  path: '/services',
  image: { url: '/images/project-jumeirah.jpg', alt: 'Palms and layered planting along a villa wall in Jumeirah' },
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five services, all of them organic"
        intro="From villa gardens to commercial farms, greenhouse systems and fresh produce, delivered by one team that farms for a living."
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
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-5xl font-bold text-sand-dark mb-2" aria-hidden="true">0{idx + 1}</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">{service.title}</h2>
              <p className="text-lg text-charcoal-muted leading-relaxed mb-6">{service.shortDesc}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-charcoal-muted">
                    <Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-forest hover:bg-forest-light text-sand-light font-semibold transition-colors"
              >
                View {service.title.toLowerCase()} details
                <ArrowRight className="w-4 h-4 text-gold" aria-hidden="true" />
              </Link>
              <a
                href={buildWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-forest text-forest hover:bg-sand/40 font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {service.ctaLabel}
              </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
