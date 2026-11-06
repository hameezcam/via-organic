'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink, Expand, MapPin, X } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/Icons';
import { GALLERY_PROJECTS, SITE_CONFIG, buildWhatsAppLink } from '@/data/siteData';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastTrigger = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const count = GALLERY_PROJECTS.length;
  const active = activeIndex === null ? null : GALLERY_PROJECTS[activeIndex];

  const open = (index: number) => {
    lastTrigger.current = index;
    setActiveIndex(index);
  };
  // Play the exit animation, then close. Skipped for reduced motion.
  const close = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog?.open || dialog.hasAttribute('data-closing')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialog.close();
      return;
    }
    dialog.setAttribute('data-closing', '');
    window.setTimeout(() => {
      dialog.removeAttribute('data-closing');
      dialog.close();
    }, 220);
  }, []);
  const step = useCallback(
    (delta: number) => setActiveIndex((idx) => (idx === null ? idx : (idx + delta + count) % count)),
    [count]
  );

  // Show the native modal dialog when a photo is chosen. The dialog handles
  // focus trapping, the Escape key and the backdrop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (activeIndex !== null && dialog && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    }
  }, [activeIndex]);

  const handleClose = () => {
    setActiveIndex(null);
    const idx = lastTrigger.current;
    if (idx !== null) triggerRefs.current[idx]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      step(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      step(-1);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-cream text-charcoal" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="projects-heading" className="sr-only">
          Garden projects
        </h2>

        {/* Masonry columns keep each photo's natural shape */}
        <ul data-reveal-group className="columns-1 sm:columns-2 lg:columns-3 gap-6 mb-16 [&>li]:mb-6">
          {GALLERY_PROJECTS.map((project, idx) => (
            <li key={project.id} className="break-inside-avoid">
              <figure className="group rounded-3xl overflow-hidden border border-sand/80 bg-white shadow-xs transition-[translate,box-shadow,border-color] duration-300 ease-organic hover:-translate-y-1 hover:shadow-[0_24px_44px_-20px_rgb(16_36_21/0.45)] hover:border-sand-dark focus-within:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0">
                <button
                  type="button"
                  ref={(el) => {
                    triggerRefs.current[idx] = el;
                  }}
                  onClick={() => open(idx)}
                  className="relative block w-full overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-gold"
                  aria-label={`View larger photo: ${project.title}, ${project.location}`}
                  aria-haspopup="dialog"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="w-full h-auto transition-[scale] duration-500 ease-organic group-hover:scale-[1.04] group-focus-within:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100"
                  />
                  {/* Hover overlay: a soft shade and a "view larger" cue. On touch screens only the icon shows. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-forest-dark/55 via-forest-dark/0 to-transparent opacity-0 transition-opacity duration-300 ease-organic group-hover:opacity-100 group-focus-within:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-4 bottom-4 inline-flex items-center gap-2 text-sm font-semibold text-white opacity-0 translate-y-2 transition-[opacity,translate] duration-300 ease-organic group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
                  >
                    View larger
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-forest-dark/75 text-sand-light flex items-center justify-center transition-[background-color,scale] duration-300 ease-organic group-hover:bg-forest group-hover:scale-110"
                  >
                    <Expand className="w-4 h-4" />
                  </span>
                </button>
                <figcaption className="p-5">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest mb-1">{project.title}</h3>
                  <p className="flex items-center gap-1.5 text-sm font-medium text-forest-light mb-2">
                    <MapPin className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                    {project.location}
                  </p>
                  <p className="text-sm text-charcoal-muted leading-relaxed">{project.description}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* Instagram */}
        <div data-reveal className="p-8 sm:p-10 rounded-3xl bg-forest text-sand-light text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-forest-light/40 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold mb-2">
                <InstagramIcon className="w-4 h-4" />
                <span>Follow our work</span>
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                More on Instagram: {SITE_CONFIG.instagramHandle}
              </h2>
              <p className="text-sand/85 text-sm max-w-xl">Recent gardens, harvests and updates from our team.</p>
            </div>

            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-sand hover:bg-sand-dark text-forest-dark font-semibold text-sm shadow-md shrink-0"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Visit {SITE_CONFIG.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onCancel={(e) => {
          // Escape: run the same animated close as the close button.
          e.preventDefault();
          close();
        }}
        onKeyDown={handleKeyDown}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-labelledby="lightbox-title"
        className="lightbox m-auto w-[min(100vw-1rem,72rem)] max-h-[calc(100dvh-1rem)] p-0 rounded-2xl bg-forest-dark text-sand-light backdrop:bg-black/80 overflow-hidden"
      >
        {active && activeIndex !== null && (
          <div className="flex flex-col max-h-[calc(100dvh-1rem)]">
            <div className="relative bg-black flex items-center justify-center min-h-0 grow">
              <Image
                key={active.id}
                src={active.image}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="(max-width: 1200px) 100vw, 1150px"
                className="fade-in w-auto h-auto max-w-full max-h-[calc(100dvh-13rem)] sm:max-h-[calc(100dvh-10rem)] object-contain"
              />
              <button
                type="button"
                onClick={() => step(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest-dark/80 hover:bg-forest flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest-dark/80 hover:bg-forest flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                ref={closeRef}
                onClick={close}
                className="absolute top-2 right-2 w-11 h-11 rounded-full bg-forest-dark/80 hover:bg-forest flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Close photo"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 id="lightbox-title" className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {active.title}
                </h2>
                <p className="text-sm text-sand/85">
                  {active.location} · Photo {activeIndex + 1} of {count}
                </p>
              </div>
              <a
                href={buildWhatsAppLink(
                  `Hello VIA Organic, I saw the "${active.title}" project in your gallery and would like a quote for a similar garden.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-motion inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Ask about a garden like this
              </a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
