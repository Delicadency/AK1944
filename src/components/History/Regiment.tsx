import { Heading } from "../shared/Heading/Heading";
import Container from "../shared/Container";
import { historyData } from "@/data/historyData";
import { Button } from "../shared/Button/Button";
import Image from "next/image";

export const Regiment = () => {
  const { title, description } = historyData.regiment ?? {};
  return (
    <>
      <Container className="gap-[130px] desktop:flex">
        <div>
          <Heading variant="h3" contrast="yellow" color="green">
            {title}
          </Heading>
          <p className="my-6 text-greenMain">{description}</p>
        </div>
        <Image
          src="/images/history/main/regiment.jpg"
          alt="Defilada 5. Pułku Strzelców Konnych z okazji święta pułku w Dębicy. Pluton ckm na jukach, 9 czerwca 1938 r."
          width={500}
          height={1080}
          className="justify-self-center"
        />
      </Container>
      <Button
        label="Zobacz więcej"
        ariaDescription="Zobacz Więcej"
        variant={"secondary"}
        className="mt-6 justify-self-center"
        href="/historia/strzelcy"
      />
    </>
  );
};
