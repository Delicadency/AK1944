import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const HeroicDefence = () => {
  const {
    heroicDefenceTitle,
    heroicDefence1,
    heroicDefence2,
    heroicDefence3,
    heroicDefence4,
    heroicDefence5,
  } = historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {heroicDefenceTitle}
      </Heading>
      <p className="text-lg contrast:text-yellowContrast">{heroicDefence1}</p>
      <p className="text-lg contrast:text-yellowContrast">{heroicDefence2}</p>
      <Image
        src="/images/history/burza/gumniska.jpg"
        alt="debica"
        width={2000}
        height={1300}
        className="m-auto"
        sizes="(max-width: 1279px) 50vw, 35vw"
      />
      <p className="text-lg contrast:text-yellowContrast">{heroicDefence3}</p>
      <p className="text-lg contrast:text-yellowContrast">{heroicDefence4}</p>
      <p className="text-lg contrast:text-yellowContrast">{heroicDefence5}</p>
    </section>
  );
};
