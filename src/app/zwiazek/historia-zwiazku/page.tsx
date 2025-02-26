import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import { unionData } from "@/data/unionData";


export default function UnionPage() {
  return (
    <section>
      <BackgroundImage
        src="/images/hero_background.png"
        alt=""
        width="1440"
        height="641"
        className="h-[891px] tablet:max-h-[653px]"
      >
        <Container as="article" className="text-16 leading-7 text-white">
          <Breadcrumbs color="white" />
          <h2 className="py-4 tablet:pb-10 font-lora text-28 font-bold desktop:text-32">
            Historia związku
          </h2>
          <article className="flex flex-col gap-4 tablet:gap-8 tablet:w-[710px] ">
            <p>{unionData.mainArticle.paragraph[0]}</p>
            <p>{unionData.mainArticle.paragraph[1]}</p>
          </article>
        </Container>
      </BackgroundImage>
    </section>
  );
}
