import { ReactNode } from "react";

interface InfoItemProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

export const InfoItem = ({ icon, label, children }: InfoItemProps) => (
  <li className="flex items-center gap-3 desktop:mb-8 desktop:gap-8">
    <div className="h-8 w-8 flex-shrink-0">{icon}</div>
    <div>
      <p className="desktop:mb-4">{label}</p>
      <div className="font-medium">{children}</div>
    </div>
  </li>
);
