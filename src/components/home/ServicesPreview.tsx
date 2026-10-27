import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionIntro from '@/components/SectionIntro';
import { SERVICES_DATA } from '@/data/siteData';

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="What we do"
          title="From balcony herbs to full villa gardens"
          intro="One team for design, planting, irrigation and ongoing care, all done the organic way."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES_DATA.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group relative h-72 lg:h-96 rounded-3xl overflow-hidden bg-forest-dark shadow-sm hover:shadow-xl transition-shadow"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-serif text-2xl font-bold leading-tight mb-2">{service.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-sm text-sand/90 group-hover:text-gold transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
