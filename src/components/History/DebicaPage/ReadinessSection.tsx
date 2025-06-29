import { Heading } from "@/components/shared/Heading/Heading";
import { readinessSection } from "@/data/historyData";

const { readinessTitle, content } = readinessSection;

export const ReadinessSection = () => (
  <section className="flex flex-col gap-6">
    <Heading variant="h4" color="green" contrast="yellow">
      {readinessTitle}
    </Heading>
    <div className="flex flex-col gap-6 text-lg desktop:flex-row">
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </section>
);
