'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { GENERAL_WHATSAPP_MESSAGE, SERVICES_DATA, buildWhatsAppLink } from '@/data/siteData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const pathname = usePathname();

  // On a service page, start the chat about that service.
  const service = SERVICES_DATA.find((item) => pathname === `/services/${item.id}`);
  const waUrl = buildWhatsAppLink(service?.whatsappMessage ?? GENERAL_WHATSAPP_MESSAGE);

  return (
    <aside
      aria-label="WhatsApp chat"
      className="fixed z-30 flex items-center gap-3 right-4 sm:right-6"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 bg-white text-charcoal pl-3.5 pr-1 py-1 rounded-2xl shadow-xl border border-sand text-sm font-medium">
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-emerald-600" />
          <span>Questions? Chat with us</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="w-8 h-8 inline-flex items-center justify-center text-charcoal-muted hover:text-charcoal rounded-full"
            aria-label="Dismiss chat prompt"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-2xl hover:bg-emerald-800 hover:scale-105 active:scale-95 transition-all duration-300 pulse-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
        aria-label={service ? `Chat on WhatsApp about ${service.title}` : 'Chat with VIA Organic on WhatsApp'}
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </aside>
  );
}
