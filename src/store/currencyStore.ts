import { atom, map } from 'nanostores'

export const currencyFromStore = atom('usd')

export interface LocaleCurrencyValue {
    locale: String;
    currency: 'usd' | 'eur' | 'pln' | 'leu'
} 

export const localeCurrency = map<LocaleCurrencyValue>({
    locale: 'en',
    currency: 'usd'
});