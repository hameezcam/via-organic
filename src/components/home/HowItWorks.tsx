import React from 'react';
import { ClipboardCheck, MessageSquare, Sprout } from 'lucide-react';
import SectionIntro from '@/components/SectionIntro';
import { WhatsAppIcon } from '@/components/Icons';
import { FARM_WHATSAPP_MESSAGE, GARDEN_WHATSAPP_MESSAGE, buildWhatsAppLink } from '@/data/siteData';

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Tell us about your project',
    text: 'Send us a WhatsApp with your location and what you have in mind.',
    garden: 'A few photos of your garden, balcony or courtyard help.',
    farm: 'Share the land size, water source and crops you are considering.',
  },
  {
    icon: ClipboardCheck,
    title: 'Visit and proposal',
    text: 'We come to see the space, then send a clear, itemised proposal before any work begins.',
    garden: 'We check sunlight, soil, water supply and how you want to use the space.',
    farm: 'We assess the soil, water and climate and outline a farm or system plan.',
  },
  {
    icon: Sprout,
    title: 'We build, plant and support',
    text: 'Our team carries out the work and stays involved afterwards.',
    garden: 'Planting, irrigation and optional maintenance visits.',
    farm: 'Setup, planting and ongoing support or full farm management.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 bg-sand-light/60" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          id="how-heading"
          eyebrow="How it works"
          title="Three simple steps, for gardens and farms"
          intro="The process is the same whether you are planning a villa garden or a commercial growing project."
        />
        <ol data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => (
            <li key={step.title} className="flex flex-col rounded-3xl bg-white border border-sand p-7 sm:p-8">
              <div className="flex items-center gap-4 mb-5">
                <span className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center" aria-hidden="true">
                  <step.icon className="w-6 h-6" />
                </span>
                <span className="font-serif text-4xl font-bold text-sage" aria-hidden="true">0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest mb-2">{step.title}</h3>
              <p className="text-charcoal-muted leading-relaxed mb-5">{step.text}</p>
              <dl className="mt-auto space-y-3 text-sm border-t border-sand pt-5">
                <div>
                  <dt className="font-semibold text-forest">For gardens</dt>
                  <dd className="text-charcoal-muted">{step.garden}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-forest">For farms</dt>
                  <dd className="text-charcoal-muted">{step.farm}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={buildWhatsAppLink(GARDEN_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-sm"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Enquire about a garden
          </a>
          <a
            href={buildWhatsAppLink(FARM_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-forest text-forest hover:bg-forest hover:text-sand-light font-semibold"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Enquire about a farm
          </a>
        </div>
      </div>
    </section>
  );
}
