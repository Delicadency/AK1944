"use client";

import { useActionState, useState } from "react";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { AmountSelector } from "./AmountSelector";
import { DonorDetails } from "./DonorDetails";
import { SubmitButton } from "./SubmitButton";
import { donateAction } from "./donateAction";
import { PREDEFINED_AMOUNTS, type PredefinedAmount } from "./types";

export const DonateForm = () => {
  const [customAmount, setCustomAmount] = useState(false);
  const [amount, setAmount] = useState<number>(PREDEFINED_AMOUNTS[0]);
  const [state, formAction, isPending] = useActionState(
    donateAction.bind(null, amount),
    {
      status: "idle",
    },
  );

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(",", ".");
    const numValue = parseFloat(value);
    setAmount(isNaN(numValue) ? 0 : numValue);
  };

  const handlePredefinedAmountClick = (value: PredefinedAmount) => {
    setAmount(value);
    setCustomAmount(false);
  };

  const handleCustomAmountClick = () => {
    setCustomAmount(true);
    setAmount(0);
  };

  const isError = state.status === "error";
  const isAmountValid = amount > 0;

  return (
    <form action={formAction} className="space-y-6">
      <AmountSelector
        amount={amount}
        customAmount={customAmount}
        onPredefinedAmountClick={handlePredefinedAmountClick}
        onCustomAmountClick={handleCustomAmountClick}
        onCustomAmountChange={handleCustomAmountChange}
        issues={isError ? state.issues?.amount : undefined}
      />

      <DonorDetails issues={isError ? state.issues : undefined} />

      {isError && state.message && <ErrorMessage>{state.message}</ErrorMessage>}

      <SubmitButton isAmountValid={isAmountValid} isPending={isPending} />
    </form>
  );
};
