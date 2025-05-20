import { Heading } from "@/components/shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import Image from "next/image";

const {
  bilgorajTitle,
  bilgoraj1,
  bilgoraj2,
  bilgoraj3,
  bilgoraj4,
  bilgoraj5,
  bilgoraj6,
  bilgoraj7,
  bilgoraj8,
} = historyData.regiment;

export const BilgorajSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {bilgorajTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <p>{bilgoraj1}</p>
        <p>{bilgoraj2}</p>
        <p>{bilgoraj3}</p>
      </div>
      <Image
        src="/images/history/regiment/patrol.webp"
        alt="Patrol 5. Pułku Strzelców Konnych podczas ćwiczeń letnich w rejonie Istebnej w 1936 r. Na lancach proporce szmaragdowo-białe z amarantowym paskiem w środku."
        width={604}
        height={470}
        className="m-auto"
      />
    </div>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <p>{bilgoraj4}</p>
        <p>{bilgoraj5}</p>
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <p>{bilgoraj6}</p>
        <p>{bilgoraj7}</p>
        <p>{bilgoraj8}</p>
      </div>
    </div>
  </section>
);
