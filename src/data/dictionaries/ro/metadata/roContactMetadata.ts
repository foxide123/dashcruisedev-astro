import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const roContactMetadata: MetadataProps = {
  title: 'Dashcruise: Contactează-ne',
  description: 'Agenție web care oferă site-uri personalizate',
  keywords: ['agenție web', 'site-uri web', 'site-uri personalizate', 'dashcruise', 'contact dashcruise', 'dashcruisedev', 'contact dashcruisedev'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/ro/contact',
    languages: {
      en: '/en/contact',
      de: '/de/kontakt',
      pl: '/pl/kontakt',
      ro: '/ro/contact',
      'x-default': '/en/contact'
    },
  },
  openGraph: {
    url: `${SiteURL}/ro/contact`,
    title: 'Dashcruise: Contactează-ne',
    description: 'Agenție web care oferă site-uri personalizate',
    image: `${SiteURL}/og-image.png`,
  }
};

