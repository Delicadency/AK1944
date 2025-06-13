import Link from "next/link";

interface Props {
  excerpt: string;
  href: string;
}
export const NewsContent = ({ excerpt, href }: Props) => (
  <div className="max-w-[600px] font-sourceSans text-backgroundMain contrast:text-black">
    {excerpt}{" "}
    <Link
      href={href}
      className="text-greenLight underline contrast:text-black tablet:col-start-2 tablet:row-start-2"
    >
      czytaj więcej.
    </Link>
  </div>
);
