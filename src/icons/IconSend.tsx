import { IconProps } from "@/types";

export default function IconSend({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 2.5L11 13.5"
        stroke="#FFFCF5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 2.5L15 22.5L11 13.5L2 9.5L22 2.5Z"
        stroke="#FFFCF5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
