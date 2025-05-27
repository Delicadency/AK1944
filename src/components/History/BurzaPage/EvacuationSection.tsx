import { evacuationSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

const { evacuationTitle, content } = evacuationSection;
const firstPart = content.slice(0, 2);
const secondPart = content.slice(2);

export const EvacuationSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {evacuationTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {firstPart.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {secondPart.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);
