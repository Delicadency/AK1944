import Image from "next/image";
import { Heading } from "@/components/shared/Heading/Heading";

interface CardProps {
  anchorId?: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  date: string;
  description: string;
  isLast: boolean;
}

export const EventCard = ({
  anchorId,
  title,
  image,
  date,
  description,
  isLast,
}: CardProps) => (
  <div
    id={anchorId}
    className={`flex w-full flex-col items-start gap-2 pb-10 tablet:flex-row tablet:gap-11 ${isLast ? "last:border-b-0" : "border-b-4 border-b-textDarkGreen"} `}
  >
    <div className="relative flex aspect-square h-52 w-52 items-center justify-center self-center tablet:h-52 tablet:w-52">
      <Image
        alt={image.alt}
        src={image.src}
        fill
        className="rounded object-cover"
        objectFit="cover"
      />
    </div>
    <div className="col-span-2 flex flex-col items-start gap-2">
      <Heading
        color="green"
        contrast="yellow"
        variant="h4"
        className="tracking-tight tablet:text-32"
      >
        {title}
      </Heading>
      <p className="text-18 tablet:font-lora tablet:text-24 tablet:font-bold">
        {date}
      </p>
      <p className="text-20 leading-6">{description}</p>
    </div>
  </div>
);
