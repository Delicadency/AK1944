import { Heading } from "@/components/shared/Heading/Heading";
import { beginningsSection } from "@/data/historyData";

const { beginningsTitle, content } = beginningsSection;

export const BeginningsSection = () => (
  <section className="flex flex-col gap-6">
    <Heading variant="h4" color="green" contrast="yellow">
      {beginningsTitle}
    </Heading>
    <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast desktop:flex-row">
      {content.map((paragraph, index) => (
        <p key={index} className="w-1/2">
          {paragraph}
        </p>
      ))}
    </div>
  </section>
);
