export async function getStripePrices() {
  const res = await fetch(
    'https://api.dashcruisedev.com/stripe/website-plans/get-prices',
    { method: 'POST' }
  );

  if (!res.ok) {
    const responseText = await res.text();
    return {
      data: null,
      error: `There was an error fetching stripe prices: ${responseText}`,
    };
  }

  return await res.json();
}

export async function verifyStripeSession(sessionId?: string) {
  const res = await fetch(
    `https://api.dashcruisedev.com/stripe/verify-session/${sessionId}`,
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

export async function redirectToCheckout(lookupKey: string, language: string, currency: string) {
  const res = await fetch('https://api.dashcruisedev.com/stripe/checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lookupKeyWithoutCurrency: lookupKey,
      language: language,
      currency: currency
    }),
  });

  return await res.json();
}
