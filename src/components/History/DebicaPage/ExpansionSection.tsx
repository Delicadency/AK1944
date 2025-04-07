import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { historyData } from "@/data/historyData";

export const ExpansionSection = () => {
  const {
    expansionTitle,
    expansion1,
    expansion2,
    expansion3,
    expansion4,
    expansion5,
    expansion6,
    expansion7,
  } = historyData.debica ?? {};

  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {expansionTitle}
      </Heading>
      <div className="flex flex-col gap-6 desktop:flex-row">
        <Image
          src="/images/history/debica/school.webp"
          alt="Szkoła w Gumniskach - siedziba komendy Obwodu ZWZ-AK Dębica."
          width={500}
          height={310}
          className="m-auto desktop:hidden"
        />
        <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
          <div>
            <p>{expansion1}</p>
            <p>{expansion2}</p>
            <p>{expansion3}</p>
          </div>
          <Image
            src="/images/history/debica/people.webp"
            alt="Uśmiechnięci mężczyźni"
            width={500}
            height={310}
            sizes="(max-width: 767px) 200px"
            className="m-auto desktop:hidden"
          />
          <div>
            <p className="mb-6">{expansion4}</p>
            <p>{expansion5}</p>
            <p>{expansion6}</p>
            <p>{expansion7}</p>
          </div>
        </div>
        <div className="hidden shrink-0 flex-col justify-center gap-6 desktop:flex">
          <Image
            src="/images/history/debica/school.webp"
            alt="Szkoła w Gumniskach - siedziba komendy Obwodu ZWZ-AK Dębica."
            width={500}
            height={310}
          />
          <Image
            src="/images/history/debica/people.webp"
            alt="Uśmiechnięci mężczyźni"
            width={500}
            height={310}
          />
        </div>
      </div>
    </section>
  );
};
