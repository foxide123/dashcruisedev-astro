export async function verifyStripeSession(sessionId?: string) {
  const res = await fetch(
    `https://api.dashcruisedev.com/stripe/verify-session/${sessionId}`
  );

  if (!res.ok) {
    return {error: "There was an error while verifying stripe session", status: 404};
  }

  return await res.json();
}
