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

// import.meta.env.BASE_URL reflects `base` from astro.config.mjs (e.g. "/LJ-Solutions/"
// on GitHub Pages, or "/" once the site is deployed at a domain root). It always ends
// with "/". Astro rewrites its own bundled asset tags automatically, but any path we
// build by hand — internal nav links, the favicon href, the OG image URL — does not
// get that treatment, so every one of those must go through `withBase`.
const BASE = import.meta.env.BASE_URL;

/** Prepends the configured `base` to a root-relative path (e.g. "/favicon.svg"). */
export function withBase(path: string): string {
  const trimmedBase = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  if (path === '/') return trimmedBase || '/';
  return `${trimmedBase}${path}`;
}

/**
 * Builds a site-relative URL for `path` (e.g. "/", "/projects/foo", "/#contact")
 * in the given language, including the deployment's base path. The default locale
 * ("es") has no locale prefix.
 */
export function localizePath(lang: Locale, path: string): string {
  const hasHash = path.includes('#');
  const [pathname, hash] = hasHash ? path.split(/(?=#)/) : [path, ''];
  const cleanPathname = pathname === '/' ? '' : pathname;
  const localePrefix = lang === DEFAULT_LOCALE ? '' : `/${lang}`;
  const fullPath = `${localePrefix}${cleanPathname}` || '/';

  return `${withBase(fullPath)}${hash}`;
}

/** Given the current pathname, returns the equivalent path with the locale prefix stripped. */
export function stripLocalePrefix(pathname: string, lang: Locale): string {
  if (lang === DEFAULT_LOCALE) return pathname;
  const prefix = `/${lang}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}

/** Strips the deployment's base path off a pathname, if present (no-op when base is "/"). */
export function stripBase(pathname: string): string {
  const trimmedBase = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  if (!trimmedBase) return pathname;
  if (pathname === trimmedBase) return '/';
  if (pathname.startsWith(`${trimmedBase}/`)) return pathname.slice(trimmedBase.length);
  return pathname;
}

/** Strips both the base path and the locale prefix off a full pathname. */
export function toBarePath(pathname: string, lang: Locale): string {
  return stripLocalePrefix(stripBase(pathname), lang);
}
