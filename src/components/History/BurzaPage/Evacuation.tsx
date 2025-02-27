import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

export const Evacuation = () => {
  const {
    evacuationTitle,
    evacuation1,
    evacuation2,
    evacuation3,
    evacuation4,
    evacuation5,
    evacuation6,
  } = historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {evacuationTitle}
      </Heading>
      <p className="text-lg contrast:text-yellowContrast">{evacuation1}</p>
      <p className="text-lg contrast:text-yellowContrast">{evacuation2}</p>
      <p className="text-lg contrast:text-yellowContrast">{evacuation3}</p>
      <p className="text-lg contrast:text-yellowContrast">{evacuation4}</p>
      <p className="text-lg contrast:text-yellowContrast">{evacuation5}</p>
      <p className="text-lg contrast:text-yellowContrast">{evacuation6}</p>
    </section>
  );
};
