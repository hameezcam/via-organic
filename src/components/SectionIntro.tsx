import React from 'react';

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'center' | 'left';
}

export default function SectionIntro({ eyebrow, title, intro, align = 'center' }: SectionIntroProps) {
  const centered = align === 'center';
  return (
    <div className={`max-w-3xl mb-12 sm:mb-14 ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="text-sm font-semibold tracking-widest uppercase text-forest-light mb-3">{eyebrow}</p>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-5">
        {title}
      </h2>
      {intro && <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">{intro}</p>}
    </div>
  );
}
