import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const enBlogMetadata: MetadataProps = {
  title: 'Dashcruise: Technology and Business Blog',
  description:
    'Dashcruise blog about business strategies and modern technologies',
  keywords: ['web agency', 'websites', 'custom websites', 'astro'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/en/blog',
    languages: {
      en: '/en/blog',
      de: '/de/blog',
      pl: '/pl/blog',
      ro: '/ro/blog',
      'x-default': '/en/blog',
    },
  },
  openGraph: {
    url: `${SiteURL}/blog`,
    title: 'Dashcruise Blog',
    description: 'Blog about web and business development',
    image: `${SiteURL}/og-image.png`,
  },
};
