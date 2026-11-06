import React from 'react';
import Image from 'next/image';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
}

const delay = (ms: number, duration?: number) =>
  ({ '--hero-delay': `${ms}ms`, ...(duration ? { '--hero-duration': `${duration}ms` } : {}) }) as React.CSSProperties;

export default function PageHero({ eyebrow, title, intro, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest-dark text-sand-light">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-45 hero-settle" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/80 to-forest-dark/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <p className="hero-rise text-sm font-semibold tracking-widest uppercase text-gold mb-3" style={delay(0, 700)}>
          {eyebrow}
        </p>
        <h1
          className="hero-rise font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.1] mb-5 text-balance"
          style={delay(120)}
        >
          {title}
        </h1>
        <p className="hero-rise text-base sm:text-lg text-sand/90 max-w-2xl leading-relaxed" style={delay(260, 800)}>
          {intro}
        </p>
        {children && (
          <div className="hero-rise" style={delay(420, 600)}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
