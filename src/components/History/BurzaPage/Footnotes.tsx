import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { useState } from "react";
import { Button } from "@/components/shared/Button/Button";

export const Footnotes = () => {
  const { footnotesTitle, footnotes } = historyData.burza ?? {};

  const [toggleFootnotes, setToggleFootnotes] = useState(false);

  const handleClick = () => {
    setToggleFootnotes(!toggleFootnotes);
  };
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
      <Button
        label={toggleFootnotes ? "Zwiń tekst" : "Czytaj więcej"}
        ariaDescription={toggleFootnotes ? "Zwiń tekst" : "Czytaj więcej"}
        variant={"secondary"}
        className="m-auto"
        onClick={handleClick}
      />
      {toggleFootnotes && (
        <ul className="flex flex-col gap-4">
          {footnotes.map((note, index) => (
            <li key={index}>
              <p className="font-courier">{note}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
