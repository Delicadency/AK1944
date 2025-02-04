import Link from "next/link";

export const NewsContent = ({ excerpt }: { excerpt: string }) => (
  <div>
    {excerpt} <Link href="/">czytaj więcej.</Link>
  </div>
);
