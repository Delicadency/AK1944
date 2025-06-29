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
        ? "border-textDarkGreen bg-greenMain text-white contrast:bg-yellowContrast contrast:text-black00"
        : "border-border text-textDarkGreen hover:border-greenMain",
    )}
  >
    {children}
  </button>
);
