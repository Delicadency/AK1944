import { redirect } from "next/navigation";
import Container from "@/components/shared/Container";
import { stripe } from "@/utils/stripe";
import { PaymentError } from "./_components/PaymentError";
import { PaymentSuccess } from "./_components/PaymentSuccess";

interface Props {
  searchParams: Promise<{
    intentId: string;
  }>;
}

export default async function SuccessPage({ searchParams }: Props) {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }

  const paymentIntent = await stripe.paymentIntents.retrieve(
    (await searchParams).intentId,
  );

  if (!paymentIntent) {
    redirect("/wesprzyj");
  }

  return (
    <Container
      as="section"
      className="flex min-h-[50vh] items-center justify-center py-16"
    >
      {paymentIntent.status === "succeeded" ? (
        <PaymentSuccess
          signature={paymentIntent.metadata.signature}
          amount={paymentIntent.amount / 100}
        />
      ) : (
        <PaymentError />
      )}
    </Container>
  );
}
