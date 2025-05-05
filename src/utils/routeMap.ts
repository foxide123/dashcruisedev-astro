import { deAboutMetadata, deContactMetadata } from '@/data/dictionaries/de/deMetadata';
import { enAboutMetadata, enContactMetadata } from '@/data/dictionaries/en/enMetadata';
import About from '@/pages/_shared/about.astro';
import Contact from '@/pages/_shared/contact.astro';

type SlugKey = 'about' | 'contact';

const localizedSlugMap: Record<SlugKey, Record<'en' | 'de' | 'pl' | 'ro', string>> = {
  about: {
    en: 'about',
    de: 'uber-uns',
    pl: 'o-nas',
    ro: 'despre',
  },
  contact: {
    en: 'contact',
    de: 'kontakt',
    pl: 'kontakt',
    ro: 'contact',
  },
};

export function getLocalizedPath(currentSlug: string, fromLocale: string, toLocale: string): string | null {
  for (const key of Object.keys(localizedSlugMap) as SlugKey[]) {
    if (localizedSlugMap[key][fromLocale as keyof typeof localizedSlugMap[SlugKey]] === currentSlug) {
      return `/${localizedSlugMap[key][toLocale as keyof typeof localizedSlugMap[SlugKey]]}`;
    }
  }
  return null;
}


export const routeComponentMap = {
  'en': {
    about: {
      component: About,
      metadata: enAboutMetadata
    },
    contact: {
      component: Contact,
      metadata: enContactMetadata
    }
  },
  'de': {
    'uber-uns': {
      component: About,
      metadata: deAboutMetadata
    },
    kontakt: {
      component: Contact,
      metadata: deContactMetadata
    },
  },
  'ro': {
    'despre': {
      component: About,
      metadata: enAboutMetadata
    },
    contact: {
      component: Contact,
      metadata: enContactMetadata
    },
  },
  'pl': {
    'o-nas': {
      component: About,
      metadata: enAboutMetadata
    },
    kontakt: {
      component: Contact,
      metadata: enContactMetadata
    },
  },
};
