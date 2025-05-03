type JsonFiles = 'about.json' | 'blog_page.json' | 'common.json' | 'footer.json' | 'navbar.json' | 'home_page.json' | 'success_page.json';

const jsonFiles: JsonFiles[] = [
  'about.json', 
  'blog_page.json', 
  'common.json', 
  'footer.json', 
  'navbar.json', 
  'home_page.json',
  'success_page.json'
]

export type SupportedLocale = 'en' | 'de' | 'pl' | 'ro';

export const supportedLocaleArray: SupportedLocale[] = ['en', 'de', 'pl', 'ro']

const translationGlobPath = import.meta.glob('/src/data/dictionaries/*/*.json', { eager: true });


function loadTranslation(locale: SupportedLocale, jsonFile: JsonFiles) {
  const key = `/src/data/dictionaries/${locale}/${jsonFile}`;
  const translation = translationGlobPath[key];
  if (!translation) throw new Error(`Translation not found: ${key}`);
  return translation;
}


export const translations: Record<SupportedLocale, Record<JsonFiles, () => Promise<any>>> = 
  Object.fromEntries(
    supportedLocaleArray.map((locale) => [
      locale,
      Object.fromEntries(
        jsonFiles.map((file) => [file, () => loadTranslation(locale, file)])
      ) as Record<JsonFiles, () => Promise<any>>
    ])
  ) as Record<SupportedLocale, Record<JsonFiles, () => Promise<any>>>;
