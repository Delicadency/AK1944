import { commandTransferSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

const { commandTransferTitle, content } = commandTransferSection;

export const CommandTransferSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {commandTransferTitle}
    </Heading>
    {content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </section>
);
