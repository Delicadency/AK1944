import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Article } from "./_components/Article";
import { Map } from "./_components/Map";
import { Partners } from "./_components/Partners";
import { Section } from "./_components/Section";
import { trails } from "./data/trails";

export default function PartisanTrailPage() {
  const activeTrail = trails.pierwszy;

  return (
    <div className="contrast:bg-black00 contrast:text-yellowContrast">
      <Container as="section">
        <Breadcrumbs />
        <Heading color="green" contrast="yellow" className="pt-5">
          <span className="inline desktop:hidden">
            Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica
          </span>
          <span className="hidden desktop:inline">Szlak Partyzancki</span>
        </Heading>
        <Article paragraphs={activeTrail.paragraphs} />
        <Map map={activeTrail.map} />
        <div className="flex flex-col justify-between desktop:flex-row desktop:pb-20">
          <Section sectionName="Geneza" />
          <Section sectionName="Rajdy" />
        </div>
        <Partners />
      </Container>
    </div>
  );
}
