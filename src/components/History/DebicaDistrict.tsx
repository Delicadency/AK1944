import { Heading } from "../shared/Heading/Heading";
import Container from "../shared/Container";
import { historyData } from "@/data/historyData";
import { Button } from "../shared/Button/Button";
import Image from "next/image";
import { Routes } from "@/routes";

export const DebicaDistrict = () => {
  const { title, description } = historyData.debica ?? {};
  return (
    <>
      <Container className="gap-[130px] desktop:flex">
        <div>
          <Heading variant="h3" contrast="yellow" color="green">
            {title}
          </Heading>
          <p className="my-6 text-greenMain">{description}</p>
        </div>
        <div>
          <Image
            src="/images/history/main/debica.jpg"
            alt="Pokazy musztry w koszarach 5. Pułku Strzelców Konnych w Dębicy. Na czele plutonu ppor. Mieczysław Rakoczy."
            width={500}
            height={1080}
            className="m-auto"
          />
        </div>
      </Container>
      <Button
        label="Zobacz więcej"
        ariaDescription="Zobacz Więcej"
        variant={"secondary"}
        className="mt-6 justify-self-center"
        href={Routes.DEBICA_DISTRICT}
      ></Button>
    </>
  );
};
