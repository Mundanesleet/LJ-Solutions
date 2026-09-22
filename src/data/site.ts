// Central place for contact + social configuration.
// Update these values to change them site-wide.
import { localizePath, type Locale } from '../i18n/config';
import { useTranslations } from '../i18n/ui';

// The deployed origin lives in `site` in astro.config.mjs (read via Astro.site), not here —
// keeping one source of truth avoids it drifting out of sync across environments.
export const SITE = {
  name: 'LJ Solutions',
};

export function getTagline(lang: Locale): string {
  const t = useTranslations(lang).hero;
  return `${t.headlinePre} ${t.headlineHighlight} ${t.headlinePost}`;
}

// WhatsApp number in international format (a leading "+" is fine, it's stripped below).
export const WHATSAPP_NUMBER = '+573224047068';

const WHATSAPP_DEFAULT_MESSAGE: Record<Locale, string> = {
  es: 'Hola! Me gustaría hablar sobre un proyecto.',
  en: "Hi! I'd like to talk about a project.",
};

export function getWhatsAppLink(lang: Locale): string {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE[lang])}`;
}

// TODO: replace with the real business inbox before launch.
export const CONTACT_EMAIL = 'lj-solutions@outlook.es';

export function getSocialLinks(lang: Locale) {
  return {
    instagram: 'https://instagram.com/ljsolutions_2026',
    tiktok: 'https://tiktok.com/@ljsolutions5',
    whatsapp: getWhatsAppLink(lang),
  };
}

// TODO: point this at a real form backend (Formspree, Getform, a custom API route, etc.)
// The form in src/components/Contact.astro is wired to submit here.
export const FORM_ENDPOINT = '';

export function getNavLinks(lang: Locale) {
  const t = useTranslations(lang).nav;
  return [
    { label: t.solutions, href: localizePath(lang, '/#solutions') },
    { label: t.projects, href: localizePath(lang, '/#projects') },
    { label: t.howWeWork, href: localizePath(lang, '/#how-we-work') },
    { label: t.about, href: localizePath(lang, '/#about') },
  ];
}

export function getFooterLinks(lang: Locale) {
  const t = useTranslations(lang);
  return [...getNavLinks(lang), { label: t.footer.contact, href: localizePath(lang, '/#contact') }];
}
