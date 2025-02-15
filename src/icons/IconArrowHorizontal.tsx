import { DefaultIconProps } from "@/types";

export default function IconArrowHorizontal({
  className,
}: DefaultIconProps): JSX.Element {
  return (
    <svg
      className={className}
      width="1119"
      height="30"
      viewBox="0 0 1119 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1118.41 16.4143C1119.2 15.6333 1119.2 14.3669 1118.41 13.5859L1105.69 0.857961C1104.91 0.0769122 1103.64 0.0769121 1102.86 0.857961C1102.08 1.63901 1102.08 2.90534 1102.86 3.68639L1114.17 15.0001L1102.86 26.3138C1102.08 27.0949 1102.08 28.3612 1102.86 29.1422C1103.64 29.9233 1104.91 29.9233 1105.69 29.1422L1118.41 16.4143ZM-1.74846e-07 17L1117 17.0001L1117 13.0001L1.74846e-07 13L-1.74846e-07 17Z"
        fill="#163020"
      />
    </svg>
  );
}
