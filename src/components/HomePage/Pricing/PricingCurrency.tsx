'use client';
import { currencyFromStore } from '@/store/currencyStore';
import Cookies from 'js-cookie';
import { useEffect, useMemo, useState } from 'react';
import { useStore } from '@nanostores/react';
import { pricesStore, loadPrices } from '@/store/pricesStore';
import type { StripePriceSimplified } from '@/types/stripe_types';

type SupportedCurrency = 'eur' | 'pln' | 'ron' | 'usd';

const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case 'eur':
      return '€';
    case 'pln':
      return 'zł';
    case 'ron':
      return 'RON';
    default:
      return '$';
  }
};

const getPriceData = (pricesArray: StripePriceSimplified[],lookupKey: string) => pricesArray?.find(
  (price: StripePriceSimplified) =>
    price.lookupKey === lookupKey);

export default function PricingCurrency({ prices, lookupKey }: { prices:StripePriceSimplified[], lookupKey: string }) {
  const [mounted, setMounted] = useState(false);
  const [currency, setCurrency] = useState<SupportedCurrency>('usd');
  const [priceData, setPriceData] = useState<any>(null);

  useEffect(() => {
    const selectedCurrency = (Cookies.get('currency') ?? 'usd') as SupportedCurrency;
    const price = getPriceData(prices, `${lookupKey}_${selectedCurrency}`);
    console.log("PRICES:", prices);
    console.log("LOOKUP KEY:", `${lookupKey}_${currency}`);
    console.log("PRICE DATA:", price);
    setPriceData(price);
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[60px] w-[300px] "></div>;
  }

  return (
    <div className="h-[60px] w-[300px] flex justify-center items-center">
      {
        priceData ? (
          <>
          <span>
            {getCurrencySymbol(priceData?.currency ?? 'usd')}{' '}
            {priceData?.unitAmount / 100}
          </span>
          <span className="text-2xl space-y-4 font-normal">
            &thinsp;/&thinsp;Month
          </span>
        </>
        ) : <span></span>
      }
    </div>
  );
}
