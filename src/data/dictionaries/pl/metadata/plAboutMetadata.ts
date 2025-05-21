import type { Props as MetadataProps } from "@/components/seo/Metadata.astro";
import { SiteURL } from "@/globals";

export const plAboutMetadata: MetadataProps = {
  title: 'Dashcruise – O Nas',
  description: 'Poznaj nasz zespół w Dashcruise',
  keywords: ['agencja webowa', 'strony internetowe', 'strony na zamówienie', 'dashcruise', 'dashcruise o nas', 'dashcruisedev', 'dashcruisedev o nas'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/pl/o-nas',
    languages: {
      en: '/en/about',
      de: '/de/uber-uns',
      pl: '/pl/o-nas',
      ro: '/ro/despre',
      'x-default': '/en/about'
    },
  },
  openGraph: {
    url: `${SiteURL}/pl/o-nas`,
    title: 'Dashcruise – O Nas',
    description: 'Poznaj nasz zespół w Dashcruise',
    image: `${SiteURL}/og-image.png`,
  }
}
