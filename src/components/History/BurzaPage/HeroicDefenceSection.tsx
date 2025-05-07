import { heroicDefence } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { heroicDefenceTitle, heroicDefence: content } = heroicDefence;

export const HeroicDefenceSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {heroicDefenceTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6">
        {content[0].map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <Image
        src="/images/history/burza/kaluzowka.webp"
        alt="Punkt sanitarny na Kałużówce. Od lewej: dr Kazimierz Gradziński, Maria Szewczyk, Teresa Langer, dr Jan Szymaszek, Władysława Gubernat, Lucyna Dykier."
        width={2000}
        height={1300}
        className="m-auto w-full max-w-[600px] desktop:hidden"
      />
      <div className="flex flex-col gap-6">
        {content[1].map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);
