import { UnionHero } from "./_components/UnionHero";
import { UnionSubsection } from "./_components/UnionSubsection";
import { UnionAddendum } from "./_components/UnionAddendum";
import Container from "@/components/shared/Container";
import {
  mainArticle,
  subsections,
  addendum,
} from "@/app/zwiazek/historia-zwiazku/data";

export default function UnionPage() {
  return (
    <div className="contrast:bg-black00 contrast:text-yellowContrast">
      <UnionHero paragraph={mainArticle.paragraph} />

      <Container
        as="article"
        className="pb-10 font-sourceSans text-16 leading-6 text-black contrast:text-yellowContrast tablet:pb-20 tablet:text-18 tablet:leading-7 desktop:pb-150"
      >
        <div className="tablet:w-[760px]">
          {Object.entries(subsections).map(([key, subsection]) => (
            <UnionSubsection
              key={key}
              subtitle={subsection.subtitle}
              paragraph={subsection.paragraph}
              {...("bulletpoints" in subsection && {
                bulletpoints: subsection.bulletpoints,
              })}
            />
          ))}
        </div>
        <UnionAddendum paragraph={addendum.paragraph} />
      </Container>
    </div>
  );
}
