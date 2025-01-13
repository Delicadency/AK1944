import { cn } from "@/utils";

export interface HeadingProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4";
  underline?: boolean;
  contrast: "yellow" | "black";
  color: "green" | "white";
  className?: string;
}

export const Heading = ({
  children,
  variant = "h2",
  underline = false,
  contrast,
  color,
  className = "",
}: HeadingProps) => {
  const getHeadingTag = () => {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      default:
        return "h2";
    }
  };

  const HeadingTag = getHeadingTag();

  const variants = {
    h1: "text-[40px]",
    h2: "text-[32px]",
    h3: "text-[28px]",
    h4: "text-[24px]",
  };

  const contrastStyle = {
    yellow: "contrast:text-yellowContrast contrast:border-yellowContrast",
    black: "contrast:text-black contrast:border-black",
  };

  const colors = {
    green: "text-greenMain border-greenMain",
    white: "text-white border-white",
  };

  return (
    <div className="flex flex-col items-center">
      <HeadingTag
        className={cn(
          "font-lora font-bold",
          contrastStyle[contrast],
          variants[variant],
          colors[color],

          className,
        )}
      >
        {children}
      </HeadingTag>
      {underline && (
        <hr
          className={cn(
            "w-[200px] border-t-2 border-solid",
            colors[color],
            contrastStyle[contrast],
          )}
        />
      )}
    </div>
  );
};
