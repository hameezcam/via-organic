'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_DATA, buildWhatsAppLink } from '@/data/siteData';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream text-charcoal border-b border-sand/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-forest-light mb-3 inline-block">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            Everything you need to know about organic landscaping, water conservation, and living gardens in Dubai&apos;s climate.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-forest/30 shadow-md ring-1 ring-forest/10'
                    : 'bg-sand-light/50 border-sand hover:border-sand-dark/60'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-forest/30 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-forest">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-forest text-sand-light rotate-180'
                        : 'bg-sand/60 text-forest'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-muted leading-relaxed border-t border-sand/40"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions WhatsApp prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-sand-light border border-sand text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-forest text-gold flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-base font-bold text-forest">
                Have a specific question about your villa plot?
              </p>
              <p className="text-xs text-charcoal-muted">
                Message our team directly on WhatsApp and we will get back to you.
              </p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink('Hello VIA Organic, I have a question regarding my villa garden in Dubai.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-sand-light text-xs sm:text-sm font-semibold hover:bg-forest-light transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
