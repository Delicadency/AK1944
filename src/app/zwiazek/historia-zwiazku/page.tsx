import UnionHero from "./UnionHero";
import UnionSubsection from "./UnionSubsection";
import UnionAddendum from "./UnionAddendum";
import Container from "@/components/shared/Container";
import { unionData } from "@/app/zwiazek/historia-zwiazku/data";

export default function UnionPage() {
  const { mainArticle, subsections, addendum } = unionData;

  return (
    <div className="contrast:bg-black00 contrast:text-yellowContrast">
      <UnionHero mainArticle={mainArticle} />

      <Container
        as="article"
        className="pb-10 font-sourceSans text-16 leading-6 text-black contrast:text-yellowContrast tablet:text-18 tablet:leading-7"
      >
        <div className="tablet:w-[760px]">
          {Object.keys(subsections).map((key) => {
            const subsection = subsections[key as keyof typeof subsections];
            return (
              <UnionSubsection
                key={key}
                subtitle={subsection.subtitle}
                paragraph={subsection.paragraph}
                bulletpoints={subsection.bulletpoints}
              />
            );
          })}
        </div>
        <UnionAddendum addendum={addendum} />
      </Container>
    </div>
  );
}
