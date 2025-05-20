import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { regimentTitle, regiment1 } = historyData.regiment;

export const RegimentSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {regimentTitle}
    </Heading>
    <div className="flex flex-col gap-6">
      <p>{regiment1}</p>
    </div>
    <div className="flex justify-center gap-6">
      <Image
        src="/images/history/regiment/review.webp"
        alt="Dowódca 5. Pułku Strzelców Konnych, płk Kazimierz Kosiarski dokonuje przeglądu oddziałów podczas ostatniego przed wybuchem wojny święta pułku. Dębica, 9 czerwca 1939 r."
        width={604}
        height={428}
      />
      <Image
        src="/images/history/regiment/regiment.webp"
        alt="Musztra paradna podczas święta 5. Pułku Strzelców Konnych w Dębicy w 1938 r."
        width={604}
        height={428}
        className="mobile:hidden desktop:block"
      />
    </div>
  </section>
);
