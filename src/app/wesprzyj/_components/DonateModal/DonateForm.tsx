"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/shared/Button/Button";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { FormField } from "@/components/shared/FormField";
import { LoaderIcon } from "@/icons/LoaderIcon";
import { cn } from "@/utils";
import { donateAction } from "./donateAction";

const PREDEFINED_AMOUNTS = [500, 200, 100, 50, 20] as const;

export const DonateForm = () => {
  const [customAmount, setCustomAmount] = useState(false);
  const [amount, setAmount] = useState<number>(PREDEFINED_AMOUNTS[0]);
  const [state, formAction, isPending] = useActionState(
    donateAction.bind(null, amount),
    {
      status: "idle",
    },
  );

  const isError = state.status === "error";

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <h2 className="mb-4 text-xl font-bold text-greenMain">
          Twoje wsparcie
        </h2>
        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {PREDEFINED_AMOUNTS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setAmount(value);
                setCustomAmount(false);
              }}
              className={cn(
                "rounded-lg border-2 px-4 py-2 transition-colors",
                amount === value
                  ? "border-greenMain bg-greenMain text-white"
                  : "border-border text-greenMain hover:border-greenMain",
              )}
            >
              {value} zł
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setCustomAmount(true);
              setAmount(0);
            }}
            className={cn(
              "rounded-lg border-2 px-4 py-2 transition-colors",
              customAmount
                ? "border-greenMain bg-greenMain text-white"
                : "border-border text-greenMain hover:border-greenMain",
            )}
          >
            Inna kwota
          </button>
        </div>
        {customAmount && (
          <FormField
            placeholder="Wpisz kwotę"
            type="text"
            inputMode="decimal"
            min="2"
            required
            onChange={(e) => {
              const value = e.target.value.replace(",", ".");
              const numValue = parseFloat(value);
              if (!isNaN(numValue)) {
                setAmount(numValue);
              } else {
                setAmount(0);
              }
            }}
            issues={isError ? state.issues?.amount : undefined}
          />
        )}
        {isError && state.issues?.amount && (
          <ErrorMessage>{state.issues.amount[0]}</ErrorMessage>
        )}
      </div>

      <fieldset className="space-y-4">
        <FormField
          id="signature"
          name="signature"
          placeholder="Twój podpis"
          required
          autoComplete="name"
          issues={isError ? state.issues?.signature : undefined}
        />
        <FormField
          id="email"
          name="email"
          type="email"
          placeholder="Twój email"
          required
          autoComplete="email"
          issues={isError ? state.issues?.email : undefined}
        />
      </fieldset>

      {isError && state.message && <ErrorMessage>{state.message}</ErrorMessage>}

      <Button
        type="submit"
        size="large"
        label="Wpłać teraz"
        ariaDescription="Przejdź do płatności"
        className="mx-auto"
        disabled={amount <= 0 || isPending}
        title={
          amount <= 0 ? "Wprowadź kwotę, aby przejść do płatności" : undefined
        }
        leadingIcon={
          isPending ? () => <LoaderIcon className="animate-spin" /> : undefined
        }
      />
    </form>
  );
};
