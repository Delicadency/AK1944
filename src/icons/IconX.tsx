import { DefaultIconProps } from "@/types";

interface Props extends DefaultIconProps {
  size?: number;
}

export default function IconX({ className, size = 32 }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="32" height="32" rx="6.5641" fill="white" />
      <path
        d="M26.7857 32.3516H6.56593C3.21582 32.3516 0.5 29.6358 0.5 26.2857V6.06593C0.5 2.71582 3.21582 0 6.56593 0H26.7857C30.1358 0 32.8516 2.71582 32.8516 6.06593V26.2857C32.8516 29.6358 30.1358 32.3516 26.7857 32.3516ZM18.7231 14.6593L26.1538 6.6978H24.2582L17.889 13.522L12.8846 6.6978H6.56593L14.3505 17.3132L6.56593 25.6538H8.46154L15.1846 18.4505L20.467 25.6538H26.7857L18.7231 14.6593ZM9.20355 7.7509H11.7958L24.1481 24.6007H21.5558L9.20355 7.7509Z"
        fill="url(#paint0_linear_2034_5537)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2034_5537"
          x1="16.6758"
          y1="0"
          x2="16.6758"
          y2="32.3516"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0789996" stopColor="#515151" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
