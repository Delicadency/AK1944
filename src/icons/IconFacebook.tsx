import { DefaultIconProps } from "@/types";

interface Props extends DefaultIconProps {
  size?: number;
}

export default function IconFacebook({ className, size = 32 }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 23.6296V8.37042C0.5 3.76664 4.26664 0 8.87043 0H24.1296C28.7334 0 32.5 3.76664 32.5 8.37042V23.6296C32.5 28.2334 28.7334 32 24.1296 32H19.0005L16.314 31.3456L13.9995 32H8.87043C4.26664 32 0.5 28.2334 0.5 23.6296Z"
        fill="url(#paint0_linear_2034_5524)"
      />
      <path
        d="M22.7279 21.1514L23.437 16.5258H18.9995V13.524C18.9995 12.259 19.6189 11.0257 21.6073 11.0257H23.6252V7.08837C23.6252 7.08837 21.7944 6.77539 20.0435 6.77539C16.3885 6.77539 13.9996 8.99029 13.9996 13.001V16.5258H9.9375V21.1514H13.9996V32.0016H18.9995V21.1514H22.7279Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2034_5524"
          x1="30.0421"
          y1="2.45871"
          x2="2.95915"
          y2="29.5416"
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
