import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const plHomeMetadata: MetadataProps = {
  title: 'Dashcruise: Agencja Webowa',
  description: 'Dashcruise: Agencja tworząca niestandardowe strony internetowe',
  keywords: [
    'agencja webowa',
    'strony internetowe',
    'strony na zamówienie',
    'astro',
    'dashcruise',
    'dashcruisedev',
  ],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/pl/',
    languages: {
      en: '/en/',
      de: '/de/',
      pl: '/pl/',
      ro: '/ro/',
      'x-default': '/en/',
    },
  },
  openGraph: {
    url: `${SiteURL}/pl`,
    title: 'DashcruiseDev: Agencja Webowa',
    description:
      'Agencja tworząca szybkie, wielojęzyczne strony internetowe dopasowane do Twojej marki',
    image: `${SiteURL}/og-image.png`,
  },
};
