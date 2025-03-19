import { Heading } from "../shared/Heading/Heading";
import Container from "../shared/Container";
import { historyData } from "@/data/historyData";
import { Button } from "../shared/Button/Button";
import Image from "next/image";
import { Routes } from "@/routes";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const OperationBurza = () => {
  const { title, description } = historyData.burza ?? {};

  const isDesktop = useMediaQuery("(min-width: 1280px)");

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
          {isDesktop && (
            <Button
              label="Zobacz więcej"
              ariaDescription="Zobacz Więcej"
              variant={"secondary"}
              className="mt-6 justify-self-end"
              href={Routes.OPERATION}
            />
          )}
        </div>
        <Image
          src="/images/history/main/burza.jpg"
          alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
          width={500}
          height={1080}
          className="m-auto mobile:h-[203px] desktop:h-[352px]"
        />
        {!isDesktop && (
          <Button
            label="Zobacz więcej"
            ariaDescription="Zobacz Więcej"
            variant={"secondary"}
            className="m-auto mt-6"
            href={Routes.REGIMENT}
          />
        )}
      </Container>
    </>
  );
};
