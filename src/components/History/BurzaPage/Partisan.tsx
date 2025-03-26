import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const Partisan = () => {
  const { partisanTitle, partisan1, partisan2, partisan3 } =
    historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {partisanTitle}
      </Heading>
      <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast desktop:flex-row-reverse">
        <Image
          src="/images/history/burza/battles.webp"
          alt="Ostatnie pożegnanie jednego z poległych żołnierzy AK. Gumniska, 1944 r."
          width={2120}
          height={2950}
          className="m-auto max-w-[450px]"
        />
        <div className="flex flex-col gap-6">
          <p>{partisan1}</p>
          <p>{partisan2}</p>
          <p>{partisan3}</p>
        </div>
      </div>
    </section>
  );
};
