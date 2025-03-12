import { cn } from "@/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const SupportCard = ({ children, className }: Props) => (
  <aside
    className={cn(
      "mx-auto flex w-full max-w-[500px] flex-col items-center justify-center rounded-md bg-backgroundB py-4 text-base shadow-sm desktop:py-7 desktop:text-lg",
      className,
    )}
  >
    {children}
  </aside>
);
