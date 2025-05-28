import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const roHomeMetadata: MetadataProps = {
  title: 'Dashcruise: Agenție Web',
  description: 'Dashcruise: Agenție web care oferă site-uri personalizate',
  keywords: [
    'agenție web',
    'site-uri web',
    'site-uri personalizate',
    'astro',
    'dashcruise',
    'dashcruisedev',
  ],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/ro/',
    languages: {
      en: '/en/',
      de: '/de/',
      pl: '/pl/',
      ro: '/ro/',
      'x-default': '/en/',
    },
  },
  openGraph: {
    url: `${SiteURL}/ro`,
    title: 'DashcruiseDev: Agenție Web',
    description:
      'Agenție de dezvoltare web care oferă site-uri rapide, multilingve și personalizate pentru brandul tău',
    image: `${SiteURL}/og-image.png`,
  },
};
