import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Article } from "./_components/Article";

export default function PartisanTrailPage() {
  return (
    <>
      <Container as="section" className="contrast:bg-black00 contrast:text-yellowContrast">
        <Breadcrumbs />
        <Heading color="green" contrast="yellow" className="pt-5">
          <span className="inline desktop:hidden">
            Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica
          </span>
          <span className="hidden desktop:inline">Szlak Partyzancki</span>
        </Heading>
        <Article />
      </Container>
    </>
  );
}
