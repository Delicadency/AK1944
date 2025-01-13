import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import Container from "../shared/Container";
import { Heading } from "../shared/Heading/Heading";
import LogoAK from "@/icons/LogoAK";

const Hero = () => {
  return (
    <section className="h-[597px] tablet:h-[614px] desktop:h-[651px]">
      <BackgroundImage
        alt="background image"
        src="/images/hero_background.png"
        width={1920}
        height={1080}
      >
        <Container className="flex h-full flex-col items-center gap-6 pb-5 pt-20 tablet:pt-32 desktop:pt-28">
          <Heading
            contrast="yellow"
            color="white"
            underline
            className="mb-5 text-center text-white tablet:text-[40px]"
          >
            Armia Krajowa Dębica
          </Heading>
          <Heading
            variant="h4"
            contrast="yellow"
            color="white"
            className="text-center text-white tablet:text-32"
          >
            Pamięć o Nas nie zginie
          </Heading>
          <LogoAK className="mt-auto h-[32px] w-[88px] opacity-[33%]" />
        </Container>
      </BackgroundImage>
    </section>
  );
};
export default Hero;
