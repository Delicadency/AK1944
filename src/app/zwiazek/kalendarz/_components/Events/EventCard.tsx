import Image from "next/image";
import { Heading } from "@/components/shared/Heading/Heading";

interface CardProps {
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
  title,
  image,
  date,
  description,
  isLast,
}: CardProps) => (
  <div
    className={`flex flex-col items-start gap-2 bg-white pb-10 tablet:grid tablet:grid-flow-col tablet:gap-11 ${isLast ? "last:border-b-0" : "border-b-4 border-b-greenMain"}`}
  >
    <div className="relative flex h-60 w-72 items-center justify-center self-center tablet:h-52 tablet:w-52">
      <Image
        alt={image.alt}
        src={image.src}
        fill
        className="rounded"
        objectFit="cover"
      />
    </div>
    <div className="flex flex-col items-start gap-2">
      <Heading
        color="green"
        contrast="yellow"
        variant="h4"
        className="tablet:text-32"
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
