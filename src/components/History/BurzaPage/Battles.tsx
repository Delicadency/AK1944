import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

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
    </section>
  );
};
