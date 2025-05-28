import { separationSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { separationTitle, content } = separationSection;

export const SeparationSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {separationTitle}
    </Heading>
    <div className="flex gap-6 mobile:flex-col desktop:flex-row">
      <p className="desktop:w-1/2">{content}</p>
      <div className="relative m-auto aspect-[1.4] w-full max-w-[684px] desktop:w-1/2">
        <Image
          src="/images/history/regiment/independence.webp"
          alt="Obchody Święta Niepodległości w Dębicy. Ppor. Mieczysław Rakoczy na czele II plutonu 3. szwadronu 5. Pułku Strzelców Konnych. Dębica, 11 listopada 1938 r."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  </section>
);
