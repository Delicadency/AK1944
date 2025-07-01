import { Button } from "@/components/shared/Button/Button";
import { IconCheckSquare } from "@/icons/IconCheckSquare";
import { formatPrice } from "@/utils";

interface Props {
  signature: string;
  amount: number;
}

export const PaymentSuccess = ({ signature, amount }: Props) => (
  <div className="flex flex-col items-center gap-6 px-4 text-center tablet:px-6">
    <IconCheckSquare className="size-16 text-textDarkGreen" />
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">
        {signature}, dziękujemy za wsparcie!
      </h1>
      <p className="text-lg text-grayDate">
        Twoja wpłata w wysokości {formatPrice(amount / 100)} została
        zrealizowana pomyślnie.
      </p>
      <p className="text-grayDate">
        Dzięki Twojemu wsparciu możemy kontynuować naszą misję upamiętniania
        historii Armii Krajowej.
      </p>
    </div>
    <Button
      href="/"
      label="Wróć do strony głównej"
      ariaDescription="Przejdź do strony głównej"
    />
  </div>
);
