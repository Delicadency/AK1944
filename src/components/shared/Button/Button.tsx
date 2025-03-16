import type { ComponentProps, ElementType } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "flex size-fit items-center justify-center gap-2 rounded px-8 py-3 font-sourceSans shadow-inner transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30",
  {
    variants: {
      variant: {
        primary:
          "bg-redMain text-backgroundMain hover:bg-[#7A0003] active:bg-redMain contrast:bg-black00 contrast:text-yellow",
        inversion:
          "contrast:bg-yellow contrast:hover:bg-[#DAD01C] contrast:text-black00 bg-backgroundMain text-redMain hover:bg-[#F0EFEB] active:bg-backgroundMain",
        secondary:
          "contrast:bg-yellow contrast:hover:bg-[#DAD01C] contrast:text-black00 bg-greenLight text-black hover:bg-[#BDD2BC] active:bg-greenLight",
      },
      size: {
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  label: string;
  href?: string;
  ariaDescription: string;
  leadingIcon?: ElementType;
  trailingIcon?: ElementType;
}

export const Button = ({
  variant,
  size,
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

  if (href && !disabled) {
    return (
      <Link
        href={href}
        aria-label={ariaDescription}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      aria-label={ariaDescription}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
