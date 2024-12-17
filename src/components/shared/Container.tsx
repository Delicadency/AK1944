import { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Container = "div",
}) => {
  return (
    <Container
      className={`mx-auto w-full max-w-[767px] px-4 tablet:max-w-[1279px] desktop:max-w-[1440px] desktop:px-6 ${className}`}
    >
      {children}
    </Container>
  );
};

export default Container;
