import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, ChevronRight, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import ServiceCard from '@/components/ServiceCard';
import { WhatsAppIcon } from '@/components/Icons';
import { SERVICES_DATA, SITE_CONFIG, buildWhatsAppLink, getService } from '@/data/siteData';
import { jsonLd, pageMetadata, serviceStructuredData } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.shortDesc,
    path: `/services/${service.id}`,
    image: { url: service.image, alt: service.imageAlt },
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((id) => getService(id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);
  const [lead, ...rest] = service.overview;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceStructuredData(service))} />
      <PageHero
        eyebrow="Services"
        title={service.title}
        intro={service.shortDesc}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            {service.ctaLabel}
          </a>
          <a
            href={SITE_CONFIG.phoneHref}
            className="btn-motion inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-sand/40 text-sand hover:bg-sand-light/10 font-medium"
          >
            Call {SITE_CONFIG.phone}
          </a>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-charcoal-muted">
            <li>
              <Link href="/" className="inline-block py-2 hover:text-forest transition-colors">Home</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
            <li>
              <Link href="/services" className="inline-block py-2 hover:text-forest transition-colors">Services</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
            <li aria-current="page" className="py-2 text-forest font-medium">{service.title}</li>
          </ol>
        </nav>
      </div>

      {/* Introduction + what's included */}
      <section className="py-10 sm:py-14" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div data-reveal className="lg:col-span-3">
            <h2 id="overview-heading" className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-6">
              Overview
            </h2>
            <p className="text-xl text-charcoal leading-relaxed mb-5">{lead}</p>
            <div className="space-y-5 text-lg text-charcoal-muted leading-relaxed">
              {rest.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <h3 className="font-serif text-2xl font-bold text-forest mt-12 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" aria-hidden="true" /> Who it&apos;s for
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {service.audience.map((item) => (
                <li key={item} className="px-4 py-2 rounded-full bg-sand-light border border-sand text-sm text-charcoal">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties} className="lg:col-span-2">
            <div className="rounded-3xl bg-forest text-sand-light p-8 lg:sticky lg:top-28">
              <h2 id="included-heading" className="font-serif text-2xl font-bold text-white mb-5">
                What&apos;s included
              </h2>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-motion w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold"
              >
                <WhatsAppIcon className="w-5 h-5" />
                {service.ctaLabel}
              </a>
              <p className="mt-3 text-xs text-sand/80 text-center">Opens WhatsApp with a message you can edit before sending.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-16 sm:pb-20" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-reveal id="benefits-heading" className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-8">
            Why choose VIA Organic
          </h2>
          <ul data-reveal-group className={`grid grid-cols-1 sm:grid-cols-2 ${service.benefits.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-5`}>
            {service.benefits.map((benefit) => (
              <li key={benefit.title} className="rounded-3xl border border-sand bg-white p-7">
                <Check className="w-6 h-6 text-emerald-700 mb-3" aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold text-forest mb-2">{benefit.title}</h3>
                <p className="text-charcoal-muted leading-relaxed">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-sand-light/60" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-reveal id="process-heading" className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-10">
            How it works
          </h2>
          <ol data-reveal-group className={`grid grid-cols-1 sm:grid-cols-2 ${service.process.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-5`}>
            {service.process.map((step, idx) => (
              <li key={step.title} className="rounded-3xl bg-white border border-sand p-7">
                <p className="font-serif text-4xl font-bold text-sage mb-3" aria-hidden="true">0{idx + 1}</p>
                <h3 className="font-serif text-xl font-bold text-forest mb-2">
                  <span className="sr-only">Step {idx + 1}: </span>
                  {step.title}
                </h3>
                <p className="text-charcoal-muted leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Photos */}
      <section className="py-16 sm:py-20" aria-labelledby="photos-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="photos-heading" className="sr-only">Photos</h2>
          <ul data-reveal-group className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {service.photos.map((photo) => (
              <li key={photo.src} className="group relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-sm bg-sand">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-[scale] duration-700 ease-organic group-hover:scale-[1.04] motion-reduce:group-hover:scale-100" />
              </li>
            ))}
          </ul>
          {service.segment === 'farm' && (
            <p className="mt-4 text-sm text-charcoal-muted">Photos from VIA Group farms in Sri Lanka.</p>
          )}
        </div>
      </section>

      {/* Related services */}
      <section className="pb-4" aria-labelledby="related-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <h2 data-reveal id="related-heading" className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Related services
            </h2>
            <Link href="/services" className="inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-forest hover:text-forest-light">
              All services <ArrowRight className="arrow-motion w-4 h-4 text-gold" aria-hidden="true" />
            </Link>
          </div>
          <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((other) => (
              <ServiceCard key={other.id} service={other} size="compact" sizes="(max-width: 640px) 100vw, 33vw" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Talk to us about ${service.title.toLowerCase()}`}
        text="Send us a message on WhatsApp with your location and what you have in mind. We will reply to arrange a visit or a call."
        message={service.whatsappMessage}
        buttonLabel={service.ctaLabel}
        secondary={{ label: 'Contact options', href: '/contact' }}
      />
    </>
  );
}
