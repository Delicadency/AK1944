import Link from "next/link";

export const NewsContent = ({ excerpt }: { excerpt: string }) => (
  <p className="mt-[10px] font-sourceSans text-20 text-backgroundMain">
    {excerpt}{" "}
    <Link href="/" className="ml-2 text-greenLight underline">
      czytaj więcej.
    </Link>
  </p>
);
