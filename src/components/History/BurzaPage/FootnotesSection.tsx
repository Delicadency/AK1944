import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

const { footnotesTitle, footnotes } = historyData.burza;

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
    <ul className="flex flex-col gap-4 font-courier">
      {footnotes.map((note, index) => (
        <li key={index}>
          <p>{note}</p>
        </li>
      ))}
    </ul>
  </section>
);
