import { DefaultIconProps } from "@/types";

export default function IconYoutube({
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
        d="M-0.00146484 14.768V5.23134C-0.00146484 2.35407 2.3526 0 5.22987 0H14.7665C17.6438 0 19.9979 2.35407 19.9979 5.23134V14.768C19.9979 17.6452 17.6438 19.9993 14.7665 19.9993H5.22987C2.3526 19.9993 -0.00146484 17.6452 -0.00146484 14.768Z"
        fill="url(#paint0_linear_327_5608)"
      />
      <path
        d="M15.352 8.54579C15.352 7.21966 14.2768 6.14453 12.9507 6.14453H6.81044C5.48431 6.14453 4.40918 7.21966 4.40918 8.54579V11.4032C4.40918 12.7294 5.48431 13.8045 6.81044 13.8045H12.9507C14.2768 13.8045 15.352 12.7294 15.352 11.4032V8.54579ZM11.7408 10.1886L8.98737 11.551C8.87931 11.6091 8.51273 11.5311 8.51273 11.4087V8.61213C8.51273 8.48766 8.88273 8.40969 8.99079 8.47124L11.6266 9.90543C11.7367 9.96835 11.853 10.1284 11.7408 10.1886Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_327_5608"
          x1="18.4613"
          y1="1.53664"
          x2="1.53504"
          y2="18.4629"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0000" />
          <stop offset="1" stopColor="#850000" />
        </linearGradient>
      </defs>
    </svg>
  );
}
