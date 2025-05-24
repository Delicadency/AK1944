import { cracowBrigadeSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { cracowBrigadeTitle, content } = cracowBrigadeSection;

const firstColumn = content.slice(0, 2);
const secondColumn = content.slice(2);

export const CracowBrigadeSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {cracowBrigadeTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {firstColumn.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <Image
          src="/images/history/regiment/regiment.webp"
          alt="Musztra paradna podczas święta 5. Pułku Strzelców Konnych w Dębicy w 1938 r."
          width={604}
          height={428}
          className="m-auto desktop:hidden"
        />
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {secondColumn.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);
