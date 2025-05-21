import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const roBlogMetadata: MetadataProps = {
  title: 'Dashcruise: Blog despre Tehnologie și Afaceri',
  description:
    'Blogul Dashcruise despre strategii de afaceri și tehnologii moderne',
  keywords: ['agenție web', 'site-uri web', 'site-uri personalizate', 'astro'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/ro/blog',
    languages: {
      en: '/en/blog',
      de: '/de/blog',
      pl: '/pl/blog',
      ro: '/ro/blog',
      'x-default': '/en/blog',
    },
  },
  openGraph: {
    url: `${SiteURL}/ro/blog`,
    title: 'Dashcruise Blog',
    description: 'Blog despre dezvoltare web și afaceri',
    image: `${SiteURL}/og-image.png`,
  },
};
