import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals"

export const deAboutMetadata: MetadataProps = {
  title: 'Dashcruise – Über Uns',
  description: 'Lernen Sie unser Team bei Dashcruise kennen',
  keywords: ['webagentur', 'webseiten', 'individuelle webseiten', 'astro', 'dashcruise', 'dashcruise über uns', 'dashcruisedev', 'dashcruisedev über uns'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/de/uber-uns',
    languages: {
      en: '/en/about',
      de: '/de/uber-uns',
      pl: '/pl/o-nas',
      ro: '/ro/despre',
      'x-default': '/en/about'
    },
  },
  openGraph: {
    url: `${SiteURL}/de/uber-uns`,
    title: 'Dashcruise – Über Uns',
    description: 'Lernen Sie unser Team bei Dashcruise kennen',
    image: `${SiteURL}/og-image.png`,
  },
  breadcrumbListItems: [
    {
      position: 1,
      name: "Über uns",
      url: `${SiteURL}/de/uber-uns`
    }
  ]
}
