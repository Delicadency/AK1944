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
          <h2 className="py-4 font-lora text-28 font-bold tablet:pb-10 desktop:text-32">
            Historia związku
          </h2>
          <article className="flex flex-col gap-4 tablet:w-[710px] tablet:gap-8">
            {Array.isArray(unionData.mainArticle.paragraph) ? (
              unionData.mainArticle.paragraph.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{unionData.mainArticle.paragraph}</p>
            )}
          </article>
        </Container>
      </BackgroundImage>
    </section>
  );
}
