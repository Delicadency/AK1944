import Image from "next/image";

interface Props {
  items: string[];
}

// Todo: Move to shared?
export const Carousel = ({ items }: Props) => (
  <ul className="flex items-center gap-4 overflow-x-scroll tablet:gap-6 desktop:gap-10">
    {items.map((item) => (
      <li key={item} className="flex-shrink-0" title={item}>
        <Image
          src="/images/placeholder_image.png"
          alt={item}
          width={304}
          height={304}
        />
      </li>
    ))}
  </ul>
);
