import { IconProps } from "@/types";

export default function IconMail({ className }: IconProps): JSX.Element {
    return (

        <svg className={className}
            role="presentation"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path d="M5.33366 5.33301H26.667C28.1337 5.33301 29.3337 6.53301 29.3337 7.99967V23.9997C29.3337 25.4663 28.1337 26.6663 26.667 26.6663H5.33366C3.86699 26.6663 2.66699 25.4663 2.66699 23.9997V7.99967C2.66699 6.53301 3.86699 5.33301 5.33366 5.33301Z" stroke="#262827" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M29.3337 8L16.0003 17.3333L2.66699 8" stroke="#262827" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}