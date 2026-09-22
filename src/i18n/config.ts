export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

/** Narrows Astro.currentLocale (string | undefined) to a known Locale. */
export function toLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : DEFAULT_LOCALE;
}

export function otherLocale(lang: Locale): Locale {
  return lang === 'es' ? 'en' : 'es';
}

/**
 * Builds a site-relative URL for `path` (e.g. "/", "/projects/foo", "/#contact")
 * in the given language. The default locale ("es") has no prefix.
 */
export function localizePath(lang: Locale, path: string): string {
  const hasHash = path.includes('#');
  const [pathname, hash] = hasHash ? path.split(/(?=#)/) : [path, ''];
  const cleanPathname = pathname === '/' ? '' : pathname;

  if (lang === DEFAULT_LOCALE) {
    return `${cleanPathname || '/'}${hash}`;
  }
  return `/${lang}${cleanPathname}${hash}` || `/${lang}`;
}

/** Given the current pathname, returns the equivalent path with the locale prefix stripped. */
export function stripLocalePrefix(pathname: string, lang: Locale): string {
  if (lang === DEFAULT_LOCALE) return pathname;
  const prefix = `/${lang}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}
