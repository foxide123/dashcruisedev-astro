import type {Props as MetadataProps} from "@/components/seo/Metadata.astro"
import { SiteURL } from "@/globals";

export const plBlogMetadata: MetadataProps = {
  title: 'Dashcruise: Blog o Technologii i Biznesie',
  description:
    'Blog Dashcruise o strategiach biznesowych i nowoczesnych technologiach',
  keywords: ['agencja webowa', 'strony internetowe', 'strony na zamówienie', 'astro'],
  creator: 'Jakub Cezary Kolando',
  publisher: 'Jakub Cezary Kolando',
  metadataBase: new URL(SiteURL),
  alternates: {
    canonical: '/pl/blog',
    languages: {
      en: '/en/blog',
      de: '/de/blog',
      pl: '/pl/blog',
      ro: '/ro/blog',
      'x-default': '/en/blog',
    },
  },
  openGraph: {
    url: `${SiteURL}/pl/blog`,
    title: 'Dashcruise Blog',
    description: 'Blog o tworzeniu stron internetowych i biznesie',
    image: `${SiteURL}/og-image.png`,
  },
};
