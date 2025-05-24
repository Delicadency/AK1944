import { regroupSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

const { regroupTitle, content } = regroupSection;

const firstColumn = content.slice(0, 3);
const secondColumn = content.slice(3);

export const RegroupSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {regroupTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {firstColumn.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {secondColumn.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);
