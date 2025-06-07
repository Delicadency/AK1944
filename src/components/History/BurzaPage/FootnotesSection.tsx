import { footnotesSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

const { footnotesTitle, footnotes } = footnotesSection;

export const FootnotesSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading
      variant="h4"
      color="green"
      contrast="yellow"
      className="justify-self-start"
    >
      {footnotesTitle}
    </Heading>
    <ol className="flex flex-col gap-4 font-courier">
      {footnotes.map((footnote, index) => (
        <li key={index}>
          <p>{footnote}</p>
        </li>
      ))}
    </ol>
  </section>
);
