import { ElementType, ReactNode } from "react";
import { cn } from "@/utils";

interface Props {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const Container: React.FC<Props> = ({
  children,
  className = "",
  as: Container = "div",
}) => {
  return (
    <Container
      className={cn(
        "mx-auto w-full max-w-[767px] px-4 tablet:max-w-[1279px] desktop:max-w-[1440px] desktop:px-6",
        className,
      )}
    >
      {children}
    </Container>
  );
};

export default Container;
