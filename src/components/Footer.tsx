import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { SITE_CONFIG, buildWhatsAppLink } from '@/data/siteData';

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
                <span className="text-[10px] uppercase tracking-widest text-sand/70 font-medium">
                  Agriculture LLC • Dubai
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-sand/80 leading-relaxed font-light max-w-md pt-2">
              Transforming Spaces. Creating Living Landscapes. Dubai&apos;s premier 100% chemical-free organic landscaping and garden design studio. We bring living soil biology, edible kitchen gardens, and water-wise smart irrigation to villas and estates across the UAE.
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

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sand/80 font-light">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About Our Story</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Core Services</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-gold transition-colors">Villa Packages</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold transition-colors">Organic Products</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">Project Portfolio</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Our Disciplines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sand/80 font-light">
              <li>Bespoke Garden Design</li>
              <li>Organic Kitchen Gardens</li>
              <li>Smart Precision Irrigation</li>
              <li>Living Desert Soil Care</li>
              <li>Annual Villa Maintenance (AMC)</li>
              <li>Hardscape & Pergola Styling</li>
              <li>Commercial Landscaping</li>
            </ul>
          </div>

          {/* Col 5: UAE Coverage & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Direct Contact
            </h4>
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
              <p className="pt-2 text-[11px] text-sand/60">
                Key communities: Dubai Hills Estate, Jumeirah, Emirates Hills, Tilal Al Ghaf, Palm Jumeirah, Al Barari, Arabian Ranches & Abu Dhabi.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60 font-light">
          <p>
            © 2026 {SITE_CONFIG.name}. All rights reserved. 100% Chemical-Free Landscaping in UAE.
          </p>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-sand transition-colors">Privacy & Terms</a>
            <span>•</span>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-gold transition-colors"
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
