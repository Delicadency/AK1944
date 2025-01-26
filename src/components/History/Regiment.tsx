import { Heading } from "../shared/Heading/Heading";
import Container from "../shared/Container";
import { historyData } from "@/data/historyData";
import { Button } from "../shared/Button/Button";
import Image from "next/image";

export default function Regiment() {
  const { title, description } = historyData.regiment;
  return (
    <Container>
      <Heading variant="h3" contrast="yellow" color="green">
        {title}
      </Heading>
      <p className="my-6 text-greenMain">{description}</p>
      <Image
        src="/images/history/main/regiment_placeholder.jpg"
        alt="regiment"
        width={1920}
        height={1080}
      ></Image>

      <Button
        label="Zobacz więcej"
        ariaDescription="Zobacze Więcej"
        variant={"secondary"}
        className="mt-6 justify-self-center"
      ></Button>
    </Container>
  );
}
