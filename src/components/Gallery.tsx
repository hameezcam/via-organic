import React from 'react';
import Image from 'next/image';
import { MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { GALLERY_PROJECTS, SITE_CONFIG } from '@/data/siteData';


export default function Gallery() {
  return (
    <section className="py-16 sm:py-20 bg-cream text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {GALLERY_PROJECTS.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden border border-sand/80 shadow-xs hover:shadow-2xl transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title}: ${project.description}`}
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
                    <h2 className="font-serif text-xl sm:text-2xl font-bold mb-1.5 text-sand-light">
                      {project.title}
                    </h2>
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
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                Explore More on Instagram: {SITE_CONFIG.instagramHandle}
              </h2>
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
