import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const enHomeMetadata: MetadataProps = {
  title: 'Dashcruise: Web Agency',
  description: 'Dashcruise: Web Agency Offering Custom Websites',
  keywords: [
    'web agency',
    'websites',
    'custom websites',
    'astro',
    'dashcruise',
    'dashcruisedev',
  ],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      de: '/de',
      pl: '/pl',
      ro: '/ro',
      'x-default': '/en',
    },
  },
  openGraph: {
    url: `${SiteURL}`,
    title: 'DashcruiseDev: Web Agency',
    description:
      'Web development agency offering multilingual, blazing-fast websites tailored to your brand',
    image: `${SiteURL}/og-image.png`,
  },
};
