import type { Props as MetadataProps } from "@/components/seo/Metadata.astro";
import { SiteURL } from "@/globals";

export const roAboutMetadata: MetadataProps = {
  title: 'Dashcruise – Despre Noi',
  description: 'Cunoaște echipa noastră de la Dashcruise',
  keywords: ['agenție web', 'site-uri web', 'site-uri personalizate', 'astro', 'dashcruise', 'dashcruise despre noi', 'dashcruisedev', 'dashcruisedev despre noi'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/ro/despre',
    languages: {
      en: '/en/about',
      de: '/de/uber-uns',
      pl: '/pl/o-nas',
      ro: '/ro/despre',
      'x-default': '/en/about'
    },
  },
  openGraph: {
    url: `${SiteURL}/ro/despre`,
    title: 'Dashcruise – Despre Noi',
    description: 'Cunoaște echipa noastră de la Dashcruise',
    image: `${SiteURL}/og-image.png`,
  }
}
