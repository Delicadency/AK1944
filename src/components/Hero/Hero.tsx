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
        priority
      >
        <Container className="mx-auto flex h-full flex-col items-center justify-center gap-6 pb-5 pt-20 text-center text-white tablet:pt-32 desktop:pt-28">
          <Heading
            contrast="yellow"
            color="white"
            underline
            className="mb-5 w-[70%] mobile:text-24 tablet:text-32 desktop:text-40"
          >
            Światowy Związek Żołnierzy Armii Krajowej
          </Heading>
          <Heading
            variant="h4"
            contrast="yellow"
            color="white"
            className="mx-auto w-[65%] mobile:text-20 tablet:text-28 desktop:text-32"
          >
            Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy
          </Heading>
          <LogoAK className="mt-auto h-[32px] w-[88px] opacity-[33%]" />
        </Container>
      </BackgroundImage>
    </section>
  );
};
export default Hero;
