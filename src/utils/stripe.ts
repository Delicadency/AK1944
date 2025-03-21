import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey || stripeSecretKey.trim() === "") {
  throw new Error("Stripe secret key is not set");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
  appInfo: {
    name: "AK1944",
    version: "0.1.0",
  },
});
