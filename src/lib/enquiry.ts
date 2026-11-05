/** Pure helpers for the contact form, kept separate so they are easy to test. */

export interface EnquiryInput {
  fullName: string;
  phone: string;
  location: string;
  service: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>;

export const ENQUIRY_LIMITS = { fullName: 80, phone: 20, location: 80, message: 1000 } as const;

/** Removes control characters and collapses runs of spaces, keeping line breaks in longer text. */
export function cleanText(value: string, keepNewlines = false): string {
  const withoutControls = value.replace(keepNewlines ? /[\u0000-\u0009\u000B-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, ' ');
  const collapsed = keepNewlines
    ? withoutControls.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n')
    : withoutControls.replace(/\s+/g, ' ');
  return collapsed.trim();
}

/** Accepts local or international numbers written with spaces, dashes, dots or brackets. */
export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!/^\+?[\d\s().-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export function validateEnquiry(input: EnquiryInput): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const name = cleanText(input.fullName);
  if (!name) errors.fullName = 'Please enter your name.';
  else if (name.length < 2) errors.fullName = 'Please enter your full name.';

  if (!input.phone.trim()) errors.phone = 'Please enter a phone or WhatsApp number.';
  else if (!isValidPhone(input.phone)) errors.phone = 'Please enter a valid number, for example +971 50 123 4567.';

  if (!input.service) errors.service = 'Please choose the service you are interested in.';
  return errors;
}

/** The WhatsApp message, built only from what the visitor typed. Empty optional fields are left out. */
export function buildEnquiryMessage(input: EnquiryInput): string {
  const lines = [
    'Hello VIA Organic, I would like to make an enquiry.',
    '',
    `Name: ${cleanText(input.fullName)}`,
    `Phone: ${cleanText(input.phone)}`,
  ];
  const location = cleanText(input.location);
  if (location) lines.push(`Location: ${location}`);
  lines.push(`Service: ${cleanText(input.service)}`);
  const details = cleanText(input.message, true);
  if (details) lines.push('', `Details: ${details}`);
  return lines.join('\n');
}
