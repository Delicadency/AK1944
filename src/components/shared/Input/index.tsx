import type { ComponentProps, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const inputVariants = cva(
  "col-start-1 row-start-1 block w-full rounded-md border-0 bg-white px-3 py-1.5 ring-1 ring-inset outline-none transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-inset sm:text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      color: {
        primary:
          "text-greenMain ring-border placeholder:text-border focus:ring-greenMain",
        error: "text-redMain ring-redError placeholder:text-redError",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  },
);

const iconBaseClasses =
  "col-start-1 row-start-1 self-center size-5 pointer-events-none sm:size-4";

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    leadingIcon?: ElementType;
    trailingIcon?: ElementType;
  };

export const Input = ({
  color,
  className,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  ...rest
}: InputProps) => {
  const iconColorClass = color === "error" ? "text-redError" : "text-border";

  return (
    <div className="grid grid-cols-1">
      <input
        className={cn(inputVariants({ color, className }), {
          "pl-8": LeadingIcon,
          "pr-8": TrailingIcon,
        })}
        {...rest}
      />
      {LeadingIcon && (
        <LeadingIcon
          aria-hidden
          className={cn(iconBaseClasses, iconColorClass, "ml-3")}
        />
      )}
      {TrailingIcon && (
        <TrailingIcon
          aria-hidden
          className={cn(
            iconBaseClasses,
            iconColorClass,
            "mr-3 justify-self-end",
          )}
        />
      )}
    </div>
  );
};
