'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { usePathname } from 'next/navigation';
import { GENERAL_WHATSAPP_MESSAGE, NAV_LINKS, SERVICES_DATA, SITE_CONFIG, buildWhatsAppLink } from '@/data/siteData';


export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(pathname.startsWith('/services'));
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    // Close menus after navigating to a new page.
    setLastPath(pathname);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    // The five services stay one tap away; on a services page they start open.
    setMobileServicesOpen(pathname.startsWith('/services'));
  }
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu with Escape, and when the screen grows to desktop width.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => desktop.matches && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Notification Bar */}
      <section aria-label="Quick contact" className="bg-forest-dark text-sand-light text-xs py-1 px-4 border-b border-forest/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 text-center sm:text-left">
          <p className="flex items-center justify-center gap-1.5 font-medium tracking-wide">
            <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span>Landscaping &amp; organic agriculture across the UAE</span>
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={SITE_CONFIG.phoneHref}
              className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <span className="text-forest-light hidden sm:inline">|</span>
            <a
              href={buildWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 py-2"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-md py-3 border-b border-sand'
            : 'bg-cream/90 backdrop-blur-sm py-4 border-b border-sand/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="VIA Organic home" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-lg p-1">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white/80 p-1 border border-sand shadow-xs group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/icon.png"
                alt=""
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest group-hover:text-forest-light transition-colors">
                VIA ORGANIC
              </span>
              <span className="text-xs uppercase tracking-widest text-charcoal-muted -mt-1 font-medium">
                Organic Agriculture UAE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden lg:flex items-center space-x-7">
            {NAV_LINKS.map((link) => {
              const linkClass = `text-sm font-medium transition-colors duration-300 py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-forest after:transition-transform after:duration-300 after:ease-organic after:origin-left hover:after:scale-x-100 ${
                isActive(link.href) ? 'text-forest after:scale-x-100' : 'text-charcoal hover:text-forest-light after:scale-x-0'
              }`;
              if (link.href !== '/services') {
                return (
                  <Link key={link.label} href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={linkClass}>
                    {link.label}
                  </Link>
                );
              }
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onKeyDown={(e) => {
                    if (e.key !== 'Escape') return;
                    setServicesOpen(false);
                    // If focus was inside the menu, put it back on the toggle so it isn't lost.
                    if (document.getElementById('services-menu')?.contains(document.activeElement)) {
                      servicesButtonRef.current?.focus();
                    }
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setServicesOpen(false);
                  }}
                >
                  <div className="flex items-center gap-1">
                    <Link href={link.href} aria-current={pathname === '/services' ? 'page' : undefined} className={linkClass}>
                      {link.label}
                    </Link>
                    <button
                      ref={servicesButtonRef}
                      type="button"
                      onClick={() => setServicesOpen((open) => !open)}
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      aria-label={servicesOpen ? 'Hide services menu' : 'Show services menu'}
                      className="p-1.5 rounded text-charcoal hover:text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                    >
                      <ChevronDown aria-hidden="true" className={`w-4 h-4 transition-[rotate] duration-300 ease-organic ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {/* Always rendered so it can fade and slide; visibility:hidden keeps it out of the tab order when closed. */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80 transition-[opacity,translate,visibility] duration-300 ease-organic ${
                      servicesOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-1.5'
                    }`}
                  >
                      <ul id="services-menu" className="rounded-2xl bg-white border border-sand shadow-xl p-2">
                        {SERVICES_DATA.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.id}`}
                              aria-current={pathname === `/services/${service.id}` ? 'page' : undefined}
                              className={`group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 ease-organic ${
                                pathname === `/services/${service.id}` ? 'bg-sand-light text-forest' : 'text-charcoal hover:bg-sand-light hover:text-forest'
                              }`}
                            >
                              <span className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                                <Image src={service.image} alt="" fill sizes="40px" className="object-cover transition-[scale] duration-500 ease-organic group-hover/item:scale-110" />
                              </span>
                              <span className="text-sm font-medium">{service.title}</span>
                            </Link>
                          </li>
                        ))}
                        <li className="border-t border-sand mt-1 pt-1">
                          <Link href="/services" className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-forest transition-colors duration-300 hover:bg-sand-light">
                            All services <ArrowRight className="arrow-motion w-4 h-4 text-gold" aria-hidden="true" />
                          </Link>
                        </li>
                      </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={buildWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-sand-light text-sm font-semibold hover:bg-forest-light shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
              <span>Get a Free Quote</span>
              <ArrowRight aria-hidden="true" className="arrow-motion w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-forest hover:bg-sand/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer: always rendered so it can slide and fade; inert and invisible when closed. */}
          <div
            id="mobile-menu"
            inert={!mobileMenuOpen}
            className={`lg:hidden absolute inset-x-0 top-full bg-cream border-b border-sand shadow-xl px-4 pt-4 pb-6 space-y-3 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain transition-[opacity,translate,visibility] duration-300 ease-organic ${
              mobileMenuOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'
            }`}
          >
            <nav aria-label="Mobile" className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <React.Fragment key={link.label}>
                  <div className="flex items-stretch gap-1">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={(link.href === '/services' ? pathname === '/services' : isActive(link.href)) ? 'page' : undefined}
                    className={`grow px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                      isActive(link.href) ? 'bg-sand/60 text-forest' : 'text-charcoal hover:text-forest hover:bg-sand/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.href === '/services' && (
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-menu"
                      aria-label={mobileServicesOpen ? 'Hide the five services' : 'Show the five services'}
                      className="w-12 shrink-0 inline-flex items-center justify-center rounded-md text-forest hover:bg-sand/40 transition-colors duration-300"
                    >
                      <ChevronDown aria-hidden="true" className={`w-5 h-5 transition-[rotate] duration-300 ease-organic ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                  </div>
                  {link.href === '/services' && (
                    <div id="mobile-services-menu" className="collapse-motion" data-open={mobileServicesOpen} inert={!mobileServicesOpen}>
                    <div>
                    <ul className="ml-4 pl-3 border-l-2 border-sand">
                      {SERVICES_DATA.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/services/${service.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={pathname === `/services/${service.id}` ? 'page' : undefined}
                            className={`block px-3 py-3 rounded-md text-base transition-colors ${
                              pathname === `/services/${service.id}` ? 'text-forest font-semibold' : 'text-charcoal-muted hover:text-forest'
                            }`}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </nav>
            <div className="pt-3 border-t border-sand flex flex-col gap-2.5">
              <a
                href={buildWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-motion w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest text-sand-light text-sm font-semibold shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
                <span>Get a Free Quote on WhatsApp</span>
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="btn-motion w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-forest text-forest text-sm font-medium hover:bg-sand/30"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
      </header>
    </>
  );
}
