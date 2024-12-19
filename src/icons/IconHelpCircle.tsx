import { IconProps } from "@/types";

export default function IconHelpCircle({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_685_4030)">
        <path
          d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
          stroke="#163020"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.08984 9.49996C9.32495 8.83163 9.789 8.26807 10.3998 7.90909C11.0106 7.55012 11.7287 7.4189 12.427 7.53867C13.1253 7.65844 13.7587 8.02148 14.2149 8.56349C14.6712 9.10549 14.9209 9.79148 14.9198 10.5C14.9198 12.5 11.9198 13.5 11.9198 13.5"
          stroke="#163020"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 17.5H12.01"
          stroke="#163020"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_685_4030">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
