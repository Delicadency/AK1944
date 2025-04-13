import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const CracowBrigadeSection = () => {
  const {
    cracowBrigadeTitle,
    cracowBrigade1,
    cracowBrigade2,
    cracowBrigade3,
    cracowBrigade4,
  } = historyData.regiment ?? {};
  return (
    <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
      <Heading variant="h4" color="green" contrast="yellow">
        {cracowBrigadeTitle}
      </Heading>
      <div className="flex flex-col gap-6 desktop:flex-row">
        <div className="flex flex-col gap-6">
          <p>{cracowBrigade1}</p>
          <Image
            src="/images/history/regiment/regiment.webp"
            alt="Musztra paradna podczas święta 5. Pułku Strzelców Konnych w Dębicy w 1938 r."
            width={604}
            height={428}
            className="m-auto tablet:hidden"
          />
          <p>{cracowBrigade2}</p>
        </div>
        <div className="flex flex-col gap-6">
          <p>{cracowBrigade3}</p>
          <p>{cracowBrigade4}</p>
        </div>
      </div>
    </section>
  );
};
