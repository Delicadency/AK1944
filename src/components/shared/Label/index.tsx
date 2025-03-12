import { type ComponentPropsWithRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const labelVariants = cva("", {
  variants: {
    color: {
      primary: "text-black",
      error: "text-redError",
    },
    visibility: {
      shown: "block text-sm/6 font-medium",
      hidden: "sr-only",
    },
  },
  defaultVariants: {
    color: "primary",
    visibility: "shown",
  },
});

export type LabelProps = ComponentPropsWithRef<"label"> &
  VariantProps<typeof labelVariants>;

export const Label = ({
  color,
  visibility,
  className,
  ...rest
}: LabelProps) => (
  <label
    className={cn(labelVariants({ color, visibility, className }))}
    {...rest}
  />
);
