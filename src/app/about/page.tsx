import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Leaf, Target, Eye } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionIntro from '@/components/SectionIntro';
import CtaBand from '@/components/CtaBand';
import Testimonials from '@/components/Testimonials';
import CountUp from '@/components/motion/CountUp';
import { FARM_PHOTOS, FOUNDER } from '@/data/siteData';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About VIA Organic and VIA Group',
  description:
    'VIA Organic is part of VIA Group, farming organically in Sri Lanka since 2015 across 1,750 acres, and now offering landscaping and organic agriculture in the UAE.',
  path: '/about',
  image: { url: '/images/farm-team.jpg', alt: 'VIA Group team tending organic crops in Sri Lanka' },
});

const FACTS = [
  { value: '2015', label: 'Founded in Sri Lanka as part of the VIA Group' },
  { value: '1,750', label: 'Acres of organic mixed crops' },
  { value: 'EU & US', label: 'Export standards our produce meets' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A decade of organic farming, now in your garden"
        intro="We are farmers first. Everything we do in UAE gardens and farms comes from growing food organically at scale."
        image="/images/farm-team.jpg"
        imageAlt="VIA Group team tending organic crops in Sri Lanka"
      />

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-reveal>
            <SectionIntro eyebrow="Our story" title="From Sri Lankan farms to UAE homes" align="left" />
            <div className="space-y-5 text-lg text-charcoal-muted leading-relaxed">
              <p>
                VIA Organic began in Sri Lanka in 2015 as part of the VIA Group. Today the group runs a commercial organic farming operation across 1,750 acres of mixed crops, producing organic fertilizers and dried organic foods that meet export standards for Europe and the United States.
              </p>
              <p>
                VIA Organic Agriculture LLC brings that experience to the UAE from our office in Deira, Dubai. We design, build and maintain organic gardens for villas and apartments, set up and manage commercial farms, install greenhouse, hydroponic and vertical growing systems, and supply fresh vegetables.
              </p>
            </div>
          </div>
          <div data-reveal style={{ '--reveal-delay': '150ms' } as React.CSSProperties} className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/farm-mango-harvest.jpg"
              alt="Bagged mangoes ready for harvest on a VIA Group orchard"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-label="Key facts" className="bg-forest text-sand-light">
        <dl data-reveal-group className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse text-center">
              <dt className="text-sand/85">{fact.label}</dt>
              <dd className="font-serif text-4xl sm:text-5xl font-bold text-white mb-1">{fact.value === '1,750' ? <CountUp value={fact.value} /> : fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="On the farm"
            title="Where our know-how comes from"
            intro="Photos from VIA Group farms and orchards in Sri Lanka."
          />
          <div data-reveal-group className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {FARM_PHOTOS.map((photo) => (
              <div key={photo.src} className="group relative h-48 sm:h-72 rounded-3xl overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-[scale] duration-700 ease-organic group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-sand-light/60">
        <div data-reveal-group className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border border-sand p-8">
            <Target className="w-8 h-8 text-forest mb-4" />
            <h2 className="font-serif text-2xl font-bold text-forest mb-2">Our mission</h2>
            <p className="text-charcoal-muted leading-relaxed">
              To cultivate, process and supply organic crops and food, using methods that are kind to the environment.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-sand p-8">
            <Eye className="w-8 h-8 text-forest mb-4" />
            <h2 className="font-serif text-2xl font-bold text-forest mb-2">Our vision</h2>
            <p className="text-charcoal-muted leading-relaxed">
              To become the leading supplier of organic produce in the UAE, using technology to make farming more sustainable.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-sand p-8">
            <Leaf className="w-8 h-8 text-forest mb-4" />
            <h2 className="font-serif text-2xl font-bold text-forest mb-2">Why organic</h2>
            <p className="text-charcoal-muted leading-relaxed">
              Living soil holds water better, feeds plants steadily and keeps synthetic chemicals away from children, pets and pollinators.
            </p>
          </div>
        </div>
      </section>

      {FOUNDER && (
        <section className="py-20 sm:py-24" aria-labelledby="founder-heading">
          <div data-reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            {FOUNDER.photo && (
              <div className="relative w-40 h-40 rounded-full overflow-hidden shrink-0 bg-sand">
                <Image src={FOUNDER.photo} alt={FOUNDER.name} fill sizes="160px" className="object-cover" />
              </div>
            )}
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-forest-light mb-2">Leadership</p>
              <h2 id="founder-heading" className="font-serif text-3xl font-bold text-forest">{FOUNDER.name}</h2>
              <p className="text-charcoal-muted mb-4">{FOUNDER.role}</p>
              <p className="text-lg text-charcoal-muted leading-relaxed">{FOUNDER.bio}</p>
            </div>
          </div>
        </section>
      )}

      <Testimonials />

      <CtaBand />
    </>
  );
}
