import { FormField } from "@/components/shared/FormField";
import { AmountButton } from "./AmountButton";
import { PREDEFINED_AMOUNTS, type PredefinedAmount } from "./types";

interface Props {
  amount: number;
  customAmount: boolean;
  onPredefinedAmountClick: (value: PredefinedAmount) => void;
  onCustomAmountClick: () => void;
  onCustomAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  issues?: string[];
}

export const AmountSelector = ({
  amount,
  customAmount,
  onPredefinedAmountClick,
  onCustomAmountClick,
  onCustomAmountChange,
  issues,
}: Props) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold text-greenMain">Twoje wsparcie</h2>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {PREDEFINED_AMOUNTS.map((value) => (
        <AmountButton
          key={value}
          isSelected={amount === value && !customAmount}
          onClick={() => onPredefinedAmountClick(value)}
        >
          {value} zł
        </AmountButton>
      ))}
      <AmountButton isSelected={customAmount} onClick={onCustomAmountClick}>
        Inna kwota
      </AmountButton>
    </div>
    {customAmount && (
      <FormField
        placeholder="Wpisz kwotę"
        type="number"
        inputMode="numeric"
        min="2"
        required
        onChange={onCustomAmountChange}
        issues={issues}
      />
    )}
  </div>
);
