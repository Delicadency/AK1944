import { type ComponentProps } from "react";
import { cn } from "@/utils";

const labelVariants = {
  primary: "text-greenMain",
  error: "text-redError",
} as const;

const labelVisibility = {
  shown: "block text-sm/6 font-medium",
  hidden: "sr-only",
} as const;

export type LabelProps = ComponentProps<"label"> & {
  color?: keyof typeof labelVariants;
  visibility?: keyof typeof labelVisibility;
};

export const Label = ({
  color = "primary",
  visibility = "shown",
  className,
  htmlFor,
  ...rest
}: LabelProps) => (
  <label
    id={htmlFor ? `${htmlFor}-label` : undefined}
    htmlFor={htmlFor}
    className={cn(labelVariants[color], labelVisibility[visibility], className)}
    {...rest}
  />
);
