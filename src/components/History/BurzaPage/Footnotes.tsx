import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

export const Footnotes = () => {
  console.log(historyData.burza.footnotes);
  const { footnotesTitle, footnotes } = historyData.burza ?? {};
  return (
    <>
      <Heading
        variant="h4"
        color="green"
        contrast="yellow"
        className="justify-self-start"
      >
        {footnotesTitle}
      </Heading>
      <ul className="flex flex-col gap-4">
        {footnotes.map((note, index) => (
          <li key={index}>
            <p className="font-mono">{note}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
