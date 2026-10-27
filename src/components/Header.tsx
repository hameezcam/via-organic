'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '@/data/siteData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <span>Organic home gardens & landscaping across the UAE</span>
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
              href={buildWhatsAppLink('Hello VIA Organic, I would like to schedule an on-site villa garden consultation.')}
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
              <span className="text-[10px] uppercase tracking-widest text-charcoal-muted -mt-1 font-medium">
                Living Landscapes UAE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-forest-light transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-forest after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
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
          <div className="flex sm:hidden items-center">
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
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-charcoal hover:text-forest hover:bg-sand/40 transition-colors"
                >
                  {link.label}
                </a>
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
