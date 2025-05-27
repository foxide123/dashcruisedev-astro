import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const enContactMetadata: MetadataProps = {
    title: 'Dashcruise: Contact Us',
    description: 'Web Agency Offering Custom Websites',
    keywords: ['web agency', 'websites', 'custom websites', 'dashcruise', 'dashcruise contact', 'dashcruisedev', 'dashcruisedev contact'],
    creator: 'Jakub Cezary Kolando',
    publisher: 'Jakub Cezary Kolando',
    metadataBase: new URL(SiteURL),
    alternates: {
      canonical: '/en/contact',
      languages: {
        en: '/en/contact',
        de: '/de/kontakt',
        pl: "/pl/kontakt",
        ro: "/ro/contact",
        'x-default': '/en/contact'
      },
    },
    openGraph: {
      url: `${SiteURL}/en/contact`,
      title: "Dashcruise - Contact Us",
      description: "Web Agency Offering Custom Websites",
      image: `${SiteURL}/og-image.png`,
    },
    breadcrumbListItems: [
      {
        position: 1,
        name: "Contact Us",
        url: `${SiteURL}/en/contact`
      }
    ]
  };