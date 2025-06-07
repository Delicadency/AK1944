import { DefaultIconProps } from "@/types";

export default function IconArrowVertical({
  className,
}: DefaultIconProps): JSX.Element {
  return (
    <svg
      className={className}
      width="30"
      height="472"
      viewBox="0 0 30 472"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5858 471.414C14.3668 472.195 15.6331 472.195 16.4142 471.414L29.1421 458.686C29.9232 457.905 29.9232 456.639 29.1421 455.858C28.3611 455.077 27.0947 455.077 26.3137 455.858L15 467.172L3.68627 455.858C2.90522 455.077 1.63889 455.077 0.857844 455.858C0.0767956 456.639 0.0767956 457.905 0.857844 458.686L13.5858 471.414ZM13 -8.74228e-08L13 470L17 470L17 8.74228e-08L13 -8.74228e-08Z"
        fill="currentColor"
      />
    </svg>
  );
}
