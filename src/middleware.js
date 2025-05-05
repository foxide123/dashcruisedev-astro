import { defineMiddleware } from "astro:middleware";
import { redirectToDefaultLocale } from "astro:i18n"; // function available with `manual` routing

const locales = ['en', 'de', 'pl', 'ro']
const defaultLocale = 'en'



export const onRequest = defineMiddleware(async (ctx, next) => {
  console.log("middleware loaded")
    const {pathname} = ctx.url;

  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

  if(!hasLocale){
    const newPath = `/${defaultLocale}${pathname}`;
    const url = new URL(newPath, ctx.url);
    /* return Response.redirect(url, 302); */
    return ctx.redirect(url);
  }
   return next()
})