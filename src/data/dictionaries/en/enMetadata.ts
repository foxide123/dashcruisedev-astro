import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const enAboutMetadata: MetadataProps = {
    title: 'Dashcruise - About Us',
    description: 'Meet Our Team at DashcruiseDev',
    keywords: ['web agency', 'websites', 'custom websites', 'astro', 'dashcruisedev', 'dashcruisedev about'],
    creator: 'Jakub Cezary Kolando',
    publisher: 'Jakub Cezary Kolando',
    metadataBase: new URL(SiteURL),
    alternates: {
      canonical: 'about',
      languages: {
        en: '/en/about',
        de: '/de/uber-uns',
        pl: "/pl/o-nas",
        ro: "/ro/despre"
      },
    },
    openGraph: {
      url: `${SiteURL}`,
      title: "Web Agency",
      description: "Web Agency Offering Custom Websites",
      image: `${SiteURL}/og-image.png`,
    },
    imagesToPreload: {
      remoteImages: [
        {
          href: "https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/7528164d-c2ec-4d98-84a0-17a4a96e5500/hd1920x1080",
          alt: "Background Image",
          media: "(min-width: 640px)"
        },
        {
          href: "https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/7528164d-c2ec-4d98-84a0-17a4a96e5500/mobile640x480",
          alt: "Background Image ",
          media: "(max-width: 639px)"
        }
      ]
    }
}

export const enContactMetadata: MetadataProps = {
    title: 'Dashcruise - Contact Us',
    description: 'Web Agency Offering Custom Websites',
    keywords: ['web agency', 'websites', 'custom websites', 'dashcruise', 'dashcruise contact'],
    creator: 'Jakub Cezary Kolando',
    publisher: 'Jakub Cezary Kolando',
    metadataBase: new URL(SiteURL),
    alternates: {
      canonical: '/contact',
      languages: {
        en: '/en/contact',
        de: '/de/kontakt',
        pl: "/pl/kontakt",
        ro: "/ro/contact",
        'x-default': '/en/contact'
      },
    },
    openGraph: {
      url: `${SiteURL}`,
      title: "Web Agency",
      description: "Web Agency Offering Custom Websites",
      image: `${SiteURL}/og-image.png`,
    },
    imagesToPreload: {
      remoteImages: [
        {
          href: "https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/7528164d-c2ec-4d98-84a0-17a4a96e5500/hd1920x1080",
          alt: "Background Image",
          media: "(min-width: 640px)"
        },
        {
          href: "https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/7528164d-c2ec-4d98-84a0-17a4a96e5500/mobile640x480",
          alt: "Background Image ",
          media: "(max-width: 639px)"
        }
      ]
    }
  };