import { Heading } from "@/components/shared/Heading/Heading";
import { historyData } from "@/data/historyData";
export const Beginnings = () => {
  const { beginningsTitle, beginnings1, beginnings2 } =
    historyData.debica ?? {};
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {beginningsTitle}
      </Heading>
      <div className="flex flex-col gap-6 desktop:flex-row">
        <p className="text-lg contrast:text-yellowContrast">{beginnings1}</p>
        <p className="text-lg contrast:text-yellowContrast">{beginnings2}</p>
      </div>
    </section>
  );
};
