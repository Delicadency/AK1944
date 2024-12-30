import cn from "classnames";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
import { IconName } from "@/types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "inversion" | "secondary";
  size: "medium" | "large";
  icon: boolean;
  iconName?: IconName;
  label: string;
  href?: string;
  ariaDescription: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  variant = "primary",
  size = "medium",
  icon = false,
  iconName,
  disabled = false,
  label,
  href,
  ariaDescription,
  type = "button",
}: ButtonProps) => {
  const variants = {
    primary:
      "contrast:bg-black00 contrast:text-yellow bg-redMain text-backgroundMain desktop:hover:bg-[#7A0003] active:bg-redMain",
    inversion:
      "constrast:bg-yellow constrast:desktop:hover:bg-[#DAD01C] contrast:text-black00 bg-backgroundMain text-redMain desktop:hover:bg-[#F0EFEB] active:bg-backgroundMain",
    secondary:
      "constrast:bg-yellow constrast:desktop:hover:bg-[#DAD01C] contrast:text-black00 bg-greenLight text-black desktop:hover:bg-[#BDD2BC] active:bg-greenLight",
  };
  const sizes = {
    medium: "text-16",
    large: "text-lg",
  };

  const commonClassNames = cn(
    "focus:outline-violet flex h-fit w-fit items-center justify-center gap-[10px] rounded px-8 py-3 font-sourceSans shadow-inner transition-all focus:outline-2",
    variants[variant],
    sizes[size],
  );

  const renderContent = () => (
    <>
      {icon && iconName && (
        <ButtonIcon name={iconName} className="text-inherit" />
      )}
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
      type={type}
      aria-label={ariaDescription}
      disabled={disabled}
      className={cn(
        commonClassNames,
        disabled && "pointer-events-none cursor-not-allowed opacity-50",
      )}
    >
      {renderContent()}
    </button>
  );
};
