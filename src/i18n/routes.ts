// Every page of the site, with its slug in each language. Navigation, the footer,
// breadcrumbs and the language switcher all resolve URLs through here, so a slug is
// only ever written once.
import { localizePath, type Locale } from './config';

export const ROUTES = {
  home: { es: '/', en: '/' },
  webDev: { es: '/servicios/desarrollo-web/', en: '/services/web-development/' },
  aiAgents: { es: '/servicios/agentes-ia/', en: '/services/ai-agents/' },
  management: { es: '/servicios/sistemas-gestion/', en: '/services/management-systems/' },
  about: { es: '/nosotros/', en: '/about/' },
  contact: { es: '/contacto/', en: '/contact/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

export const SERVICE_ROUTES = ['webDev', 'aiAgents', 'management'] as const satisfies readonly RouteKey[];

/** Full URL (base path + locale prefix) for a page, optionally with a #hash. */
export function routePath(lang: Locale, key: RouteKey, hash = ''): string {
  return localizePath(lang, ROUTES[key][lang] + hash);
}

const normalize = (p: string) => (p.endsWith('/') ? p : `${p}/`);

/** Which page a bare (base- and locale-stripped) pathname belongs to. */
export function routeKeyFor(barePath: string, lang: Locale): RouteKey | undefined {
  const path = normalize(barePath);
  return (Object.keys(ROUTES) as RouteKey[]).find((key) => normalize(ROUTES[key][lang]) === path);
}
