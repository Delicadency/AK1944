import { cn } from "@/utils";

interface Props {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const AmountButton = ({ isSelected, onClick, children }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "rounded-lg border-2 px-4 py-2 transition-colors",
      isSelected
        ? "border-greenMain bg-greenMain text-white"
        : "border-border text-greenMain hover:border-greenMain",
    )}
  >
    {children}
  </button>
);
