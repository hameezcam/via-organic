'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { GALLERY_PROJECTS, SITE_CONFIG } from '@/data/siteData';

const CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'villa', label: 'Villa Gardens' },
  { key: 'edible', label: 'Planters & Edible Gardens' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream text-charcoal border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-forest-light mb-3 inline-block">
            Our Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6">
            Recent Gardens Across the UAE
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            A selection of villa gardens we have planted and cared for. Follow us on Instagram for more.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              aria-pressed={activeCategory === cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-forest text-sand-light shadow-md'
                  : 'bg-sand-light text-charcoal-muted hover:bg-sand/60 hover:text-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, idx) => {
            const isTall = idx % 3 === 0;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden bg-white border border-sand/80 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Photo */}
                <div className={`relative w-full ${isTall ? 'h-80 sm:h-96' : 'h-72'} overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Location Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-dark/80 backdrop-blur-md text-sand-light text-xs font-medium flex items-center gap-1.5 border border-white/10">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>{project.location}</span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1.5 text-sand-light">
                      {project.title}
                    </h3>
                    <p className="text-sm text-sand/90 line-clamp-2 font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Instagram */}
        <div className="p-8 sm:p-10 rounded-3xl bg-forest text-sand-light text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-forest-light/40 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold mb-2">
                <InstagramIcon className="w-4 h-4" />
                <span>Follow Our Living Journey</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                Explore More on Instagram: {SITE_CONFIG.instagramHandle}
              </h3>
              <p className="text-sand/80 text-xs sm:text-sm max-w-xl">
                Garden reveals, harvests and organic gardening tips from our team in the UAE.
              </p>
            </div>

            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-sand hover:bg-sand-dark text-forest-dark font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 shrink-0"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Visit @viaorganic</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
