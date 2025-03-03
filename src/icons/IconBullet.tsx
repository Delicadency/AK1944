import { DefaultIconProps } from "@/types";

interface Props extends DefaultIconProps {
  size?: number;
}
export default function IconBullet({ className, size = 24 }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" />
    </svg>
  );
}
