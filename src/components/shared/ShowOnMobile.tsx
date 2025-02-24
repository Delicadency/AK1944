import { cn } from "@/utils";
import { ContainerProps } from "@/types";

export const ShowOnMobile: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: ShowOnMobile = "div",
}) => {
  return (
    <ShowOnMobile className={cn("tablet:hidden", className)}>
      {children}
    </ShowOnMobile>
  );
};
