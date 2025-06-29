import { ActiveLink } from "@/components/shared/ActiveLink";
import { cn } from "@/utils";

interface Props {
  href: string;
  label: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  ariaExpanded?: boolean;
  ariaHaspopup?: boolean | "menu" | "dialog" | "listbox" | "tree" | "grid";
}

export const NavLink = ({
  href,
  label,
  className,
  onClick,
  ariaExpanded,
  ariaHaspopup,
}: Props) => (
  <ActiveLink
    href={href}
    className={cn("text-base text-textLight", className)}
    onClick={onClick}
    aria-label={`Przejdź do strony ${label}`}
    aria-expanded={ariaExpanded}
    aria-haspopup={ariaHaspopup}
  >
    {label}
  </ActiveLink>
);
