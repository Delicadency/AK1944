import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

export const BattlesSection = () => {
  const { battlesTitle, battles1, battles2, battles3 } =
    historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
      <Heading variant="h4" color="green" contrast="yellow">
        {battlesTitle}
      </Heading>
      <p>{battles1}</p>
      <p>{battles2}</p>
      <p>{battles3}</p>
    </section>
  );
};
