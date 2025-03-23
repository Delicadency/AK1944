import { PropsWithChildren } from "react";

interface InfoListProps {
  className?: string;
}

export const InfoList = ({
  children,
  className,
}: PropsWithChildren<InfoListProps>) => (
  <div className={`space-y-10 ${className ?? ""}`}>{children}</div>
);
