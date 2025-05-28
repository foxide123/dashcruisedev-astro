import { defineMiddleware } from "astro:middleware";
import { redirectToDefaultLocale } from "astro:i18n"; // function available with `manual` routing

const locales = ['en', 'de', 'pl', 'ro']
const defaultLocale = 'en'



export const onRequest = defineMiddleware(async (ctx, next) => {
  console.log("middleware loaded")
    const {pathname} = ctx.url;

    const userAgent = ctx.request.headers.get('user-agent') || '';
  const isBot = /facebookexternalhit|Facebot|Twitterbot|Slackbot|WhatsApp/i.test(userAgent);

  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

  if(!hasLocale && !isBot){
    const newPath = `/${defaultLocale}${pathname}`;
    const url = new URL(newPath, ctx.url);
    return ctx.redirect(url, 301);
  }
   return next()
})