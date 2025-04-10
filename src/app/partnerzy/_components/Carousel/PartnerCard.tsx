import Image from "next/image";

interface Props {
  name: string;
  href: string;
  image?: string;
}

export const PartnerCard = ({ name, href, image }: Props) => (
  <article className="flex h-full w-full items-center justify-center px-3 py-1 contrast:bg-white">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="max-h-80 max-w-80"
    >
      {image ? (
        <Image
          className="max-h-80 max-w-80"
          src={image}
          alt={name}
          title={name}
          width={304}
          height={304}
        />
      ) : (
        <h5 className="text-center text-xl font-bold text-greenMain">{name}</h5>
      )}
    </a>
  </article>
);
