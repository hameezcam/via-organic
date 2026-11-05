'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, MessageSquare, ArrowRight, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SERVICES_DATA, SITE_CONFIG, buildWhatsAppLink } from '@/data/siteData';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    // Close menus after navigating to a new page.
    setLastPath(pathname);
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-forest-dark text-sand-light text-xs py-2 px-4 border-b border-forest/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 text-center sm:text-left">
          <p className="flex items-center justify-center gap-1.5 font-medium tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Landscaping &amp; organic agriculture across the UAE</span>
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 py-1.5"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <span className="text-forest-light hidden sm:inline">|</span>
            <a
              href={buildWhatsAppLink('Hello VIA Organic, I would like to arrange a garden site visit.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 py-1.5"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

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
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest rounded-lg p-1">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white/80 p-1 border border-sand shadow-xs group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/icon.png"
                alt="VIA Organic Logo Mark"
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
              const linkClass = `text-sm font-medium transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-forest after:transition-transform after:origin-left hover:after:scale-x-100 ${
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
                    if (e.key === 'Escape') setServicesOpen(false);
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
                      type="button"
                      onClick={() => setServicesOpen((open) => !open)}
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      aria-label="Show services"
                      className="p-1 rounded text-charcoal hover:text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {servicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80">
                      <ul id="services-menu" className="rounded-2xl bg-white border border-sand shadow-xl p-2">
                        {SERVICES_DATA.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.id}`}
                              aria-current={pathname === `/services/${service.id}` ? 'page' : undefined}
                              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                                pathname === `/services/${service.id}` ? 'bg-sand-light text-forest' : 'text-charcoal hover:bg-sand-light hover:text-forest'
                              }`}
                            >
                              <span className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                                <Image src={service.image} alt="" fill sizes="40px" className="object-cover" />
                              </span>
                              <span className="text-sm font-medium">{service.title}</span>
                            </Link>
                          </li>
                        ))}
                        <li className="border-t border-sand mt-1 pt-1">
                          <Link href="/services" className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-forest hover:bg-sand-light">
                            All services <ArrowRight className="w-4 h-4 text-gold" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={buildWhatsAppLink('Hello VIA Organic, I would like to request a free quote for my garden.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-sand-light text-sm font-semibold hover:bg-forest-light active:scale-95 transition-all shadow-sm hover:shadow-md group"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-forest hover:bg-sand/50 focus:outline-none focus:ring-2 focus:ring-forest"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream border-b border-sand shadow-xl px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav aria-label="Mobile" className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={(link.href === '/services' ? pathname === '/services' : isActive(link.href)) ? 'page' : undefined}
                    className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive(link.href) ? 'bg-sand/60 text-forest' : 'text-charcoal hover:text-forest hover:bg-sand/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.href === '/services' && (
                    <ul className="ml-4 pl-3 border-l-2 border-sand">
                      {SERVICES_DATA.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/services/${service.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={pathname === `/services/${service.id}` ? 'page' : undefined}
                            className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
                              pathname === `/services/${service.id}` ? 'text-forest font-semibold' : 'text-charcoal-muted hover:text-forest'
                            }`}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </nav>
            <div className="pt-3 border-t border-sand flex flex-col gap-2.5">
              <a
                href={buildWhatsAppLink('Hello VIA Organic, I would like to request a free quote for my garden.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest text-sand-light text-sm font-semibold shadow-md active:scale-95 transition-transform"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Get a Free Quote via WhatsApp</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-forest text-forest text-sm font-medium hover:bg-sand/30 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
