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
    disabled={!isAmountValid || isPending}
    title={
      !isAmountValid ? "Wprowadź kwotę, aby przejść do płatności" : undefined
    }
  >
    {isPending && <LoaderIcon className="animate-spin" />}
    {isPending ? "Przetwarzanie..." : "Wpłać teraz"}
  </Button>
);
