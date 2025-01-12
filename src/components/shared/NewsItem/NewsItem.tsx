import Image, { ImageProps } from "next/image";
import Container from "../Container";
import { Heading } from "../Heading/Heading";
import { ReadMore } from "../ReadMore/ReadMore";

interface NewsProps {
  heading: string;
  date: string;
  image: ImageProps;
  text: string;
  id: string;
}

export const NewsItem = async ({
  heading,
  date,
  image,
  text,
  id,
}: NewsProps) => {
  return (
    <Container className="flex flex-col items-start justify-start gap-3 tablet:grid">
      <div className="flex flex-col items-start justify-start tablet:col-start-2 tablet:row-start-1 tablet:flex-row tablet:items-center tablet:gap-4">
        <Heading variant="h4" color="white" contrast="black">
          {heading}
        </Heading>
        <p className="text-20 text-grayDate contrast:text-black">{date}</p>
      </div>
      <div className="tablet:col-start-1 tablet:row-span-2 tablet:row-start-1">
        <Image
          alt={image.alt}
          src={image.src}
          width={image.width}
          height={image.height}
        />
      </div>
      <ReadMore
        id={id}
        text={text}
        className="text-white contrast:text-black tablet:col-start-2 tablet:row-start-2"
      />
    </Container>
  );
};
