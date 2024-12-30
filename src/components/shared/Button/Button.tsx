import clsx from "clsx";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
import { IconName } from "@/types";

export interface ButtonProps {
  variant: "primary" | "inversion" | "secondary";
  size: "medium" | "large";
  icon: boolean;
  iconName?: IconName;
  label: string;
  href: string;
  ariaDescription: string;
  disabled?: boolean;
}

export const Button = ({
  variant,
  label,
  size,
  href,
  icon,
  iconName,
  ariaDescription,
  disabled = false,
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
  return (
    <Link
      href={disabled ? "#" : href}
      aria-label={ariaDescription}
      className={clsx(
        "focus:outline-violet flex h-fit w-fit items-center justify-center gap-[10px] rounded px-8 py-3 font-sourceSans shadow-inner transition-all focus:outline-2",
        disabled && "pointer-events-none cursor-not-allowed opacity-50",
        variants[variant],
        sizes[size],
      )}
      aria-disabled={disabled}
    >
      {icon && iconName && (
        <ButtonIcon name={iconName} className="text-inherit" />
      )}
      {label}
    </Link>
  );
};
