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
    <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
      <Heading variant="h4" color="green" contrast="yellow">
        {evacuationTitle}
      </Heading>
      <p>{evacuation1}</p>
      <p>{evacuation2}</p>
      <p>{evacuation3}</p>
      <p>{evacuation4}</p>
      <p>{evacuation5}</p>
      <p>{evacuation6}</p>
    </section>
  );
};
