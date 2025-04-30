"use client";

import { redirectToCheckout } from "@/actions/stripeActions";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

type CheckoutApiResponse = {
    sessionId: string;
}


export default function SubscribeButton({
  customAmount,
  text,
  processingText = "Processing...",
  language,
  planName,
  lookupKey
}: {
  customAmount: string;
  text: string;
  processingText?: string;
  language: string;
  planName: string;
  lookupKey: string;
}) {
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState('usd');
  let pathname;

  console.log("Lookup key in subscribe button:", lookupKey);

  useEffect(() => {
    const currencyFromCookies = Cookies.get("currency");
    setCurrency(currencyFromCookies ?? "usd");
    pathname = window.location.pathname;
    setLoading(false); // Reset on mount
  }, []);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const {data, error} = (await redirectToCheckout(lookupKey, language, currency)) as any;

      if(error) {
        setLoading(false);
        console.error(error);
        return;}
      if (!data.sessionId) {
        console.error("Error creating session:", data || error);
        setLoading(false);
        return;
      }

      const { loadStripe } = await import("@stripe/stripe-js/pure");
      const stripePromise = loadStripe(
        import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY_PROD as string
      );

      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId: data.sessionId });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="flex justify-center items-center bg-carrot-500 rounded-xl py-6 px-4 text-center text-white text-2xl w-full cursor-pointer"
      >
        {loading ? processingText : text}
      </button>
    </div>
  );
}
