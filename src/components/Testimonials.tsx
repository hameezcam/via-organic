'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/siteData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1
    );
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-sand-light/50 text-charcoal border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-forest-light mb-3 inline-block">
            Client Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6">
            Trusted by Discerning UAE Homeowners
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            Read how we have elevated living standards, reduced water consumption, and created bountiful edible gardens for villa residents across Dubai.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative rounded-3xl bg-white p-8 sm:p-12 md:p-16 border border-sand/80 shadow-xl overflow-hidden min-h-[340px] flex flex-col justify-between">
            {/* Ambient Watermark Icon */}
            <Quote className="absolute top-6 right-6 w-20 h-20 text-sand/40 -scale-x-100 pointer-events-none" />

            {/* Slide Content */}
            <div className="relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
                <span className="ml-2 text-xs font-semibold text-forest-light uppercase tracking-wider">
                  Verified Villa Client
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-forest font-medium leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author Info & Nav Controls */}
            <div className="relative z-10 pt-6 border-t border-sand/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-forest">
                  {current.clientName}
                </h4>
                <div className="flex items-center gap-2 text-xs text-charcoal-muted">
                  <span>{current.location}</span>
                  <span>•</span>
                  <span className="text-forest-light font-medium">{current.serviceType}</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full border border-sand-dark/60 bg-sand-light hover:bg-forest hover:text-white text-forest flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono font-medium text-charcoal-muted px-2">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </div>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full border border-sand-dark/60 bg-sand-light hover:bg-forest hover:text-white text-forest flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS_DATA.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === dotIdx
                    ? 'w-8 bg-forest'
                    : 'w-2.5 bg-sand-dark hover:bg-forest-light'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
