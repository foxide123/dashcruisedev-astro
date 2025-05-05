import type { TranslationData, SlugWithLocale } from '@/types/article_types';
const isProd = import.meta.env.PROD;

const PUBLIC_API = isProd
  ? 'https://api.dashcruisedev.com'
  : 'https://api.dashcruisedev.com';

export function generateHreflangsForArticles(
  articleId: string,
  slugsWithLocale: SlugWithLocale[]
) {
  //eslint-disable-next-line
  const languages: any = {};
  console.log('slugs with locale: ');

  console.log("Provided Article Id:", articleId);
  slugsWithLocale.forEach((item: SlugWithLocale) => {
    const { article_id, slug, locale } = item;
    console.log("Item Article_id:", article_id);
    if(article_id === articleId) languages[locale] = `https://dashcruisedev.com/${locale}/${slug}`;
  });

  return { languages: languages };
}

export async function fetchArticleBySlug(
  slug: string
): Promise<TranslationData | null> {
  try {
    const response = await fetch(`${PUBLIC_API}/articles/${slug}`);
    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }
    const { data, error } = (await response.json()) as any;
    if (error) throw new Error(error instanceof Error ? error.message : error);
    return data[0];
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error while retrieving article ${error instanceof Error ? error.message : error}`
    );
  }
}

export async function fetchSlugsWithLocale(articleId?: string) {
  try {
    let query = `${PUBLIC_API}/articles/slugs-with-locale`;
    if (articleId) {
      query = `${query}/${articleId}`;
    }

    const response = await fetch(query);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const { data, error } = (await response.json()) as any;

    if (error) {
      console.error(error);
      throw new Error(error instanceof Error ? error.message : error);
    }

    //eslint-disable-next-line
    const slugsWithLocale = data.map((item: any) => {
      return {
        translation_id: item['id'],
        article_id: item['article_id'],
        slug: item['slug'],
        locale: item['locale']['locale'],
      };
    });
    console.log('Slugs with locale:', slugsWithLocale);

    return slugsWithLocale;
  } catch (error) {
    console.error(
      'Error fetching articles:',
      error instanceof Error ? error.message : error
    );
    throw new Error(
      `Error while retrieving articles ${error instanceof Error ? error.message : error}`
    );
  }
}

export async function fetchSectionDataByTrasnlationId(translationId: string) {
  try {
    const response = await fetch(
      `${PUBLIC_API}/articles/sections/${translationId}`
    );
    if (!response.ok) {
      const errorText = await response.text();
      return { data: null, error: errorText };
    }

    return await response.json();
  } catch (error) {
    return { data: null, error };
  }
}
