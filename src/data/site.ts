// Central place for contact + social configuration.
// Update these values to change them site-wide.
import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/ui';

// The deployed origin lives in `site` in astro.config.mjs (read via Astro.site), not here —
// keeping one source of truth avoids it drifting out of sync across environments.
export const SITE = {
  name: 'LJ Solutions',
};

export function getTagline(lang: Locale): string {
  const t = useTranslations(lang).hero;
  return [t.headlinePre, t.headlineHighlight, t.headlinePost].filter(Boolean).join(' ') + '.';
}

// WhatsApp number in international format (a leading "+" is fine, it's stripped below).
export const WHATSAPP_NUMBER = '+573224047068';
export const WHATSAPP_DISPLAY = '+57 322 404 7068';

/** wa.me link with a prefilled message (the generic greeting unless one is given). */
export function getWhatsAppLink(lang: Locale, message?: string): string {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, '');
  const text = message ?? useTranslations(lang).whatsapp.default;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export const CONTACT_EMAIL = 'lj-solutions@outlook.es';
export const FOUNDER_NAME = 'Alejandro Sossa';

export function getSocialLinks(lang: Locale) {
  return {
    instagram: 'https://instagram.com/ljsolutions_2026',
    tiktok: 'https://tiktok.com/@ljsolutions5',
    whatsapp: getWhatsAppLink(lang),
  };
}

// Web3Forms access key for the contact form (src/components/contact/ContactForm.astro).
// Get one free at https://web3forms.com with lj-solutions@outlook.es; messages are
// delivered to that inbox. The key is public by design (it ships in the page), so it
// is fine to commit. While it is empty the form validates but does not send, and
// tells the visitor to use WhatsApp or email instead.
export const WEB3FORMS_ACCESS_KEY = '';
