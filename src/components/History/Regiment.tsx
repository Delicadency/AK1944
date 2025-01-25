import { Heading } from "../shared/Heading/Heading";
import Container from "../shared/Container";
import { historyData as txt } from "@/data/historyData";

export default function Regiment() {
  return (
    <Container>
      <Heading variant="h3" contrast="yellow" color="green">
        {txt.regiment.title}
      </Heading>
      <p className="text-greenMain">{txt.regiment.description}</p>
    </Container>
  );
}
