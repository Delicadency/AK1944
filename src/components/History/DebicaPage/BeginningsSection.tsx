import { Heading } from "@/components/shared/Heading/Heading";
import { historyData } from "@/data/historyData";

const { beginningsTitle, beginnings1, beginnings2 } = historyData.debica;

export const BeginningsSection = () => (
  <section className="flex flex-col gap-6">
    <Heading variant="h4" color="green" contrast="yellow">
      {beginningsTitle}
    </Heading>
    <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast desktop:flex-row">
      <p>{beginnings1}</p>
      <p>{beginnings2}</p>
    </div>
  </section>
);
