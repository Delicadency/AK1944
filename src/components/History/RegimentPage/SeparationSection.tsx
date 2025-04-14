import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const SeparationSection = () => {
  const { separationTitle, separation1 } = historyData.regiment ?? {};
  return (
    <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
      <Heading variant="h4" color="green" contrast="yellow">
        {separationTitle}
      </Heading>
      <div className="flex gap-6 mobile:flex-col desktop:flex-row">
        <p className="desktop:w-1/2">{separation1}</p>
        <Image
          src="/images/history/regiment/independence.webp"
          alt="Obchody Święta Niepodległości w Dębicy. Ppor. Mieczysław Rakoczy na czele II plutonu 3. szwadronu 5. Pułku Strzelców Konnych. Dębica, 11 listopada 1938 r."
          width={604}
          height={419}
          className="m-auto desktop:w-1/2"
        />
      </div>
    </section>
  );
};
