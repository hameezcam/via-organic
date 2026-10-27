'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '@/data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    community: '',
    serviceRequired: 'Villa Garden Package',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*New Garden Enquiry — VIA Organic*
• *Name:* ${formData.fullName}
• *Phone:* ${formData.phone}
• *Area:* ${formData.community || 'Not given'}
• *Service Required:* ${formData.serviceRequired}
• *Details:* ${formData.message || 'Please contact me to arrange a site visit.'}`;

    const waLink = buildWhatsAppLink(formattedMessage);
    setSubmitted(true);

    // Open WhatsApp in a new tab/app window
    if (typeof window !== 'undefined') {
      window.open(waLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-sand-light/50 text-charcoal border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-forest-light mb-3 inline-block">
            Start Your Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6">
            Get in Touch With Our Team
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            Ask about a package, a landscaping quote or our products. Fill in the form to start a conversation directly on WhatsApp.
          </p>
        </div>

        {/* Form and Contact Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form That Sends to WhatsApp */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-sand/80 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-sand/60">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest">
                  Direct WhatsApp Enquiry Form
                </h3>
                <p className="text-xs text-charcoal-muted">
                  Submitting directly connects you with our team on WhatsApp with your enquiry details.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                    Full Name <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Al-Mansoori"
                    className="w-full px-4 py-3 rounded-xl bg-sand-light/50 border border-sand focus:border-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/20 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +971 50 123 4567"
                    className="w-full px-4 py-3 rounded-xl bg-sand-light/50 border border-sand focus:border-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/20 text-sm transition-all"
                  />
                </div>
              </div>

              {/* Community & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="community" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                    Community / Area
                  </label>
                  <input
                    type="text"
                    id="community"
                    value={formData.community}
                    onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                    placeholder="e.g. Dubai Hills, Jumeirah, Tilal Al Ghaf"
                    className="w-full px-4 py-3 rounded-xl bg-sand-light/50 border border-sand focus:border-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/20 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="serviceRequired" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                    Service or Package
                  </label>
                  <select
                    id="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-sand-light/50 border border-sand focus:border-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/20 text-sm transition-all"
                  >
                    <option value="Villa Garden Package">Villa garden package (AED 1,000 – 3,800)</option>
                    <option value="Apartment Balcony Package">Apartment balcony package (AED 1,200 – 3,400)</option>
                    <option value="Garden Design & Landscaping">Garden design & landscaping</option>
                    <option value="Organic Vegetable & Kitchen Garden">Organic vegetable & kitchen garden</option>
                    <option value="Drip Irrigation">Drip irrigation</option>
                    <option value="Soil Care & Organic Nutrition">Soil care & organic nutrition</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual maintenance contract (AMC)</option>
                    <option value="Organic Products">Organic products</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Tell Us About Your Garden or Project
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your garden space, current challenges (e.g. dying grass, high water bill, wish for fresh organic vegetables), or preferred site visit dates..."
                  className="w-full px-4 py-3 rounded-xl bg-sand-light/50 border border-sand focus:border-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/20 text-sm transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg hover:shadow-emerald-900/30 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Send via WhatsApp</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    WhatsApp link opened! If the chat did not launch automatically, click{' '}
                    <a
                      href={buildWhatsAppLink(`Hello VIA Organic, my name is ${formData.fullName}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold"
                    >
                      here to open directly
                    </a>
                    .
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Contact Details & Opening Hours & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Info Card */}
            <div className="bg-white rounded-3xl p-8 border border-sand/80 shadow-md space-y-6">
              <h3 className="font-serif text-2xl font-bold text-forest">
                Direct Contact Details
              </h3>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-forest shrink-0">
                    <Phone className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-charcoal-muted tracking-wider block">
                      Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                      className="font-semibold text-forest hover:text-emerald-700 transition-colors text-base"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-forest shrink-0">
                    <Mail className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-charcoal-muted tracking-wider block">
                      Email Enquiries
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-semibold text-forest hover:text-emerald-700 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-forest shrink-0">
                    <MapPin className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-charcoal-muted tracking-wider block">
                      Dubai Office
                    </span>
                    <p className="text-charcoal-muted leading-relaxed">
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-sand/60">
                  <div className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-forest shrink-0">
                    <Clock className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-charcoal-muted tracking-wider block">
                      Working Hours
                    </span>
                    <p className="text-charcoal font-medium">
                      {SITE_CONFIG.openingHours.weekdays}
                    </p>
                    <p className="text-sm text-charcoal-muted">
                      {SITE_CONFIG.openingHours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map of Dubai */}
            <div className="bg-white rounded-3xl p-6 border border-sand/80 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="font-serif text-lg font-bold text-forest">
                    Find Our Office
                  </span>
                </div>
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-800 flex items-center gap-1 py-2"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-sand">
                <iframe
                  title="Map showing the VIA Organic office on Al Rigga Street, Deira, Dubai"
                  src={SITE_CONFIG.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter saturate-90 contrast-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
