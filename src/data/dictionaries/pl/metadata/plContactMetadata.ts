import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const plContactMetadata: MetadataProps = {
  title: 'Dashcruise: Skontaktuj się z nami',
  description: 'Agencja internetowa oferująca niestandardowe strony internetowe',
  keywords: ['agencja internetowa', 'strony internetowe', 'strony na zamówienie', 'dashcruise', 'kontakt dashcruise', 'dashcruisedev', 'kontakt dashcruisedev'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/pl/kontakt',
    languages: {
      en: '/en/contact',
      de: '/de/kontakt',
      pl: '/pl/kontakt',
      ro: '/ro/contact',
      'x-default': '/en/contact'
    },
  },
  openGraph: {
    url: `${SiteURL}/pl/kontakt`,
    title: 'Dashcruise: Skontaktuj się z nami',
    description: 'Agencja internetowa oferująca niestandardowe strony internetowe',
    image: `${SiteURL}/og-image.png`,
  },
  breadcrumbListItems: [
    {
      position: 1,
      name: "Skontaktuj się z nami",
      url: `${SiteURL}/pl/kontakt`
    }
  ]
};
