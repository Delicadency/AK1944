import Link from "next/link";

export const NewsContent = ({ excerpt }: { excerpt: string }) => (
  <div className="w-[395px] font-sourceSans text-backgroundMain contrast:text-black">
    {excerpt}{" "}
    <Link
      href="/"
      className="text-greenLight underline contrast:text-black tablet:col-start-2 tablet:row-start-2"
    >
      czytaj więcej.
    </Link>
  </div>
);
