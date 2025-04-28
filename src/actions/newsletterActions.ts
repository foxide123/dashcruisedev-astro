import type { NewsletterSignupApiResponse } from '@/types/api_types';

export async function newsletterSignup({
  email,
  locale,
  invalidEmailText
}: {
  email: string;
  locale: string;
  invalidEmailText: string;
}) {
  const { z } = await import('zod');

  const schema = z.object({
    email: z.string({
      invalid_type_error: 'Invalid Email',
    }),
  });

  const validated = schema.safeParse({ email });
  if (!validated.success) {
    return { success: false, error: `${invalidEmailText}` };
  }
  try {
    const response = await fetch('api.dashcruisedev.com/newsletter/signup');
    return (await response.json()) as NewsletterSignupApiResponse;
  } catch (err) {
    return { error: err };
  }
}
