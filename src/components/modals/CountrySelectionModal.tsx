'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { ArrowDown } from 'lucide-react';
import { navigate } from 'astro:transitions/client';
import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { currencyFromStore } from '@/store/currencyStore';
import Cookies from 'js-cookie'
import { getLocalizedPath } from '@/utils/routeMap';

type Locale = 'en' | 'de' | 'pl' | 'ro';

const getLocaleWithFlag  = (locale:String) => {
  switch(locale){
    case "de":
      return "🇩🇪 de";
    case "ro":
      return "🇷🇴 ro";
    case "pl":
      return "🇵🇱 pl";
    default:
      return "🇺🇸 en";
  }
}

export default function CountrySelectionModal({locale}: {locale:string | undefined}) {


  const [language, setLanguage] = useState(getLocaleWithFlag(locale ?? 'en'));
  const [currency, setCurrency] = useState('usd');
  const [currentLocale, setCurrentLocale] = useState('');


  const [open, setOpen] = useState(false);

  const $currencyFromStore = useStore(currencyFromStore);

  let pathname;

  useEffect(() => {
    if(typeof window ==='undefined')  setLanguage('🇺🇸 en');
    setCurrency(Cookies.get('currency') ?? "usd");
    pathname = window.location.pathname;
    const localeFromPath = pathname?.split("/")[1];
    setCurrentLocale(localeFromPath);
    const localeWithFlag = getLocaleWithFlag(localeFromPath);
    setLanguage(localeWithFlag);
  }, [pathname]);

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
    Cookies.set("currency", value, { path: "/" });
  };

  const handleSave = () => {
    const newLocale = language.split(' ')[1]; // from "🇩🇪 de" → "de"
    // ### IMPORTANT ### Add / Remove new language to currentPathWithoutLocale below
    const currentSlug = window.location.pathname!
    .replace(/^\/(en|de|ro|pl)/, '') // remove locale
    .replace(/^\/+/, '')             // remove leading slash
    .replace(/\/+$/, '');            // ✅ remove trailing slash
  

    console.log("Current Path without locale:", currentSlug);
    console.log("Current locale:", currentLocale);
    console.log("New locale", newLocale);
     const newSlug = getLocalizedPath(currentSlug, currentLocale as Locale, newLocale as Locale)

    console.log("Current Path without locale:", currentSlug);
    console.log("Current locale:", currentLocale);
    console.log("New path without locale", newSlug);

    // Save cookie
    Cookies.set("currency", currency, { path: "/" });
    Cookies.set("locale", newLocale, { path: "/" });
    Cookies.set("localeWithFlag", language)

    currencyFromStore.set('currency')

    setOpen(false);

    let finalPath;

    if(currentSlug === ''){
      console.log("newlocale", newLocale)
      finalPath = `/${newLocale}`;  
    }else{
      if (!newSlug) {
        console.warn(`Fallback: couldn't find translated slug for "${currentSlug}" from "${currentLocale}" to "${newLocale}"`);
      }      
      const safeSlug = (newSlug ?? currentSlug).replace(/^\/+/, '');
      finalPath = `/${newLocale}/${safeSlug}`;
    }

    navigate(finalPath);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" className="text-xl cursor-pointer flex items-center">
          {`${language.toUpperCase()} / ${currency.toUpperCase()}`}{' '}
          <span className="pl-2 pt-0.5">
            <img loading='lazy' src="/arrow_down.svg" className="w-5" />
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="z-900 flex flex-col justify-center items-center">
        {/* Language Selection */}
        <div>
          <p className="text-sm mb-1 font-medium">Language</p>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-999">
              <SelectItem value="🇺🇸 en">🇺🇸 EN</SelectItem>
              <SelectItem value="🇩🇪 de">🇩🇪 DE</SelectItem>
              <SelectItem value="🇷🇴 ro">🇷🇴 RO</SelectItem>
              <SelectItem value="🇵🇱 pl">🇵🇱 PL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Currency Selection */}
        <div>
          <p className="text-sm mb-1 font-medium">Currency</p>
          <Select value={currency} onValueChange={handleCurrencyChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-999">
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
              <SelectItem value="pln">PLN</SelectItem>
              <SelectItem value="ron">RON</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button
          className="bg-carrot-400 py-3 px-10 mt-4 rounded-2xl cursor-pointer"
          onClick={handleSave}
        >
          Save
        </button>
      </PopoverContent>
    </Popover>
  );
}
