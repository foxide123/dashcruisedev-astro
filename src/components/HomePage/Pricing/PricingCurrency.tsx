'use client';
import { currencyFromStore } from '@/store/currencyStore';
import { useStore } from '@nanostores/react';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

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

const usdCurrencyConverter = (
  basePrice: number,
  targetCurrency: SupportedCurrency
) => {
  switch (targetCurrency) {
    case 'eur':
      return basePrice * 0.9;
    case 'pln':
      return basePrice * 4.5;
    case 'ron':
      return basePrice * 4.9;
    default:
      return basePrice;
  }
};

function roundNumber(price: number) {
  if (price < 100) {
    return Math.ceil(price / 5) * 5; // Round up to nearest 5
  } else if (price < 500) {
    return Math.ceil(price / 50) * 50; // Round up to nearest 50
  } else {
    return Math.ceil(price / 100) * 100; // Round up to nearest 100
  }
}

function checkIfCurrencySupported(currencyName: string) {
  return ['eur', 'pln', 'ron', 'usd'].includes(currencyName);
}

export default function PricingCurrency({ basePrice }: { basePrice: number }) {
  const [mounted, setMounted] = useState(false);
  const [currency, setCurrency] = useState<SupportedCurrency>('usd');

  useEffect(() => {
    setMounted(true);
    const cookieCurrency = Cookies.get('currency') ?? 'usd';
    setCurrency(cookieCurrency as SupportedCurrency);
  }, []);

  if (!mounted) {
    return <div className="h-[60px] w-[300px] "></div>;
  }

  const isCurrencySupported = checkIfCurrencySupported(currency);
  let priceValue = isCurrencySupported
    ? usdCurrencyConverter(basePrice, currency as SupportedCurrency)
    : basePrice;
  priceValue = roundNumber(priceValue);
  const priceCurrencySymbol = getCurrencySymbol(currency);

  return (
    <div className="h-[60px] w-[300px] flex justify-center items-center">
     <span>
      {priceCurrencySymbol} {priceValue}
    </span>
    <span className="text-2xl space-y-4 font-normal">
         /&thinsp;Month
      </span>
    </div>

    
  );
}
