import { notFound } from "next/navigation";
import { PaymentForm } from "./_components/PaymentForm";
import { StripeElementsWrapper } from "./_components/StripeElementsWrapper";

interface Props {
  searchParams: Promise<{
    clientSecret: string;
  }>;
}

export default async function PaymentPage({ searchParams }: Props) {
  const { clientSecret } = await searchParams;

  if (!clientSecret) notFound();

  return (
    <StripeElementsWrapper clientSecret={clientSecret}>
      <PaymentForm />
    </StripeElementsWrapper>
  );
}
