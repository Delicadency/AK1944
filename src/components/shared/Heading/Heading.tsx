import clsx from "clsx";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4";
  underline?: boolean;
  contrast: "yellow" | "black";
  color: "green" | "white" | "greenB";
  className?: string;
  align?: "start" | "center";
}

export const Heading = ({
  children,
  variant = "h2",
  underline = false,
  contrast,
  color,
  className = "",
  ...rest
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
    h1: "text-40",
    h2: "text-32",
    h3: "text-28",
    h4: "text-24",
  };

  const contrastStyle = {
    yellow: "contrast:text-yellowContrast contrast:border-yellowContrast",
    black: "contrast:text-black contrast:border-black",
  };

  const colors = {
    green: "text-greenMain border-greenMain",
    white: "text-white border-white",
    greenB: "text-greenB",
  };

  return (
    <hgroup
      className={clsx(
        "flex flex-col",
        underline ? "items-center" : "items-start",
      )}
      {...rest}
    >
      <HeadingTag
        className={clsx(
          contrastStyle[contrast],
          variants[variant],
          colors[color],
          "font-lora font-bold",
          className,
        )}
      >
        {children}
      </HeadingTag>
      {underline && (
        <hr
          aria-hidden="true"
          className={clsx(
            "mt-2 w-[200px] border-t-2 border-solid",
            colors[color],
            contrastStyle[contrast],
          )}
        />
      )}
    </hgroup>
  );
};
