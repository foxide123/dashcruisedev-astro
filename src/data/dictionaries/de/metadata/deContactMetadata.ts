import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";
export const deContactMetadata: MetadataProps = {
  title: 'Dashcruise: Kontaktieren Sie uns',
  description: 'Webagentur für maßgeschneiderte Webseiten',
  keywords: ['webagentur', 'webseiten', 'maßgeschneiderte webseiten', 'dashcruise', 'dashcruise kontakt', 'dashcruisedev', 'dashcruisedev kontakt'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/de/kontakt',
    languages: {
      en: '/en/contact',
      de: '/de/kontakt',
      pl: '/pl/kontakt',
      ro: '/ro/contact',
      'x-default': '/en/contact'
    },
  },
  openGraph: {
    url: `${SiteURL}/de/kontakt`,
    title: 'Dashcruise: Kontaktieren Sie uns',
    description: 'Webagentur für maßgeschneiderte Webseiten',
    image: `${SiteURL}/og-image.png`,
  }
};
