import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

export const Partisan = () => {
  const { partisanTitle, partisan1, partisan2, partisan3 } =
    historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {partisanTitle}
      </Heading>
      <p className="text-lg contrast:text-yellowContrast">{partisan1}</p>
      <p className="text-lg contrast:text-yellowContrast">{partisan2}</p>
      <p className="text-lg contrast:text-yellowContrast">{partisan3}</p>
    </section>
  );
};
