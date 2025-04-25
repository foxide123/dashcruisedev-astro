import { map } from 'nanostores';

export interface LocaleCurrencyValue {
    locale: String;
    currency: 'usd' | 'eur' | 'pln' | 'leu'
} 

export const localeCurrency = map<LocaleCurrencyValue>({
    locale: 'en',
    currency: 'usd'
});