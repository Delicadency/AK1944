"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable");
}

const stripePromise = loadStripe(stripePublishableKey);

interface Props {
  clientSecret: string;
  children: React.ReactNode;
}

export const StripeElementsWrapper = ({ clientSecret, children }: Props) => {
  const options = {
    clientSecret,
    appearance: {
      labels: "above",
      theme: "flat",
      variables: {
        colorText: "#163020",
        colorDanger: "#D31828",
        colorBackground: "#FFFFFF",
        colorPrimary: "#163020",
        colorTextPlaceholder: "#D9D9D9",
        fontFamily: "figtree, sans-serif",
        fontSizeSm: "0.875rem",
        borderRadius: "0.375rem",
        focusOutline: "none",
        focusBoxShadow: "none",
      },
      rules: {
        ".Input": {
          border: "none",
          padding: "0.375rem 0.75rem",
          transition: "color 200ms ease-in-out",
          boxShadow: "inset 0 0 0 1px #D9D9D9",
        },
        ".Input:focus": {
          boxShadow: "inset 0 0 0 2px #163020",
        },
        ".Input--invalid": {
          color: "#D31828",
          boxShadow: "inset 0 0 0 1px #D31828",
        },
        ".Input--invalid:focus": {
          boxShadow: "inset 0 0 0 2px #D31828",
        },
        ".Label": {
          color: "#163020",
          fontSize: "0.875rem",
          lineHeight: "1.5rem",
          fontWeight: "500",
        },
        ".Error": {
          color: "#D31828",
          fontSize: "0.875rem",
          lineHeight: "1.5rem",
          marginTop: "0.25rem",
        },
        ".Tab": {
          backgroundColor: "#D9D9D9",
        },
      },
    },
  } satisfies StripeElementsOptions;

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};
