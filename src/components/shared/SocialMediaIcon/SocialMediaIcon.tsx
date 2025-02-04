import Link from "next/link";
import Image from "next/image";

interface Props {
  name: string;
  src: string;
  href: string;
  width?: number;
  height?: number;
}

export const SocialMediaIcon = ({
  name,
  src,
  href,
  width = 38,
  height = 38,
}: Props) => (
  <Link href={href} aria-label={name} target="_blank" rel="noopener noreferrer">
    <Image
      src={src}
      alt={name}
      width={width}
      height={height}
      className="transition-opacity hover:opacity-80"
    />
  </Link>
);
