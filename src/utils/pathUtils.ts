import { translations, type SupportedLocale } from "./translationUtils";

export async function getPathTranslations(locale: string){
    const supportedLocale = locale as SupportedLocale;

    const navbarData = await translations[supportedLocale]['navbar.json']();
    const navbarItems = navbarData['navbarItems'];
    return navbarItems.map((item:any) => (item.name.toLowerCase()))
}