import clsx from "clsx";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
import { IconName } from "@/types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "inversion" | "secondary" | "primaryBlue" | "lightGreen";
  size?: "medium" | "large";
  iconName?: IconName;
  label: string;
  href?: string;
  ariaDescription: string;
  disabled?: boolean;
  align?: "start" | "center";
}

export const Button = ({
  variant = "primary",
  size = "medium",
  iconName,
  disabled = false,
  align = "center",
  label,
  href,
  ariaDescription,
  className,
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary: `
      contrast:bg-black00 contrast:text-yellowContrast contrast:hover:bg-[#1A1A1A]
      bg-redMain text-backgroundMain
      desktop:hover:bg-[#7A0003] desktop:hover:text-white
      active:bg-redMain
    `,
    inversion: `
      contrast:bg-yellowContrast contrast:desktop:hover:bg-[#DAD01C]
      contrast:text-black00
      bg-backgroundMain text-redMain
      desktop:hover:bg-[#F0EFEB] desktop:hover:text-[#A60000]
      active:bg-backgroundMain
    `,
    secondary: `
      contrast:bg-yellowContrast contrast:desktop:hover:bg-[#DAD01C]
      contrast:text-black00
      bg-greenLight text-black
      desktop:hover:bg-[#BDD2BC] desktop:hover:text-[#333]
      active:bg-greenLight
    `,
    primaryBlue: `
      contrast:bg-blue contrast:text-black00 contrast:hover:bg-[#0066CC]
      bg-redMain text-backgroundMain
      desktop:hover:bg-[#7A0003] desktop:hover:text-white
      active:bg-redMain
    `,
    lightGreen:  `
    bg-lightGreen
    text-greenMain`
  };

  const sizeStyles = {
    medium: "text-16",
    large: "text-lg",
  };

  const alignStyles = {
    start: "justify-start text-start",
    center: "justify-center text-center",
  };

  const commonClassNames = clsx(
    "flex h-fit items-center gap-[16px] rounded px-8 py-3 font-sourceSans shadow-inner transition-all duration-200 ease-in-out active:scale-95",
    iconName ? "w-full tablet:w-fit" : "w-fit",
    variantStyles[variant],
    sizeStyles[size],
    alignStyles[align],
    className,
  );

  const renderContent = () => (
    <>
      {iconName && (
        <ButtonIcon name={iconName} className="shrink-0 text-inherit" />
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
