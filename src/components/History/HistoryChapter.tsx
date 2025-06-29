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
      <p className="my-6 font-sourceSans text-lg">{item.description}</p>
      <Button
        label="Zobacz więcej"
        ariaDescription="Zobacz Więcej"
        variant={"secondary"}
        className="absolute bottom-5 right-0 hidden desktop:block"
        href={item.route}
      />
    </div>
    <div className="relative m-auto aspect-[1.4] h-[203px] w-[288px] mobile:max-h-[290px] md:h-[352px] md:max-h-[352px] md:w-[500px]">
      <Image
        src={item.image.path}
        alt={item.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-cover"
      />
    </div>
    <Button
      label="Zobacz więcej"
      ariaDescription="Zobacz Więcej"
      variant={"secondary"}
      className="m-auto mt-6 desktop:hidden"
      href={item.route}
    />
  </li>
);
