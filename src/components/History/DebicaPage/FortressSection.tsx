import { fortressSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { fortressTitle, content } = fortressSection;

export const FortressSection = () => (
  <section className="flex flex-col gap-6 text-lg desktop:flex-row">
    <div className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {fortressTitle}
      </Heading>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
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
