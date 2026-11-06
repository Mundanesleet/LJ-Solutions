// sitemap.xml generated at build time from the route table, with hreflang
// alternates so search engines pair each Spanish page with its English version.
import type { APIRoute } from 'astro';
import { LOCALES } from '../i18n/config';
import { ROUTES, routePath, type RouteKey } from '../i18n/routes';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('http://localhost:4321');
  const abs = (path: string) => new URL(path, origin).toString();
  const keys = Object.keys(ROUTES) as RouteKey[];

  const urls = keys.flatMap((key) =>
    LOCALES.map((lang) => {
      const alternates = LOCALES.map(
        (alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${abs(routePath(alt, key))}"/>`
      ).join('\n');
      return [
        '  <url>',
        `    <loc>${abs(routePath(lang, key))}</loc>`,
        alternates,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(routePath('es', key))}"/>`,
        '  </url>',
      ].join('\n');
    })
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
