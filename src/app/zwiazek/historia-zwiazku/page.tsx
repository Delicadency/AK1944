import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import { unionData } from "@/app/zwiazek/historia-zwiazku/data";
import IconBullet from "@/icons/IconBullet";
import { Heading } from "@/components/shared/Heading/Heading";

export default function UnionPage() {
  return (
    <div className="contrast:bg-black00 contrast:text-yellowContrast">
      <BackgroundImage
        src="/images/hero_background.png"
        alt="Zdjęcie przedstawiające strzelców konnych z biało czerwonymi proprcami"
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
            {Array.isArray(unionData.mainArticle.paragraph) ? (
              unionData.mainArticle.paragraph.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{unionData.mainArticle.paragraph}</p>
            )}
          </section>
        </Container>
      </BackgroundImage>

      <Container
        as="article"
        className="pb-10 font-sourceSans text-16 leading-6 text-black contrast:text-yellowContrast tablet:text-18 tablet:leading-7"
      >
        <div className="tablet:w-[760px]">
          {Object.keys(unionData.subsections).map((key) => {
            const subsection =
              unionData.subsections[key as keyof typeof unionData.subsections];
            return (
              <section className="pt-5" key={key}>
                <h3 className="pb-4 font-lora text-24 font-bold leading-9 text-greenMain contrast:text-yellowContrast">
                  {subsection.subtitle}
                </h3>
                <p className="pb-5">{subsection.paragraph}</p>
                {subsection.bulletpoints && (
                  <ul>
                    {subsection.bulletpoints.map((point, i) => (
                      <li className="flex flex-row gap-6 pb-5" key={i}>
                        <IconBullet
                          size={24}
                          className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
                          aria-hidden="true"
                        />
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>

        <section className="gap-4 pt-5 font-courier text-14 leading-5 tablet:mx-auto tablet:w-[710px] tablet:gap-8 tablet:py-[60px]">
          {(Array.isArray(unionData.addendum.paragraph)
            ? unionData.addendum.paragraph
            : [unionData.addendum.paragraph]
          ).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      </Container>
    </div>
  );
}
