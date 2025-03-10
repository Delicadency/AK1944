import { Heading } from "../shared/Heading/Heading";
import Container from "../shared/Container";
import { historyData } from "@/data/historyData";
import { Button } from "../shared/Button/Button";
import Image from "next/image";
import { Routes } from "@/routes";

export const OperationBurza = () => {
  const { title, description } = historyData.burza ?? {};
  return (
    <>
      <Container className="gap-[130px] desktop:flex">
        <div>
          <Heading variant="h3" contrast="yellow" color="green">
            {title}
          </Heading>
          <p className="my-6 font-sourceSans text-lg text-greenMain">
            {description}
          </p>
        </div>
        <Image
          src="/images/history/main/burza.jpg"
          alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
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
        href={Routes.OPERATION}
      ></Button>
    </>
  );
};
