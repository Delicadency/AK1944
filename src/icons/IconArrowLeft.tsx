
import { DefaultIconProps } from "@/types";

export default function IconArrowLeft({
    className,
}: DefaultIconProps): JSX.Element {
    return (<svg
        className={className}
        width="16" height="16" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    );
}