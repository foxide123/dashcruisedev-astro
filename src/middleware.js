import { defineMiddleware } from "astro:middleware";
import { redirectToDefaultLocale } from "astro:i18n"; // function available with `manual` routing

const locales = ['en', 'de', 'pl', 'ro']
const defaultLocale = 'en'



export const onRequest = defineMiddleware(async (ctx, next) => {
  const isBot = /(bot|crawl|spider|slurp|bing|duckduckgo|baiduspider|yandex)/i.test(
    ctx.request.headers.get('user-agent') || ''
  );
  console.log("middleware loaded")
    const {pathname} = ctx.url;

  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

  if(!hasLocale && !isBot){
    const newPath = `/${defaultLocale}${pathname}`;
    const url = new URL(newPath, ctx.url);
    /* return Response.redirect(url, 302); */
    return ctx.redirect(url, 301);
  }
   return next()
})