'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/siteData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage =
    'Hello VIA Organic, I would like to speak with an agronomist regarding my villa garden in Dubai.';
  const waUrl = buildWhatsAppLink(defaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Tooltip Callout */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 bg-white text-charcoal px-3.5 py-2 rounded-2xl shadow-xl border border-sand text-xs font-medium animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Chat with our Dubai Agronomist</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-muted hover:text-charcoal p-0.5 rounded-full ml-1"
            aria-label="Dismiss WhatsApp Tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 pulse-soft focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat directly on WhatsApp with VIA Organic"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white" />
      </a>
    </div>
  );
}
