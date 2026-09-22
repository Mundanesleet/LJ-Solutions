// Add a new project by adding a slug to SLUGS + STRUCTURE here, plus its
// text under `projectsData.<slug>` for both languages in src/i18n/ui.ts.
// Each slug automatically gets a page at /projects/[slug] (and /en/projects/[slug]).
import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/ui';

export type ProjectMockup = 'dashboard' | 'inventory';
type StatusKey = 'inDevelopment' | 'comingSoon';

const SLUGS = ['restaurant-management', 'inventory-management'] as const;
export type ProjectSlug = (typeof SLUGS)[number];
export const PROJECT_SLUGS: readonly string[] = SLUGS;

const STRUCTURE: Record<ProjectSlug, { mockup: ProjectMockup; statusKey: StatusKey }> = {
  'restaurant-management': { mockup: 'dashboard', statusKey: 'inDevelopment' },
  'inventory-management': { mockup: 'inventory', statusKey: 'comingSoon' },
};

export function getProjects(lang: Locale) {
  const t = useTranslations(lang);
  return SLUGS.map((slug) => ({
    slug,
    ...STRUCTURE[slug],
    status: t.status[STRUCTURE[slug].statusKey],
    ...t.projectsData[slug],
  }));
}

export function getProjectBySlug(lang: Locale, slug: string) {
  return getProjects(lang).find((p) => p.slug === slug);
}

export type Project = ReturnType<typeof getProjects>[number];
