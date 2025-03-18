import Image from "next/image";

interface Props {}

// Mock of partners cards props. Will be injected via props to the Carousel component. (prolly static data)
const items = Array.from({ length: 3 }, (_, i) => i);

export const Carousel = ({}: Props) => {
  return (
    <ul className="flex items-center gap-4 overflow-x-scroll tablet:gap-6 desktop:gap-10">
      {items.map((item) => (
        <li key={item} className="flex-shrink-0">
          <Image
            src="/images/placeholder_image.png"
            alt="Placeholder - fill out later lmao"
            width={304}
            height={304}
          />
        </li>
      ))}
    </ul>
  );
};
