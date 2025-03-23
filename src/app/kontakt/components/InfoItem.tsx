import { ReactNode } from "react";

interface InfoItemProps {
  icon: ReactNode;
  label: string;
  content: ReactNode;
}

export const InfoItem = ({ icon, label, content }: InfoItemProps) => (
  <div className="flex items-center gap-3 desktop:mb-8 desktop:gap-8">
    <div className="h-8 w-8 flex-shrink-0">{icon}</div>
    <div>
      <p className="desktop:mb-4">{label}</p>
      <div className="font-medium">{content}</div>
    </div>
  </div>
);
