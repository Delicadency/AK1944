import { ContainerProps } from "@/types";
import { cn } from "@/utils";

const Container: React.FC<ContainerProps> = ({
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
