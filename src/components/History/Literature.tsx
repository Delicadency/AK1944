import Container from "../shared/Container";
import { Heading } from "../shared/Heading/Heading";
import { historyData as txt } from "@/data/historyData";
import { Button } from "../shared/Button/Button";
import { Routes } from "@/routes";

export default function Literature() {
  const { title, content } = txt.history.literature;
  return (
    <Container className="justify-items-center bg-greenMain py-6 contrast:bg-yellowContrast desktop:max-w-[420px]">
      <Heading variant="h3" contrast="black" color="white">
        {title}
      </Heading>
      <p className="my-6 text-white">{content}</p>
      <Button
        label="Sprawdź"
        ariaDescription="Sprawdź"
        className="mt-6"
        href={Routes.LITERATURE}
      ></Button>
    </Container>
  );
}
