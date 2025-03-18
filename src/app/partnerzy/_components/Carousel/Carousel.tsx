import Image from "next/image";

interface Props {
  items?: number[]; // Todo: Remove optional. Or make it composable component.
}

// Mock of partners cards props. Will be injected via props to the Carousel component. (prolly static data)
const mockedItems = Array.from({ length: 5 }, (_, i) => i);

// Todo: Move to shared?
export const Carousel = ({ items = mockedItems }: Props) => {
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
