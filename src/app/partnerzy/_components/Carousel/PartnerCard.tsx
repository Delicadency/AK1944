import Image from "next/image";

interface Props {
  name: string;
  href: string;
  image?: string;
}

const DEFAULT_IMAGE = "/images/placeholder_image.png";

export const PartnerCard = ({ name, href, image }: Props) => (
  <article>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        objectPosition="50% 50%"
        className="flex max-h-80 max-w-80 items-center justify-center"
        src={image ?? DEFAULT_IMAGE}
        alt={name}
        title={name}
        width={304}
        height={304}
      />
    </a>
  </article>
);
