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
      <div className="flex flex-col gap-6 desktop:flex-row-reverse">
        <Image
          src="/images/history/burza/battles.jpg"
          alt="debica"
          width={2120}
          height={2950}
          className="m-auto desktop:max-w-[450px]"
        />
        <div className="flex flex-col gap-6">
          <p className="text-lg contrast:text-yellowContrast">{partisan1}</p>
          <p className="text-lg contrast:text-yellowContrast">{partisan2}</p>
          <p className="text-lg contrast:text-yellowContrast">{partisan3}</p>
        </div>
      </div>
    </section>
  );
};
