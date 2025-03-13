import { type ComponentProps, type ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const inputVariants = cva(
  "col-start-1 row-start-1 block w-full bg-white rounded-md border-0 px-3 py-1.5 text-black ring-1 ring-inset transition-colors duration-200 ease-in-out placeholder:text-black/50 focus:ring-2 focus:ring-inset sm:text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-backgroundB disabled:text-black/70",
  {
    variants: {
      color: {
        primary:
          "text-greenMain ring-greenMain30 hover:ring-greenMain10 placeholder:text-greenMain10 focus:ring-greenMain",
        error:
          "text-redError ring-redMain hover:ring-redMain placeholder:text-redMain focus:ring-redMain",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  },
);

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
}: InputProps) => (
  <div className="grid grid-cols-1">
    <input className={cn(inputVariants({ color, className }))} {...rest} />
    {LeadingIcon && (
      <LeadingIcon
        aria-hidden
        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-border sm:size-4"
      />
    )}
    {TrailingIcon && (
      <TrailingIcon
        aria-hidden
        className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-border sm:size-4"
      />
    )}
  </div>
);
