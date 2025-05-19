import type { DefaultIconProps } from "@/types";

export const IconSend = ({ className, ...props }: DefaultIconProps) => (
  <svg
    className={className}
    role="presentation"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 2.5L11 13.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2.5L15 22.5L11 13.5L2 9.5L22 2.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
