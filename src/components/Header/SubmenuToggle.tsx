import { cn } from "@/utils";
import { IconChevronDown } from "@/icons/IconChevronDown";

interface Props {
  label: string;
  isOpen: boolean;
  onClick: () => void;
  controlsId?: string;
  className?: string;
}

export const SubmenuToggle = ({
  label,
  isOpen,
  onClick,
  controlsId,
  className = "",
}: Props) => (
  <button
    className={cn(
      "flex items-center gap-2 transition duration-300 ease-in-out hover:text-yellowVintage",
      className,
    )}
    onClick={onClick}
    aria-expanded={isOpen}
    aria-controls={controlsId}
    aria-label={`Rozwiń menu ${label}`}
    aria-haspopup="menu"
  >
    <span>{label}</span>
    <IconChevronDown
      className={cn(
        "transition-transform duration-300 ease-in-out",
        isOpen ? "rotate-180" : "rotate-0",
      )}
      aria-hidden="true"
    />
  </button>
);
