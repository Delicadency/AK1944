import { PropsWithChildren } from "react";
import { cn } from "@/utils/index";

interface InfoListProps {
  className?: string;
}

export const InfoList = ({
  children,
  className,
}: PropsWithChildren<InfoListProps>) => (
  <ul className={cn("space-y-10", className)}>{children}</ul>
);
