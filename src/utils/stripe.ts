import Stripe from "stripe";

const STRIPE_CONFIG = {
  apiVersion: "2025-02-24.acacia" as const,
  typescript: true,
  appInfo: {
    name: "AK1944",
    version: "0.1.0",
  },
} as const;

export const initializeStripe = (secretKey: string | undefined): Stripe => {
  if (!secretKey?.trim()) {
    throw new Error("Stripe secret key is not set");
  }

  return new Stripe(secretKey, {
    ...STRIPE_CONFIG,
  });
};

export const stripe = initializeStripe(process.env.STRIPE_SECRET_KEY);
