import { type ComponentProps } from "react";
import { cn } from "@/utils";

export const ErrorMessage = ({
  children,
  className,
  ...props
}: ComponentProps<"p">) => (
  <p
    role="alert"
    className={cn("text-center text-sm font-medium text-redError", className)}
    {...props}
  >
    {children}
  </p>
);
