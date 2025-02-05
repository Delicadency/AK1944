import { DefaultIconProps } from "@/types";

export default function IconX({ className }: DefaultIconProps) {
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
        d="M16.4266 20.2198H3.78926C1.69543 20.2198 -0.00195312 18.5224 -0.00195312 16.4286V3.79121C-0.00195312 1.69739 1.69543 0 3.78926 0H16.4266C18.5204 0 20.2178 1.69739 20.2178 3.79121V16.4286C20.2178 18.5224 18.5204 20.2198 16.4266 20.2198ZM11.3875 9.16209L16.0317 4.18613H14.8469L10.8662 8.45124L7.73843 4.18613H3.78926L8.65464 10.8207L3.78926 16.0337H4.97401L9.17593 11.5316L12.4774 16.0337H16.4266L11.3875 9.16209ZM5.43777 4.84431H7.05794L14.7781 15.3754H13.1579L5.43777 4.84431Z"
        fill="url(#paint0_linear_1963_21304)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1963_21304"
          x1="10.1079"
          y1="0"
          x2="10.1079"
          y2="20.2198"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0789996" stop-color="#515151" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
