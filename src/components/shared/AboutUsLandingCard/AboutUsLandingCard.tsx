import Image, { ImageProps } from "next/image";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import Container from "../Container";

interface AboutUsLandingCardProps {
  image: ImageProps;
  heading: string;
  description: string;
  buttonLabel: string;
}

const AboutUsLandingCard = ({
  image,
  heading,
  description,
  buttonLabel,
}: AboutUsLandingCardProps) => {
  return (
    <Container className="flex w-[320px] flex-col items-center gap-6 rounded bg-greenMain py-5 contrast:bg-yellowContrast tablet:w-[395px] tablet:flex-shrink-0 tablet:snap-start tablet:gap-3 tablet:px-6 desktop:snap-none">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width ? image.width : 350}
        height={image.height ? image.height : 190}
        className="h-[191px] w-[288px] rounded object-cover tablet:mb-5 tablet:w-[350px]"
      />
      <Heading
        color="white"
        contrast="black"
        variant="h3"
        className="self-start"
      >
        {heading}
      </Heading>
      <p className="text-white contrast:text-black tablet:mb-1">
        {description}
      </p>
      <Button label={buttonLabel} ariaDescription={buttonLabel} />
    </Container>
  );
};

export default AboutUsLandingCard;
