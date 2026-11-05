import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { GENERAL_WHATSAPP_MESSAGE, buildWhatsAppLink } from '@/data/siteData';

interface CtaBandProps {
  title?: string;
  text?: string;
  message?: string;
  buttonLabel?: string;
  secondary?: { label: string; href: string };
}

export default function CtaBand({
  title = 'Ready to start growing?',
  text = 'Tell us about your garden, farm or project on WhatsApp. We will arrange a visit and send you a clear, itemised proposal.',
  message = GENERAL_WHATSAPP_MESSAGE,
  buttonLabel = 'Get a Free Quote',
  secondary = { label: 'See Our Work', href: '/gallery' },
}: CtaBandProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden bg-forest-dark text-sand-light shadow-xl">
        <Image src="/images/entrance-pathway.jpg" alt="" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/85 to-forest-dark/40" />
        <div className="relative px-6 sm:px-12 py-14 sm:py-16 max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">{title}</h2>
          <p className="text-sand/90 mb-8 leading-relaxed">{text}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-lg transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{buttonLabel}</span>
            </a>
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-sand/40 text-sand hover:bg-sand-light/10 font-medium transition-colors"
            >
              <span>{secondary.label}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
