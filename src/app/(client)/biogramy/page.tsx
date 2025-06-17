import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";
import Container from "@/components/shared/Container";
import { biogramsParagraphs } from "./data/biogramsText";
import { BiogramsList } from "./components/biogramsList";
import { people } from "./data/peopleList";

export default function BiogramsPage() {
  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Biogramy
        </Heading>
        <div className="max-w-4xl">
          {biogramsParagraphs.map((paragraph, idx) => (
            <p key={idx} className="py-4 font-sourceSans text-18">
              {paragraph}
            </p>
          ))}
          <p className="py-4 font-sourceSans text-18 font-bold">
            Niech pamięć o nich trwa wiecznie!
          </p>
        </div>

        <div>
          <BiogramsList people={people} />
        </div>
      </Container>
    </div>
  );
}
