import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/siteData';

interface CtaBandProps {
  title?: string;
  text?: string;
  message?: string;
}

export default function CtaBand({
  title = 'Ready for a garden you can actually grow food in?',
  text = 'Tell us about your balcony or villa garden on WhatsApp. We will arrange a site visit and send you a clear quote.',
  message = 'Hello VIA Organic, I would like a quote for my garden.',
}: CtaBandProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden bg-forest-dark text-sand-light shadow-xl">
        <Image src="/images/entrance-pathway.jpg" alt="" fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/85 to-forest-dark/40" />
        <div className="relative px-6 sm:px-12 py-14 sm:py-16 max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-sand/90 mb-8 leading-relaxed">{text}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Get a Free Quote</span>
            </a>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-sand/40 text-sand hover:bg-sand-light/10 font-medium transition-colors"
            >
              <span>See Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
