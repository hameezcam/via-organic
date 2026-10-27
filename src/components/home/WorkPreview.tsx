import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import SectionIntro from '@/components/SectionIntro';
import { GALLERY_PROJECTS } from '@/data/siteData';

const LAYOUT = ['lg:col-span-2 lg:row-span-2', '', '', '', ''];

export default function WorkPreview() {
  const projects = GALLERY_PROJECTS.slice(0, 5);

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Our work"
          title="Real gardens across the UAE"
          intro="A few of the villa gardens we have planted and look after."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[620px]">
          {projects.map((project, idx) => (
            <figure
              key={project.id}
              className={`relative h-64 lg:h-auto rounded-3xl overflow-hidden bg-forest-dark ${LAYOUT[idx]}`}
            >
              <Image
                src={project.image}
                alt={`${project.title}: ${project.description}`}
                fill
                sizes={idx === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 640px) 100vw, 25vw'}
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-forest-dark/90 to-transparent text-white">
                <span className="block font-serif text-xl font-bold">{project.title}</span>
                <span className="flex items-center gap-1 text-sm text-sand/90">
                  <MapPin className="w-3.5 h-3.5 text-gold" /> {project.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-forest text-forest hover:bg-forest hover:text-sand-light font-semibold transition-colors"
          >
            See the full gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
