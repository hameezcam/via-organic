import React from 'react';
import { Home, Tractor } from 'lucide-react';
import SectionIntro from '@/components/SectionIntro';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES_DATA } from '@/data/siteData';

export default function ServicesPreview() {
  const homeServices = SERVICES_DATA.filter((service) => service.segment === 'home');
  const farmServices = SERVICES_DATA.filter((service) => service.segment === 'farm');

  return (
    <section className="py-20 sm:py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          id="services-heading"
          eyebrow="What we do"
          title="From villa gardens to commercial farms"
          intro="Five services, one organic approach. Whether you are planning a garden at home or growing food at scale, the same farming team is behind the work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          <div className="flex flex-col">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-forest-light mb-4">
              <Home className="w-4 h-4" aria-hidden="true" /> For homes and villas
            </p>
            <div className="grid grow">
              {homeServices.map((service) => (
                <ServiceCard key={service.id} service={service} size="large" sizes="(max-width: 1024px) 100vw, 33vw" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-forest-light mb-4">
              <Tractor className="w-4 h-4" aria-hidden="true" /> For farms, growers and businesses
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 grow">
              {farmServices.map((service) => (
                <ServiceCard key={service.id} service={service} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
