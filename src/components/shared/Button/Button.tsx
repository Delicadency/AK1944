import clsx from "clsx";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
import { IconName } from "@/types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "inversion" | "secondary";
  size?: "medium" | "large";
  iconName?: IconName;
  label: string;
  href?: string;
  ariaDescription: string;
  disabled?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  iconName,
  disabled = false,
  label,
  href,
  ariaDescription,
  className,
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      "contrast:bg-black00 contrast:text-yellowContrast bg-redMain text-backgroundMain desktop:hover:bg-[#7A0003] active:bg-redMain",
    inversion:
      "contrast:bg-yellowContrast contrast:desktop:hover:bg-[#DAD01C] contrast:text-black00 bg-backgroundMain text-redMain desktop:hover:bg-[#F0EFEB] active:bg-backgroundMain",
    secondary:
      "contrast:bg-yellowContrast contrast:desktop:hover:bg-[#DAD01C] contrast:text-black00 bg-greenLight text-black desktop:hover:bg-[#BDD2BC] active:bg-greenLight",
  };
  const sizes = {
    medium: "text-16",
    large: "text-lg",
  };

  const commonClassNames = clsx(
    "flex h-fit w-fit items-center justify-center gap-[10px] rounded px-8 py-3 font-sourceSans shadow-inner transition-all",
    variants[variant],
    sizes[size],
    className,
  );

  const renderContent = () => (
    <>
      {iconName && <ButtonIcon name={iconName} className="text-inherit" />}
      {label}
    </>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        aria-label={ariaDescription}
        className={commonClassNames}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      aria-label={ariaDescription}
      disabled={disabled}
      className={clsx(
        commonClassNames,
        disabled && "pointer-events-none cursor-not-allowed opacity-30",
      )}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
