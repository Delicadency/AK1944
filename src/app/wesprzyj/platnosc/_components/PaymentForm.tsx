"use client";

import { PaymentElement } from "@stripe/react-stripe-js";
import { Button } from "@/components/shared/Button/Button";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { LoaderIcon } from "@/icons/LoaderIcon";
import { useCheckout } from "./useCheckout";

export const PaymentForm = () => {
  const { handleSubmit, isLoading, message, stripe, elements } = useCheckout();

  return (
    <section className="mx-auto max-w-lg py-16">
      <h1 className="sr-only">Wesprzyj nas</h1>

      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center space-y-6"
      >
        <PaymentElement id="payment-element" className="p-4" />

        <Button
          type="submit"
          disabled={!stripe || isLoading || !elements}
          size="large"
          label="Zapłać"
          ariaDescription="Zapłać"
          leadingIcon={
            isLoading
              ? () => <LoaderIcon className="animate-spin" />
              : undefined
          }
          className="mx-auto"
        />

        {message && <ErrorMessage>{message}</ErrorMessage>}
      </form>
    </section>
  );
};
