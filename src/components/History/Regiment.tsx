import { Heading } from "../shared/Heading/Heading";
import Container from "../shared/Container";
import { historyData } from "@/data/historyData";
import { Button } from "../shared/Button/Button";
import Image from "next/image";
import { Routes } from "@/routes";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const Regiment = () => {
  const { title, description } = historyData.regiment ?? {};

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
              href={Routes.REGIMENT}
            />
          )}
        </div>
        <Image
          src="/images/history/main/regiment.jpg"
          alt="Defilada 5. Pułku Strzelców Konnych z okazji święta pułku w Dębicy. Pluton ckm na jukach, 9 czerwca 1938 r."
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
