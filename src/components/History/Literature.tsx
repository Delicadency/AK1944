import { Heading } from "../shared/Heading/Heading";
import { historyData as txt } from "@/data/historyData";
import { Button } from "../shared/Button/Button";
import Container from "../shared/Container";

export default function Literature() {
  return (
    <Container className="justify-items-center bg-greenMain py-6 contrast:bg-yellowContrast">
      <Heading variant="h3" contrast="black" color="white">
        {txt.literature.title}
      </Heading>
      <p className="my-6 text-white">{txt.literature.content}</p>
      <Button
        label="Sprawdź"
        ariaDescription="Sprawdź"
        className="mt-6"
      ></Button>
    </Container>
  );
}
