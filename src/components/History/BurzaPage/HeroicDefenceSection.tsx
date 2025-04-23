import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const {
  heroicDefenceTitle,
  heroicDefence1,
  heroicDefence2,
  heroicDefence3,
  heroicDefence4,
  heroicDefence5,
} = historyData.burza;

export const HeroicDefenceSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {heroicDefenceTitle}
    </Heading>
    <p>{heroicDefence1}</p>
    <p>{heroicDefence2}</p>
    <Image
      src="/images/history/burza/kaluzowka.webp"
      alt="Punkt sanitarny na Kałużówce. Od lewej: dr Kazimierz Gradziński, Maria Szewczyk, Teresa Langer, dr Jan Szymaszek, Władysława Gubernat, Lucyna Dykier."
      width={2000}
      height={1300}
      className="m-auto max-w-[600px] desktop:hidden"
    />
    <p>{heroicDefence3}</p>
    <p>{heroicDefence4}</p>
    <p>{heroicDefence5}</p>
  </section>
);
