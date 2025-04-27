import { Heading } from "../shared/Heading/Heading";
import { Button } from "../shared/Button/Button";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  route: string;
  image: {
    path: string;
    alt: string;
  };
}

export const HistoryChapter = ({ item }: { item: Props }) => (
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
      className="m-auto h-[203px] w-[288px] mobile:max-h-[290px] md:h-[352px] md:max-h-[352px] md:w-[500px]"
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
