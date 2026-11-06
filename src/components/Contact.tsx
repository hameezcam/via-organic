'use client';

import React, { useRef, useState, useSyncExternalStore } from 'react';
import { Phone, Mail, MapPin, CalendarClock, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import {
  BUSINESS_HOURS,
  GENERAL_WHATSAPP_MESSAGE,
  MAPS_EMBED_URL,
  MAPS_URL,
  SERVICES_DATA,
  SITE_CONFIG,
  buildWhatsAppLink,
} from '@/data/siteData';
import {
  ENQUIRY_LIMITS,
  type EnquiryErrors,
  type EnquiryInput,
  buildEnquiryMessage,
  validateEnquiry,
} from '@/lib/enquiry';

const GENERAL_OPTION = 'General enquiry / not sure yet';
const FIELD_ORDER: (keyof EnquiryInput)[] = ['fullName', 'phone', 'service', 'location', 'message'];

const inputClass =
  'field-motion w-full px-4 py-3 rounded-xl bg-sand-light/50 border text-base hover:border-sand-dark focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/30';

const noopSubscribe = () => () => {};

export default function Contact() {
  // False during server render and hydration. Keeps the button disabled until
  // the form's script is ready, so an early tap can never submit the details
  // into the page URL.
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const [form, setForm] = useState<EnquiryInput>({ fullName: '', phone: '', location: '', service: '', message: '' });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [sentLink, setSentLink] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: keyof EnquiryInput) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateEnquiry(form);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      setSentLink(null);
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    const link = buildWhatsAppLink(buildEnquiryMessage(form));
    setSentLink(link);
    // Opens WhatsApp (app on mobile, WhatsApp Web or desktop app on computers)
    // with the message filled in. The visitor still presses send themselves.
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const fieldProps = (field: keyof EnquiryInput) => ({
    id: field,
    name: field,
    value: form[field],
    onChange: update(field),
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
    className: `${inputClass} ${errors[field] ? 'border-red-600' : 'border-sand focus:border-forest'}`,
  });

  const errorText = (field: keyof EnquiryInput) =>
    errors[field] ? (
      <p id={`${field}-error`} className="fade-in mt-1.5 flex items-center gap-1.5 text-sm text-red-700">
        <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
        {errors[field]}
      </p>
    ) : null;

  const labelClass = 'block text-sm font-semibold text-charcoal mb-2';
  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <section className="py-16 sm:py-20 bg-sand-light/50 text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Enquiry form that opens WhatsApp */}
          <div data-reveal className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-sand/80 shadow-xl">
            <div className="flex items-start gap-3 mb-6 pb-4 border-b border-sand/60">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0" aria-hidden="true">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-forest">Send an enquiry on WhatsApp</h2>
                <p className="text-sm text-charcoal-muted">
                  Fill in your details and we will open WhatsApp with your message ready. Nothing is sent until you press send in WhatsApp.
                </p>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="form-note">
              <p id="form-note" className="text-sm text-charcoal-muted">
                Fields marked <span aria-hidden="true" className="text-red-700">*</span><span className="sr-only">with an asterisk</span> are required.
              </p>

              {errorCount > 0 && (
                <div role="alert" className="fade-in p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
                  Please check the {errorCount === 1 ? 'highlighted field' : `${errorCount} highlighted fields`} below.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full name <span aria-hidden="true" className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={ENQUIRY_LIMITS.fullName}
                    {...fieldProps('fullName')}
                  />
                  {errorText('fullName')}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone or WhatsApp number <span aria-hidden="true" className="text-red-700">*</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    maxLength={ENQUIRY_LIMITS.phone}
                    placeholder="+971 50 123 4567"
                    {...fieldProps('phone')}
                  />
                  {errorText('phone')}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service <span aria-hidden="true" className="text-red-700">*</span>
                  </label>
                  <select required {...fieldProps('service')}>
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {SERVICES_DATA.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value={GENERAL_OPTION}>{GENERAL_OPTION}</option>
                  </select>
                  {errorText('service')}
                </div>

                <div>
                  <label htmlFor="location" className={labelClass}>
                    Location <span className="font-normal text-charcoal-muted">(optional)</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="address-level2"
                    maxLength={ENQUIRY_LIMITS.location}
                    placeholder="e.g. Dubai Hills, Jumeirah or Al Ain"
                    {...fieldProps('location')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  About your garden or project <span className="font-normal text-charcoal-muted">(optional)</span>
                </label>
                <textarea
                  rows={4}
                  maxLength={ENQUIRY_LIMITS.message}
                  placeholder="For a garden: the size of the space and what you would like. For a farm: land size, water source and crops."
                  {...fieldProps('message')}
                  className={`${fieldProps('message').className} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={!ready}
                className="btn-motion disabled:opacity-60 disabled:cursor-wait w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-base shadow-lg cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Continue to WhatsApp</span>
              </button>

              <div aria-live="polite">
                {sentLink && (
                  <div className="fade-in p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />
                    <span>
                      WhatsApp should now be open with your message. Review it and press send. If nothing opened,{' '}
                      <a href={sentLink} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                        open WhatsApp here
                      </a>{' '}
                      or call us on{' '}
                      <a href={SITE_CONFIG.phoneHref} className="underline font-semibold whitespace-nowrap">
                        {SITE_CONFIG.phone}
                      </a>
                      .
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact details, visits and map */}
          <div data-reveal-group className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-md space-y-6">
              <h2 className="font-serif text-2xl font-bold text-forest">Contact details</h2>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3.5">
                  <span className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-forest shrink-0" aria-hidden="true">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase text-charcoal-muted tracking-wider block">Phone</span>
                    <a href={SITE_CONFIG.phoneHref} className="inline-block py-1 font-semibold text-forest hover:text-emerald-800 transition-colors text-base">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-forest shrink-0" aria-hidden="true">
                    <WhatsAppIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase text-charcoal-muted tracking-wider block">WhatsApp</span>
                    <a
                      href={buildWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-1 font-semibold text-forest hover:text-emerald-800 transition-colors text-base"
                    >
                      {SITE_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-forest shrink-0" aria-hidden="true">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase text-charcoal-muted tracking-wider block">Email</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="inline-block py-1 font-semibold text-forest hover:text-emerald-800 transition-colors break-all">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-forest shrink-0" aria-hidden="true">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase text-charcoal-muted tracking-wider block">Dubai office</span>
                    <address className="not-italic text-charcoal leading-relaxed">
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}
                    </address>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 pt-4 border-t border-sand/60">
                  <span className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-forest shrink-0" aria-hidden="true">
                    <CalendarClock className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase text-charcoal-muted tracking-wider block">
                      {BUSINESS_HOURS ? 'Office hours' : 'Site visits'}
                    </span>
                    {BUSINESS_HOURS ? (
                      <dl className="text-charcoal">
                        {BUSINESS_HOURS.rows.map((row) => (
                          <div key={row.days} className="flex gap-2">
                            <dt className="font-medium">{row.days}:</dt>
                            <dd>{row.hours}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : (
                      <p className="text-charcoal">{SITE_CONFIG.visitsNote}</p>
                    )}
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-sand/80 shadow-md">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h2 className="font-serif text-lg font-bold text-forest flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  Find our office
                </h2>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-800 hover:text-emerald-900 flex items-center gap-1 py-2"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-sand bg-sand-light">
                <iframe
                  title="Map showing the VIA Organic office on Al Rigga Street, Deira, Dubai"
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
