import type { ComponentProps, ElementType } from "react";
import Link from "next/link";
import { cn } from "@/utils";

const buttonVariants = {
  primary:
    "bg-redMain text-backgroundMain hover:bg-[#7A0003] active:bg-redMain contrast:bg-black00 contrast:text-yellow",
  inversion:
    "contrast:bg-yellow contrast:hover:bg-[#DAD01C] contrast:text-black00 bg-backgroundMain text-redMain hover:bg-[#F0EFEB] active:bg-backgroundMain",
  secondary:
    "contrast:bg-yellow contrast:hover:bg-[#DAD01C] contrast:text-black00 bg-greenLight text-black hover:bg-[#BDD2BC] active:bg-greenLight",
} as const;

const buttonSizes = {
  medium: "text-base",
  large: "text-lg",
} as const;

const commonButtonStyles =
  "flex size-fit items-center justify-center gap-2 rounded px-8 py-3 font-sourceSans shadow-inner transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  label: string;
  href?: string;
  ariaDescription: string;
  leadingIcon?: ElementType;
  trailingIcon?: ElementType;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  label,
  href,
  ariaDescription,
  className,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  ...props
}: ButtonProps) => {
  const renderContent = () => (
    <>
      {LeadingIcon && (
        <LeadingIcon aria-hidden className="size-4 text-inherit" />
      )}
      {label}
      {TrailingIcon && (
        <TrailingIcon aria-hidden className="size-4 text-inherit" />
      )}
    </>
  );

  const buttonClasses = cn(
    commonButtonStyles,
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );

  if (href && !disabled) {
    return (
      <Link href={href} aria-label={ariaDescription} className={buttonClasses}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      aria-label={ariaDescription}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
