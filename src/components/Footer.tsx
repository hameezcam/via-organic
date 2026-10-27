import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { NAV_LINKS, SERVICES_DATA, SITE_CONFIG, buildWhatsAppLink } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-sand-light pt-16 pb-12 border-t border-forest/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-forest-light/30">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white/90 p-1 border border-sand">
                <Image
                  src="/images/icon.png"
                  alt="VIA Organic Logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-sand transition-colors">
                  VIA ORGANIC
                </span>
                <span className="text-xs uppercase tracking-widest text-sand/70 font-medium">
                  Agriculture LLC • Dubai
                </span>
              </div>
            </Link>

            <p className="text-sm text-sand/80 leading-relaxed font-light max-w-md pt-2">
              Transforming Spaces. Creating Living Landscapes. Organic home gardens, landscaping and garden care for villas and apartments across the UAE, from a VIA Group company farming organically since 2015.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest border border-sand/30 flex items-center justify-center text-sand hover:bg-gold hover:text-forest-dark transition-all"
                aria-label="Follow VIA Organic on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppLink('Hello VIA Organic, I would like to enquire about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest border border-sand/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-full bg-forest border border-sand/30 flex items-center justify-center text-sand hover:bg-gold hover:text-forest-dark transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Pages */}
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-bold text-white tracking-wide">
              Explore
            </h2>
            <ul className="space-y-1 text-sm text-sand/80 font-light">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-block py-1 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-bold text-white tracking-wide">
              Services
            </h2>
            <ul className="space-y-1 text-sm text-sand/80 font-light">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="inline-block py-1 hover:text-gold transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: UAE Coverage & Contact */}
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-bold text-white tracking-wide">
              Direct Contact
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm text-sand/80 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`} className="hover:text-gold transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-gold transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <p className="pt-2 text-xs text-sand/70">
                Serving villas and apartments in Dubai, Abu Dhabi and across the UAE.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60 font-light">
          <p>
            © 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#top"
              className="inline-flex items-center gap-1 py-2 hover:text-gold transition-colors"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
