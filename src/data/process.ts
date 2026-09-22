import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/ui';

export function getProcessSteps(lang: Locale) {
  const t = useTranslations(lang);
  return t.howWeWork.steps.map((step, i) => ({
    number: String(i + 1).padStart(2, '0'),
    title: step.title,
    description: step.description,
  }));
}
