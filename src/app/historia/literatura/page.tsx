import { List } from "@/app/historia/literatura/_components/List";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";

export default function LiteraturePage() {
  return (
    <div className="contrast:bg-black00">
      <Container
        as="main"
        className="tablet:px-10 tablet:pb-10 desktop:px-24 desktop:pb-20"
      >
        <div className="mb-8 flex flex-col items-start gap-4">
          <Breadcrumbs />
          <Heading variant="h2" color="green" contrast="yellow" className="m-0">
            Literatura
          </Heading>
        </div>
        <List />
      </Container>
    </div>
  );
}
