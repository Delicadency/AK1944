import { DefaultIconProps } from "@/types";

export default function IconFacebook({
  className,
}: DefaultIconProps): JSX.Element {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14.768V5.23134C0 2.35407 2.35407 0 5.23134 0H14.768C17.6453 0 19.9993 2.35407 19.9993 5.23134V14.768C19.9993 17.6452 17.6453 19.9993 14.768 19.9993H11.5624L9.88339 19.5903L8.43689 19.9993H5.23134C2.35407 19.9993 0 17.6452 0 14.768Z"
        fill="url(#paint0_linear_327_5598)"
      />
      <path
        d="M13.8931 13.2191L14.3363 10.3281H11.563V8.45214C11.563 7.66152 11.9501 6.89074 13.1928 6.89074H14.4539V4.42998C14.4539 4.42998 13.3097 4.23438 12.2155 4.23438C9.93115 4.23438 8.43814 5.61864 8.43814 8.12522V10.3281H5.89941V13.2191H8.43814V20.0002H11.563V13.2191H13.8931Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_327_5598"
          x1="18.4632"
          y1="1.53664"
          x2="1.53692"
          y2="18.4629"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4676ED" />
          <stop offset="0.1854" stopColor="#436DE4" />
          <stop offset="0.487" stopColor="#3C55CD" />
          <stop offset="0.8651" stopColor="#302EA8" />
          <stop offset="1" stopColor="#2B1E99" />
        </linearGradient>
      </defs>
    </svg>
  );
}
