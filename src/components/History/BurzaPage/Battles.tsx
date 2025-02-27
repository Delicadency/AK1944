import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const Battles = () => {
  const { battlesTitle, battles1, battles2, battles3 } =
    historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {battlesTitle}
      </Heading>
      <p className="text-lg contrast:text-yellowContrast">{battles1}</p>
      <p className="text-lg contrast:text-yellowContrast">{battles2}</p>
      <p className="text-lg contrast:text-yellowContrast">{battles3}</p>
      <Image
        src="/images/history/burza/battles.jpg"
        alt="debica"
        width={2120}
        height={2950}
        className="m-auto"
      />
    </section>
  );
};
