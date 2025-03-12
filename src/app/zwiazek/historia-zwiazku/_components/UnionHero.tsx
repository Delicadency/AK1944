import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import { Heading } from "@/components/shared/Heading/Heading";

interface UnionHeroProps {
  paragraph: string[];
}

export const UnionHero = ({ paragraph }: UnionHeroProps) => (
  <BackgroundImage
    src="/images/hero_background.png"
    alt="Zdjęcie przedstawiające strzelców konnych z biało czerwonymi proporcami"
    fill
    className="max-h-[1200px] contrast:invisible tablet:h-[640px] tablet:max-h-[660px]"
    aria-hidden="true"
  >
    <Container
      as="article"
      className="text-16 leading-6 text-white contrast:block tablet:text-18 tablet:leading-7"
    >
      <Breadcrumbs color="white" />
      <Heading
        variant="h2"
        color="white"
        className="py-5 text-28 tablet:pb-10 desktop:text-32"
        contrast="yellow"
        align="start"
      >
        Historia związku
      </Heading>
      <section className="flex flex-col gap-4 pb-10 font-sourceSans contrast:text-yellowContrast tablet:w-[710px] tablet:gap-8">
        {paragraph.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
    </Container>
  </BackgroundImage>
);
