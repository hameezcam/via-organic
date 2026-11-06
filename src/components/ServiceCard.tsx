import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ServiceItem } from '@/types';

interface ServiceCardProps {
  service: ServiceItem;
  /** Heading level inside the card, to keep the page outline in order. */
  headingLevel?: 'h2' | 'h3';
  size?: 'large' | 'default' | 'compact';
  sizes?: string;
}

/**
 * A photo card for one service. The title is the link, stretched over the
 * whole card, so the card is one clear click target with a short, readable
 * accessible name.
 */
export default function ServiceCard({ service, headingLevel = 'h3', size = 'default', sizes }: ServiceCardProps) {
  const Heading = headingLevel;
  const height = size === 'large' ? 'min-h-[22rem]' : size === 'compact' ? 'min-h-[13rem]' : 'min-h-[17rem]';

  return (
    // The outer div is what scroll reveals move; the card itself lifts on hover.
    <div className="h-full">
    <article
      className={`group relative flex flex-col justify-end h-full ${height} rounded-3xl overflow-hidden bg-forest-dark shadow-sm ring-1 ring-transparent transition-[translate,box-shadow] duration-300 ease-organic hover:-translate-y-[5px] hover:shadow-[0_24px_44px_-18px_rgb(16_36_21/0.55)] hover:ring-gold/40 focus-within:-translate-y-[5px] focus-within:ring-4 focus-within:ring-gold/70 motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0`}
    >
      <Image
        src={service.image}
        alt=""
        fill
        sizes={sizes ?? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
        className="object-cover transition-[scale] duration-500 ease-organic group-hover:scale-[1.04] group-focus-within:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/55 to-forest-dark/5" />
      <div className="relative p-6 text-white">
        <Heading className={`font-serif font-bold leading-tight mb-2 ${size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
          <Link
            href={`/services/${service.id}`}
            className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
          >
            {service.title}
          </Link>
        </Heading>
        {size !== 'compact' && (
          <p className={`text-sand/90 leading-relaxed mb-4 ${size === 'large' ? 'text-base max-w-md' : 'text-sm'}`}>
            {service.shortDesc}
          </p>
        )}
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
        >
          Learn more <ArrowRight className="arrow-motion w-4 h-4" />
        </span>
      </div>
    </article>
    </div>
  );
}
