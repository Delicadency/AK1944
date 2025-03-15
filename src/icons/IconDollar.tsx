import { IconProps } from "@/types";

export default function IconDollar({ className }: IconProps): JSX.Element {
    return (

        <svg className={className}
            role="presentation"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path d="M16 1.33301V30.6663" stroke="#262827" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.6667 6.66699H12.6667C11.429 6.66699 10.242 7.15866 9.36684 8.03383C8.49167 8.909 8 10.096 8 11.3337C8 12.5713 8.49167 13.7583 9.36684 14.6335C10.242 15.5087 11.429 16.0003 12.6667 16.0003H19.3333C20.571 16.0003 21.758 16.492 22.6332 17.3672C23.5083 18.2423 24 19.4293 24 20.667C24 21.9047 23.5083 23.0917 22.6332 23.9668C21.758 24.842 20.571 25.3337 19.3333 25.3337H8" stroke="#262827" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}