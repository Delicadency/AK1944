import Image from "next/image";

interface Props {
  name: string;
  href: string;
  image?: string;
}

const SIZE = 320;

export const PartnerCard = ({ name, href, image }: Props) => (
  <article className="flex h-full w-full items-center justify-center overflow-hidden p-2 contrast:bg-[#FFFFFF]">
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
          width={SIZE}
          height={SIZE}
        />
      ) : (
        <h5 className="text-center text-xl font-bold text-greenMain">{name}</h5>
      )}
    </a>
  </article>
);
