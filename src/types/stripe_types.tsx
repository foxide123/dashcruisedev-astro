export type StripeProductSimplified = {
    id: string;
    name: string;
}

export type StripeRecurringSimplified = {
    interval: string;
    interval_count: number;
    trialPeriodDays: number;
}

export type StripePriceSimplified = {
    id: string;
    lookupKey: string;
    currency: string;
    product: StripeProductSimplified;
    recurring: StripeRecurringSimplified;
    unitAmount: number; /* in cents */
    type: 'recurring' | 'on_time'
}
