import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";
import { OriginContent } from "./_components/OriginsContent";
import { OriginContentMobile } from "./_components/OriginsContentMobile";

export default function GenezaPage() {
  return (
    <Container
      as="main"
      className="text-16 leading-6 tablet:text-18 tablet:leading-7"
    >
      <Breadcrumbs color="green" />
      <Heading
        contrast="yellow"
        color="green"
        className="pt-8 !text-28 tablet:!text-32"
      >
        Geneza
      </Heading>
      <OriginContent />
      <OriginContentMobile />
    </Container>
  );
}
