// robots.txt pointing crawlers at the sitemap.
// Note: while the site lives at mundanesleet.github.io/LJ-Solutions/, crawlers only
// read robots.txt from the domain root, so this file takes effect once the site
// moves to its own domain. Until then, submit the sitemap in Google Search Console.
import type { APIRoute } from 'astro';
import { withBase } from '../i18n/config';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(withBase('/sitemap.xml'), site ?? 'http://localhost:4321').toString();
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
