import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, MessageSquare, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { SERVICES_DATA, SITE_CONFIG, buildWhatsAppLink, getService } from '@/data/siteData';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDesc,
    alternates: { canonical: `/services/${service.id}` },
    openGraph: { title: `${service.title} | ${SITE_CONFIG.shortName}`, description: service.shortDesc, images: [service.image] },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES_DATA.filter((s) => s.id !== service.id);
  const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        intro={service.shortDesc}
        image={service.image}
        imageAlt=""
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-charcoal-muted">
          <Link href="/services" className="inline-flex items-center gap-1.5 hover:text-forest transition-colors">
            <ArrowLeft className="w-4 h-4" /> All services
          </Link>
        </nav>
      </div>

      {/* Overview + what's included */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-6">Overview</h2>
            <div className="space-y-5 text-lg text-charcoal-muted font-light leading-relaxed">
              {service.overview.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <h3 className="font-serif text-2xl font-bold text-forest mt-12 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" /> Who it&apos;s for
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {service.audience.map((item) => (
                <li key={item} className="px-4 py-2 rounded-full bg-sand-light border border-sand text-sm text-charcoal">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-3xl bg-forest text-sand-light p-8 lg:sticky lg:top-28">
              <h2 className="font-serif text-2xl font-bold text-white mb-5">What&apos;s included</h2>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Ask about {service.title.toLowerCase()}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-sand-light/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-10">How it works</h2>
          <ol className={`grid grid-cols-1 sm:grid-cols-2 ${service.process.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-5`}>
            {service.process.map((step, idx) => (
              <li key={step.title} className="rounded-3xl bg-white border border-sand p-7">
                <p className="font-serif text-4xl font-bold text-sand-dark mb-3">0{idx + 1}</p>
                <h3 className="font-serif text-xl font-bold text-forest mb-2">{step.title}</h3>
                <p className="text-charcoal-muted leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Photos */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {service.photos.map((photo) => (
            <div key={photo.src} className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-sm">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-6">Other services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.id}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-sand bg-white px-5 py-4 hover:border-forest transition-colors"
              >
                <span className="font-medium text-charcoal group-hover:text-forest">{other.title}</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
