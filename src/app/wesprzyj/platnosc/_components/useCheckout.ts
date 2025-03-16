import { type FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useElements, useStripe } from "@stripe/react-stripe-js";

export const useCheckout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();
  const intentId = searchParams?.get("intentId") ?? "";

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe || !elements) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) return;

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }) => {
        switch (paymentIntent?.status) {
          case "succeeded":
            setMessage(
              "Płatność została zrealizowana pomyślnie. Dziękujemy za Twoje wsparcie!",
            );
            break;
          case "processing":
            setMessage(
              "Trwa przetwarzanie Twojej płatności. Prosimy o chwilę cierpliwości.",
            );
            break;
          case "requires_payment_method":
            setMessage(
              "Płatność nie powiodła się. Prosimy o sprawdzenie danych karty i ponowną próbę.",
            );
            break;
          default:
            setMessage(
              "Wystąpił nieoczekiwany błąd podczas przetwarzania płatności. Prosimy spróbować ponownie.",
            );
            break;
        }
      })
      .catch(console.error);
  }, [elements, stripe]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/wesprzyj/platnosc/sukces?intentId=${intentId}`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(
        error.message ??
          "Wystąpił błąd podczas weryfikacji danych płatności. Prosimy sprawdzić wprowadzone informacje.",
      );
    } else {
      setMessage(
        "Wystąpił nieoczekiwany błąd podczas przetwarzania płatności. Prosimy spróbować ponownie lub skontaktować się z nami.",
      );
    }

    setIsLoading(false);
  };

  return {
    handleSubmit,
    elements,
    isLoading,
    message,
    stripe,
  };
};
