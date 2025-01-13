import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import Container from "../shared/Container";
import { Heading } from "../shared/Heading/Heading";

const Hero = () => {
  return (
    <section className="h-[597px] tablet:h-[614px]">
      <BackgroundImage
        alt="background image"
        src="/images/hero_background.png"
        width={1920}
        height={1080}
      >
        <Container>
          <Heading variant="h1" contrast="yellow" color="white" underline>
            Armia Krajowa Dębica
          </Heading>
          <Heading variant="h3" contrast="yellow" color="white">
            Pamięć o Nas nie zginie
          </Heading>
        </Container>
      </BackgroundImage>
    </section>
  );
};
export default Hero;
