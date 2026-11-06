import React from 'react';
import CountUp from '@/components/motion/CountUp';

const STATS: { value: string; label: string; count?: boolean }[] = [
  { value: '2015', label: 'Farming organically since' },
  { value: '1,750', label: 'Acres farmed by VIA Group', count: true },
  { value: '5', label: 'Services, from gardens to farms' },
  { value: 'UAE-wide', label: 'Homes, farms and businesses' },
];

export default function ProofBar() {
  return (
    <section aria-label="VIA Organic at a glance" className="bg-forest text-sand-light">
      <dl data-reveal-group className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse text-center lg:text-left">
            <dt className="text-sm text-sand/85">{stat.label}</dt>
            <dd className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {stat.count ? <CountUp value={stat.value} /> : stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
