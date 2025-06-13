"use client";

import { type ReactNode } from "react";
import { Elements } from "@stripe/react-stripe-js";
import {
  loadStripe,
  type Stripe,
  type StripeElementsOptions,
} from "@stripe/stripe-js";

const COLORS = {
  primary: "#163020",
  danger: "#D31828",
  background: "#FFFFFF",
  placeholder: "#D9D9D9",
} as const;

const TYPOGRAPHY = {
  fontFamily: "figtree, sans-serif",
  fontSizeSm: "0.875rem",
} as const;

const STRIPE_APPEARANCE: StripeElementsOptions["appearance"] = {
  labels: "above",
  theme: "flat",
  variables: {
    colorText: COLORS.primary,
    colorDanger: COLORS.danger,
    colorBackground: COLORS.background,
    colorPrimary: COLORS.primary,
    colorTextPlaceholder: COLORS.placeholder,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSizeSm: TYPOGRAPHY.fontSizeSm,
    borderRadius: "0.375rem",
    focusOutline: "none",
    focusBoxShadow: "none",
  },
  rules: {
    ".Input": {
      border: "none",
      padding: "0.375rem 0.75rem",
      transition: "color 200ms ease-in-out",
      boxShadow: `inset 0 0 0 1px ${COLORS.placeholder}`,
    },
    ".Input:focus": {
      boxShadow: `inset 0 0 0 2px ${COLORS.primary}`,
    },
    ".Input--invalid": {
      color: COLORS.danger,
      boxShadow: `inset 0 0 0 1px ${COLORS.danger}`,
    },
    ".Input--invalid:focus": {
      boxShadow: `inset 0 0 0 2px ${COLORS.danger}`,
    },
    ".Label": {
      color: COLORS.primary,
      fontSize: TYPOGRAPHY.fontSizeSm,
      lineHeight: "1.5rem",
      fontWeight: "500",
    },
    ".Error": {
      color: COLORS.danger,
      fontSize: TYPOGRAPHY.fontSizeSm,
      lineHeight: "1.5rem",
      marginTop: "0.25rem",
    },
    ".Tab": {
      backgroundColor: COLORS.placeholder,
    },
  },
};

let stripePromise: Promise<Stripe | null>;
const getStripePromise = () => {
  const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  if (!STRIPE_PUBLISHABLE_KEY) {
    throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable");
  }

  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

interface Props {
  clientSecret: string;
  children: ReactNode;
}

export const StripeElementsWrapper = ({ clientSecret, children }: Props) => (
  <Elements
    stripe={getStripePromise()}
    options={{ clientSecret, appearance: STRIPE_APPEARANCE }}
  >
    {children}
  </Elements>
);
