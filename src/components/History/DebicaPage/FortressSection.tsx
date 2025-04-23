import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { fortressTitle, fortress1, fortress2 } = historyData.debica;

export const FortressSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast desktop:flex-row">
    <div className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {fortressTitle}
      </Heading>
      <p>{fortress1}</p>
      <p>{fortress2}</p>
    </div>
    <Image
      src="/images/history/debica/map.webp"
      alt="Mapa Obwodu Dębica z wyszczególnieniem poszczególnych placówek."
      width={1600}
      height={980}
      className="m-auto tablet:max-w-[800px] desktop:max-w-[700px]"
      priority
    />
  </section>
);
