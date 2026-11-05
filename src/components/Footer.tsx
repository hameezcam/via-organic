import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/Icons';
import { GENERAL_WHATSAPP_MESSAGE, MAPS_URL, NAV_LINKS, SERVICES_DATA, SITE_CONFIG, buildWhatsAppLink } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-sand-light pt-16 pb-12 border-t border-forest/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-forest-light/30">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" aria-label="VIA Organic home" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white/90 p-1 border border-sand">
                <Image
                  src="/images/icon.png"
                  alt=""
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

            <p className="text-sm text-sand/85 leading-relaxed max-w-md pt-2">
              Transforming Spaces. Creating Living Landscapes. Landscaping, commercial farms, advanced agriculture, farm management and fresh vegetable distribution across the UAE, from VIA Group, farming organically since 2015.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-forest border border-sand/30 flex items-center justify-center text-sand hover:bg-gold hover:text-forest-dark transition-all"
                aria-label="Follow VIA Organic on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-forest border border-sand/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-11 h-11 rounded-full bg-forest border border-sand/30 flex items-center justify-center text-sand hover:bg-gold hover:text-forest-dark transition-all"
                aria-label="Email VIA Organic"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Col 3: Pages */}
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-bold text-white tracking-wide">
              Explore
            </h2>
            <ul className="space-y-1 text-sm text-sand/85">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-block py-2 hover:text-gold transition-colors">
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
            <ul className="space-y-1 text-sm text-sand/85">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="inline-block py-2 hover:text-gold transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: UAE Coverage & Contact */}
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-bold text-white tracking-wide">
              Contact
            </h2>
            <div className="space-y-2.5 text-sm text-sand/85">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  <address className="not-italic">{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, UAE</address>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <a href={SITE_CONFIG.phoneHref} className="inline-block py-2 hover:text-gold transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="inline-block py-2 hover:text-gold transition-colors break-all">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <p className="pt-2 text-sm text-sand/75">
                Serving homes, farms and businesses in Dubai, Abu Dhabi and across the UAE. Site visits by appointment.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sand/75">
          <p>
            © 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#top"
              className="inline-flex items-center gap-1 py-2 hover:text-gold transition-colors"
              >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
