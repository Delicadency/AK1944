import Image, { ImageProps } from "next/image";
import { Heading } from "../Heading/Heading";
import { ReadMore } from "../ReadMore/ReadMore";

interface NewsProps {
  heading: string;
  date: string;
  image: ImageProps;
  excerpt: string;
  id: number;
}

export const NewsItem = async ({
  heading,
  date,
  image,
  excerpt,
  id,
}: NewsProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 tablet:grid tablet:gap-x-6 tablet:gap-y-3">
      <div className="flex flex-col items-start justify-start tablet:col-start-2 tablet:row-start-1 tablet:flex-row tablet:items-center tablet:gap-4">
        <Heading variant="h4" color="white" contrast="black">
          {heading}
        </Heading>
        <p className="text-20 text-grayDate contrast:text-black">{date}</p>
      </div>
      <div className="h-[191px] w-[288px] tablet:col-start-1 tablet:row-span-2 tablet:row-start-1 tablet:h-[169px] tablet:w-[262px]">
        <Image
          alt={image.alt}
          src={image.src}
          width={image.width}
          height={image.height}
          className="object-cover"
        />
      </div>
      <ReadMore
        id={id}
        excerpt={excerpt}
        amountOfWords={28}
        className="text-white contrast:text-black tablet:col-start-2 tablet:row-start-2"
      />
    </div>
  );
};
