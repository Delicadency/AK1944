import { evacuation } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

const { evacuationTitle, evacuation: content } = evacuation;

export const EvacuationSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {evacuationTitle}
    </Heading>
    {content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </section>
);
