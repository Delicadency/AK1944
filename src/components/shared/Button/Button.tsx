import clsx from "clsx";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
import { IconName } from "@/types";

export interface ButtonProps {
  variant: "primary" | "inversion" | "secondary";
  size: "medium" | "large";
  icon: boolean;
  iconName: IconName;
  label: string;
  href: string;
}

export const Button = ({
  variant,
  label,
  size,
  href,
  icon,
  iconName,
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-redMain text-backgroundMain hover:bg-[#7A0003] active:bg-[#520103]",
    inversion:
      "bg-backgroundMain text-redMain hover:bg-backgroundB active:bg-[#e8e3da]",
    secondary: "bg-greenLight text-black hover:bg-greenC active:bg-greenB",
  };
  //active and hover are not set in Figma yet, to change later !!!
  const sizes = {
    medium: "text-16",
    large: "text-lg",
  };
  return (
    <Link
      href={href}
      className={clsx(
        "flex h-fit w-fit items-center justify-center gap-[10px] rounded px-8 py-3 font-sourceSans shadow-inner",
        variants[variant],
        sizes[size],
      )}
    >
      {icon && iconName && (
        <ButtonIcon name={iconName} className="text-inherit" />
      )}
      {label}
    </Link>
  );
};
