import React from 'react';

const STATS = [
  { value: '2015', label: 'Farming organically since' },
  { value: '1,750', label: 'Acres of VIA Group organic farms' },
  { value: 'AED 1,000', label: 'Garden packages from' },
  { value: 'Weekly', label: 'Visits from a farm consultant' },
];

export default function ProofBar() {
  return (
    <section aria-label="VIA Organic at a glance" className="bg-forest text-sand-light">
      <dl className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse text-center lg:text-left">
            <dt className="text-sm text-sand/80">{stat.label}</dt>
            <dd className="font-serif text-3xl sm:text-4xl font-bold text-white">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
