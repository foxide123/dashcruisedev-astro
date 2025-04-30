import { getStripePrices } from '@/actions/stripeActions'
import type { StripePriceSimplified } from '@/types/stripe_types';
import { atom } from 'nanostores'

export const pricesStore = atom<StripePriceSimplified[] | null>(null)

export async function loadPrices(){
    if(pricesStore.get()) return 

    const {data, error} = await getStripePrices() as any;
    
    pricesStore.set(data);

    console.log("Transformed Stripe Data:", data);
}