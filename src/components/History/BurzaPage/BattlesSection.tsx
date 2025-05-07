import { battles } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

const { battlesTitle, battles: content } = battles;

export const BattlesSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {battlesTitle}
    </Heading>
    {content.map((battle, index) => (
      <p key={index}>{battle}</p>
    ))}
  </section>
);
