import type { StripePriceSimplified } from '@/types/stripe_types';

export async function getStripePrices() {
  const res = await fetch(
    'https://api.dashcruise.com/stripe/website-plans/get-prices',
    { method: 'POST' }
  );

  if (!res.ok) {
    const responseText = await res.text();
    return {
      data: null,
      error: `There was an error fetching stripe prices: ${responseText}`,
    };
  }

  const { data, error } = (await res.json()) as any;

  if (error) return { data: null, error: error };

  const transformedStripeData = data.map(
    (item: any) =>
      ({
        id: item.id,
        lookupKey: item.lookup_key,
        currency: item.currency,
        product: {
          id: item.product.id,
        },
        recurring: {
          interval: item.recurring.interval,
          interval_count: item.recurring.interval_count,
          trialPeriodDays: item.recurring.trial_period_days,
        },
        unitAmount: item.unit_amount,
        type: item.type,
      }) as StripePriceSimplified
  );

  return { data: transformedStripeData, error: null };
}

export async function verifyStripeSession(sessionId?: string) {
  const res = await fetch(
    `https://api.dashcruise.com/stripe/verify-session/${sessionId}`,
    { method: 'POST' }
  );

  if (!res.ok) {
    const responseText = await res.text();
    return {
      data: null,
      error: `There was an error while verifying stripe session ${responseText}`,
      status: 404,
    };
  }

  console.log('res:', res);
  return await res.json();
}

export async function redirectToCheckout(
  lookupKey: string,
  language: string,
  currency: string
) {
  try{const res = await fetch(
    'https://api.dashcruise.com/stripe/checkout-session',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lookupKeyWithoutCurrency: lookupKey,
        language: language,
        currency: currency,
      }),
    }
  );

  if(!res.ok) {
    console.error("Failed to create checkout session:", res.status);
    console.error("Failed res body:",res.body);
    return;
  }

  const json:any = await res.json();
  return { data: json.data, error: json.error }}
  catch(error){
    console.error("Redirect to Checkout error:", error);
    return { data: null, error}
  }
}
