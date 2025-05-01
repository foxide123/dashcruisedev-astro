import type { ArticleData, SlugWithLocale } from "@/types/article_types";

export function generateHreflangsForArticles(slugsWithLocale: SlugWithLocale[]) {
    //eslint-disable-next-line
    const languages: any = {};
    console.log("slugs with locale: ");
  
    slugsWithLocale.forEach((item: SlugWithLocale) => {
      const { slug, locale } = item;
      languages[locale] = `https://api.dashcruisedev.com/${locale}/${slug}`;
    });
  
    return { languages: languages };
  }


export async function fetchArticleBySlug(slug: string): Promise<ArticleData | null> {
    try {
      const response = await fetch(
        `https://api.dashcruisedev.com/articles/${slug}`
      );
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }
      const {data ,error} = (await response.json()) as any;
      if(error) throw new Error(error instanceof Error ? error.message : error);
      return data[0];
    } catch (error) {
      console.error(error);
      throw new Error(`Error while retrieving article ${error instanceof Error ? error.message : error}`)
    }
  }

export async function fetchSlugsWithLocale(postId?: string) {
    try {
      let query = "https://api.dashcruisedev.com/articles/slugs-with-locale";
      if (postId) {
        query = `${query}/${postId}`;
      }
  
      const response = await fetch(query);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }
  
      const {data, error} = (await response.json()) as any;
  
      if (error) {
        console.error(error);
        throw new Error(error instanceof Error ? error.message : error);
      }  

      //eslint-disable-next-line
      const slugsWithLocale = data.map((item: any) => {
        return { slug: item["slug"], locale: item["locale"]["locale"] };
      });
      console.log("Slugs with locale:", slugsWithLocale);
  
      return slugsWithLocale;
    } catch (error) {
      console.error(
        "Error fetching articles:",
        error instanceof Error ? error.message : error
      );
    throw new Error(`Error while retrieving articles ${error instanceof Error ? error.message : error}`)
    }
  }

  export async function fetchSectionDataByTrasnlationId(translationId:string){
    try{
      const response = await fetch(`https://api.dashcruisedev.com/articles/sections/${translationId}`);
      if(!response.ok){
        const errorText = await response.text();
        return {data:null, error:errorText};
      }
  
      return await response.json();

    }catch(error){
      return {data: null, error};
    }
  }