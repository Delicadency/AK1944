import { Heading } from "@/components/shared/Heading/Heading";
import { historyData } from "@/data/historyData";
export const Readiness = () => {
  const { readinessTitle, readiness1, readiness2 } = historyData.debica ?? {};
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {readinessTitle}
      </Heading>
      <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast desktop:flex-row">
        <p>{readiness1}</p>
        <p>{readiness2}</p>
      </div>
    </section>
  );
};
