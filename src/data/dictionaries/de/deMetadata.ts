import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"

export const deAboutMetadata: MetadataProps = {
    title: 'DashcruiseDev - Contact Us',
    description: 'DashcruiseDev - Contact Us',
    keywords: ['web agency', 'websites', 'custom websites', 'astro', 'dashcruisedev', 'dashcruisedev about'],
    creator: 'Jakub Cezary Kolando',
    publisher: 'Jakub Cezary Kolando',
    metadataBase: new URL('https://dashcruisedev.com/en/contact'),
    alternates: {
      canonical: '/en/contact',
      languages: {
        en: '/en/contact',
        de: '/de/contact',
        pl: "/pl/contact",
        ro: "/ro/contact"
      },
    },
    openGraph: {
      url: "https://dashcruisedev.com",
      title: "Web Agency",
      description: "Web Agency Offering Custom Websites",
      image: 'https://dashcruisedev.com/og-image.png',
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

export const deContactMetadata: MetadataProps = {
    title: 'DashcruiseDev - Contact Us',
    description: 'DashcruiseDev - Contact Us',
    keywords: ['web agency', 'websites', 'custom websites', 'astro', 'dashcruisedev', 'dashcruisedev about'],
    creator: 'Jakub Cezary Kolando',
    publisher: 'Jakub Cezary Kolando',
    metadataBase: new URL('https://dashcruisedev.com/en/contact'),
    alternates: {
      canonical: '/en/contact',
      languages: {
        en: '/en/contact',
        de: '/de/contact',
        pl: "/pl/contact",
        ro: "/ro/contact"
      },
    },
    openGraph: {
      url: "https://dashcruisedev.com",
      title: "Web Agency",
      description: "Web Agency Offering Custom Websites",
      image: 'https://dashcruisedev.com/og-image.png',
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