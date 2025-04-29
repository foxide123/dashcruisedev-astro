export type StripeProductSimplified = {
  id: string;
  name: string;
};

export type StripeRecurringSimplified = {
  interval: string;
  interval_count: number;
  trialPeriodDays: number;
};

export type StripePriceSimplified = {
  id: string;
  lookupKey: string;
  currency: string;
  product: StripeProductSimplified;
  recurring: StripeRecurringSimplified;
  unitAmount: number /* in cents */;
  type: 'recurring' | 'on_time';
};

//STRIPE CUSTOMER DETAILS

export type StripeCustomerDetails = {
  address?: StripeCustomerAddress;
  email?: string;
  name?: string;
  phone?: string;
  tax_exempt?: any;
  tax_ids?: any;
};

export type StripeCustomerAddress = {
  city?: string;
  country?: string;
  line1?: any;
  line2?: any;
  postal_code?: any;
  state?: any;
};

// STRIPE SESSION

export type StripeSessionResponse = {
  email?: string;
  subscriptionId: string;
  paymentStatus: 'paid' | 'unpaid' | 'no_payment_required';
  mode: string;
  plan: string;
  customerDetails: StripeCustomerDetails;
  customerId: any;
};