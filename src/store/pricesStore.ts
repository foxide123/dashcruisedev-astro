import { getStripePrices } from '@/actions/stripeActions'
import type { StripePriceSimplified } from '@/types/stripe_types';
import { atom } from 'nanostores'

export const pricesStore = atom<StripePriceSimplified[] | null>(null)

export async function loadPrices(){
    if(pricesStore.get()) return 

    const {data, error} = await getStripePrices() as any;

    if(error) return {data: null, error: error};

    console.log("Data from prices store:", data);

    const transformedStripeData = data.data.map((item:any) => ({
        id: item.id,
        lookupKey: item.lookup_key,
        currency: item.currency,
        product: {
            id: item.product.id
        },
        recurring: {
            interval: item.recurring.interval,
            interval_count: item.recurring.interval_count,
            trialPeriodDays: item.recurring.trial_period_days
        },
        unitAmount: item.unit_amount,
        type: item.type

    } as StripePriceSimplified));

    pricesStore.set(transformedStripeData);

    console.log("Transformed Stripe Data:", transformedStripeData);
}