import React from 'react';
import { MessageSquare, MapPin, Sprout } from 'lucide-react';
import SectionIntro from '@/components/SectionIntro';

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Message us',
    text: 'Send a WhatsApp with your area and a photo of your balcony or garden.',
  },
  {
    icon: MapPin,
    title: 'Site visit and quote',
    text: 'We visit, check sunlight, soil and water, and send you a clear quote.',
  },
  {
    icon: Sprout,
    title: 'We plant and care',
    text: 'We set everything up and visit weekly to keep it growing.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 bg-sand-light/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="How it works" title="Three simple steps" />
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => (
            <li key={step.title} className="rounded-3xl bg-white border border-sand p-8">
              <div className="flex items-center gap-4 mb-5">
                <span className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center">
                  <step.icon className="w-6 h-6" />
                </span>
                <span className="font-serif text-4xl font-bold text-sand-dark">0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest mb-2">{step.title}</h3>
              <p className="text-charcoal-muted leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
