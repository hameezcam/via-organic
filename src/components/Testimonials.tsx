import React from 'react';
import { Quote } from 'lucide-react';
import SectionIntro from '@/components/SectionIntro';
import { TESTIMONIALS } from '@/data/siteData';

/** Shows genuine customer reviews. Renders nothing until reviews are added to TESTIMONIALS. */
export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-20 sm:py-24" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro id="reviews-heading" eyebrow="Customer reviews" title="What our customers say" />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <li key={`${review.name}-${review.quote.slice(0, 20)}`} className="rounded-3xl bg-white border border-sand p-8">
              <figure>
                <Quote className="w-8 h-8 text-gold mb-4" aria-hidden="true" />
                <blockquote className="text-charcoal leading-relaxed mb-5">“{review.quote}”</blockquote>
                <figcaption className="text-sm">
                  <span className="block font-semibold text-forest">{review.name}</span>
                  {review.context && <span className="text-charcoal-muted">{review.context}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
