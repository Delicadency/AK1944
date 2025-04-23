import { Heading } from "../shared/Heading/Heading";
import { Button } from "../shared/Button/Button";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  description: string;
  route: string;
  image: {
    path: string;
    alt: string;
  };
}

export const HistoryItem = ({ item }: { item: Props }) => (
  <li className="gap-[130px] desktop:flex">
    <div className="relative">
      <Heading variant="h3" contrast="yellow" color="green">
        {item.title}
      </Heading>
      <p className="my-6 font-sourceSans text-lg text-greenMain">
        {item.description}
      </p>
      <Button
        label="Zobacz więcej"
        ariaDescription="Zobacz Więcej"
        variant={"secondary"}
        className="absolute bottom-5 right-0 hidden desktop:block"
        href={item.route}
      />
    </div>
    <Image
      src={item.image.path}
      alt={item.image.alt}
      width={500}
      height={1080}
      className="m-auto mobile:max-h-[290px] desktop:h-[352px] desktop:max-h-[352px]"
    />
    <Button
      label="Zobacz więcej"
      ariaDescription="Zobacz Więcej"
      variant={"secondary"}
      className="m-auto mt-6 desktop:hidden"
      href={item.route}
    />
  </li>
);
