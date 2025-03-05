import IconAward from "@/icons/IconAward";
import IconCheckSquare from "@/icons/IconCheckSquare";
import IconCoffee from "@/icons/IconCoffee";
import IconCompass from "@/icons/IconCompass";
import IconFileText from "@/icons/IconFileText";
import IconGift from "@/icons/IconGift";
import IconHelpCircle from "@/icons/IconHelpCircle";
import IconInfo from "@/icons/IconInfo";
import IconSend from "@/icons/IconSend";
import IconTarget from "@/icons/IconTarget";
import { IconMapPin } from "@/icons/IconMapPin";
import { IconProps } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  award: IconAward,
  check: IconCheckSquare,
  coffee: IconCoffee,
  compass: IconCompass,
  file: IconFileText,
  gift: IconGift,
  help: IconHelpCircle,
  info: IconInfo,
  pin: IconMapPin,
  send: IconSend,
  target: IconTarget,
};

export default function ButtonIcon({
  name,
  className,
}: IconProps): JSX.Element {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <></>;
  }
  return <IconComponent className={className} aria-hidden="true" />;
}
