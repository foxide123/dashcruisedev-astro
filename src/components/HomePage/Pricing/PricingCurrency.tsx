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

export default function PricingCurrency({
  basePrice,
  lookupKey,
}: {
  basePrice: number;
  lookupKey: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [currency, setCurrency] = useState<SupportedCurrency>('usd');

  // store where we save all of the prices from stripe
  const $pricesStore = useStore(pricesStore);
  console.log('Prices store:', $pricesStore);

  useEffect(() => {
    setMounted(true);
    setCurrency((Cookies.get('currency') ?? 'usd') as SupportedCurrency);
    // call loadPrices function from store to retrieve prices data
    loadPrices();
  }, []);

  const transformedLookupKey = `${lookupKey}_${currency}`;
  console.log('Transformed Lookup Key:', transformedLookupKey);

  const priceData: StripePriceSimplified | undefined = useMemo(() => {
    if (!$pricesStore || !Array.isArray($pricesStore)) return undefined;
    return $pricesStore.find((item) => item.lookupKey === transformedLookupKey);
  }, [$pricesStore, transformedLookupKey]);

  console.log('Price Data:', priceData);

  if (!mounted) {
    return <div className="h-[60px] w-[300px] "></div>;
  }

  return (
    <div className="h-[60px] w-[300px] flex justify-center items-center">
      {priceData ? (
        <>
          <span>
            {getCurrencySymbol(priceData?.currency ?? 'usd')}{' '}
            {priceData?.unitAmount / 100}
          </span>
          <span className="text-2xl space-y-4 font-normal">
            &thinsp;/&thinsp;Month
          </span>
        </>
      ) : (
        <span></span>
      )}
    </div>
  );
}
