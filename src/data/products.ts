// Add a new product by adding a key to PRODUCT_KEYS + STRUCTURE here, plus
// its text under `products.<key>` for both languages in src/i18n/ui.ts.
import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/ui';

export type ProductMockup = 'dashboard' | 'inventory' | 'build';

const PRODUCT_KEYS = ['restaurant', 'inventory', 'custom'] as const;
type ProductKey = (typeof PRODUCT_KEYS)[number];

const STRUCTURE: Record<ProductKey, { number: string; mockup: ProductMockup; href: string }> = {
  restaurant: { number: '01', mockup: 'dashboard', href: '/projects/restaurant-management' },
  inventory: { number: '02', mockup: 'inventory', href: '/projects/inventory-management' },
  custom: { number: '03', mockup: 'build', href: '#contact' },
};

export function getProducts(lang: Locale) {
  const t = useTranslations(lang);
  return PRODUCT_KEYS.map((key) => ({
    key,
    ...STRUCTURE[key],
    ...t.products[key],
  }));
}
