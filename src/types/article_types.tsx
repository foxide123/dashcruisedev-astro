export type SlugWithLocale = {
    slug: string;
    locale: string;
  };
  
  export type ArticleData = {
    id: "string";
    post_id: "string";
    locale: number;
    title: "string";
    slug: "string";
    body: "string";
    introduction: "string";
  };
  
  export type SectionData = {
    section_slug: string;
    section_title: string;
    order: number;
    PostTranslation: any;
  }