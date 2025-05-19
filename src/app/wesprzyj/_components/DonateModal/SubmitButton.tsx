import { Button } from "@/components/shared/Button/Button";
import { LoaderIcon } from "@/icons/LoaderIcon";

interface Props {
  isAmountValid: boolean;
  isPending: boolean;
}

export const SubmitButton = ({ isAmountValid, isPending }: Props) => (
  <Button
    type="submit"
    size="large"
    label="Wpłać teraz"
    ariaDescription="Przejdź do płatności"
    className="mx-auto"
    disabled={!isAmountValid || isPending}
    title={
      !isAmountValid ? "Wprowadź kwotę, aby przejść do płatności" : undefined
    }
    leadingIcon={
      isPending ? () => <LoaderIcon className="animate-spin" /> : undefined
    }
  />
);
