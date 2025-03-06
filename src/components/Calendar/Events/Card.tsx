import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

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

export const Card = ({ title, image, date, description, isLast }: CardProps) => {
  return (
    <div
      className={`flex flex-col items-start gap-2 bg-white pb-10 ${isLast ? "last:border-b-0" : "border-b-4 border-b-greenMain"}`}
    >
      <div className="relative flex h-60 w-72 items-center justify-center self-center">
        <Image
          alt={image.alt}
          src={image.src}
          fill
          className="rounded"
          objectFit="cover"
        />
      </div>

      <Heading color="green" contrast="yellow" variant="h4">
        {title}
      </Heading>
      <p className="text-18">{date}</p>
      <p className="text-20 leading-6">{description}</p>
    </div>
  );
};