import { cn } from "@/utils";
import { ContainerProps } from "@/types";

export const ShowOnTabletAndUp: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: ShowOnTabletAndUp = "div",
}) => {
  return (
    <ShowOnTabletAndUp className={cn("mobile:hidden tablet:block", className)}>
      {children}
    </ShowOnTabletAndUp>
  );
};
