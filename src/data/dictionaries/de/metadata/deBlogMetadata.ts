import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const deBlogMetadata: MetadataProps = {
  title: 'Dashcruise: Technologie- und Business-Blog',
  description:
    'Dashcruise-Blog über Geschäftsstrategien und moderne Technologien',
  keywords: ['webagentur', 'webseiten', 'maßgeschneiderte webseiten', 'astro'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/de/blog',
    languages: {
      en: '/en/blog',
      de: '/de/blog',
      pl: '/pl/blog',
      ro: '/ro/blog',
      'x-default': '/en/blog',
    },
  },
  openGraph: {
    url: `${SiteURL}/de/blog`,
    title: 'Dashcruise Blog',
    description: 'Blog über Webentwicklung und Geschäftsstrategien',
    image: `${SiteURL}/og-image.png`,
  },
};
