import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const enAboutMetadata: MetadataProps = {
    title: 'Dashcruise - About Us',
    description: 'Meet Our Team at Dashcruise',
    keywords: ['web agency', 'websites', 'custom websites', 'astro', 'dashcruise', 'dashcruise about', 'dashcruisedev', 'dashcruisedev about'],
    creator: 'Jakub Cezary Kolando',
    publisher: 'Jakub Cezary Kolando',
    metadataBase: new URL(SiteURL),
    alternates: {
      canonical: '/en/about',
      languages: {
        en: '/en/about',
        de: '/de/uber-uns',
        pl: "/pl/o-nas",
        ro: "/ro/despre",
        "x-default": "/en/about"
      },
    },
    openGraph: {
      url: `${SiteURL}/en/about`,
      title: "Dashcruise - About Us",
      description: "Meet Our Team at Dashcruise",
      image: `${SiteURL}/og-image.png`,
    }
}