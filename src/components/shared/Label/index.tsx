import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const labelVariants = cva("", {
  variants: {
    color: {
      primary: "text-greenMain",
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

export type LabelProps = ComponentProps<"label"> &
  VariantProps<typeof labelVariants>;

export const Label = ({
  color,
  visibility,
  className,
  htmlFor,
  ...rest
}: LabelProps) => (
  <label
    id={htmlFor ? `${htmlFor}-label` : undefined}
    htmlFor={htmlFor}
    className={cn(labelVariants({ color, visibility, className }))}
    {...rest}
  />
);
