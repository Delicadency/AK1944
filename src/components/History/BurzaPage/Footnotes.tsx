"use client";
import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { Button } from "@/components/shared/Button/Button";
import { useDisclosure } from "@/hooks/useDisclosure";

export const Footnotes = () => {
  const { footnotesTitle, footnotes } = historyData.burza ?? {};

  const { isOpen, toggle } = useDisclosure();

  const handleClick = () => {
    toggle();
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
        label={isOpen ? "Zwiń tekst" : "Czytaj więcej"}
        ariaDescription={isOpen ? "Zwiń tekst" : "Czytaj więcej"}
        variant={"secondary"}
        className="m-auto"
        onClick={handleClick}
      />
      {isOpen && (
        <ul className="flex flex-col gap-4 font-courier">
          {footnotes.map((note, index) => (
            <li key={index}>
              <p>{note}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
