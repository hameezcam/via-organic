'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { FAQ_DATA, buildWhatsAppLink } from '@/data/siteData';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0]?.id ?? null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-20 bg-cream text-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen ? 'bg-white border-forest/30 shadow-md' : 'bg-sand-light/50 border-sand hover:border-sand-dark'
                }`}
              >
                <h2>
                  <button
                    type="button"
                    id={`faq-question-${faq.id}`}
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-5 sm:px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-forest">{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-forest text-sand-light rotate-180' : 'bg-sand/60 text-forest'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h2>

                {/* Answers stay in the page (hidden when closed) so they are readable by search engines. */}
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  hidden={!isOpen}
                  className="px-5 sm:px-6 pb-6 pt-1 text-base text-charcoal-muted leading-relaxed"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-sand-light border border-sand flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-forest text-gold flex items-center justify-center shrink-0" aria-hidden="true">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-forest">Have a question about your garden or farm?</p>
              <p className="text-sm text-charcoal-muted">Message our team on WhatsApp and we will get back to you.</p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink('Hello VIA Organic, I have a question.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-forest text-sand-light text-sm font-semibold hover:bg-forest-light transition-colors shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
