import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const deHomeMetadata: MetadataProps = {
  title: 'Dashcruise: Webagentur',
  description: 'Dashcruise: Webagentur für maßgeschneiderte Webseiten',
  keywords: [
    'webagentur',
    'webseiten',
    'maßgeschneiderte webseiten',
    'astro',
    'dashcruise',
    'dashcruisedev',
  ],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/de/', // canonical URL of the root page
    languages: {
      en: '/en/',
      de: '/de/',
      pl: '/pl/',
      ro: '/ro/',
      'x-default': '/en/', // default fallback to /en 
    },
  },
  openGraph: {
    url: `${SiteURL}/de`,
    title: 'DashcruiseDev: Webagentur',
    description:
      'Webentwicklungsagentur für mehrsprachige, blitzschnelle Websites, maßgeschneidert für Ihre Marke',
    image: `${SiteURL}/og-image.png`,
  },
};
