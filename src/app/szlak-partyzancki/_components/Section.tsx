import { Button } from "@/components/shared/Button/Button";
import { Heading } from "@/components/shared/Heading/Heading";
import { Routes } from "@/routes";

type SectionProps = {
  headingTitle: string;
  text: string;
  sectionName: "Geneza" | "Rajdy";
};

export const Section = ({ headingTitle, text, sectionName }: SectionProps) => {
  const link = sectionName === "Geneza" ? Routes.ORIGIN : Routes.RAIDS;

  return (
    <section>
      <Heading color="green" contrast="yellow">
        {headingTitle}
      </Heading>
      <p>{text}</p>
      <Button
        label="Sprawdź"
        ariaDescription={`Przejdź do strony ${sectionName}`}
        variant="secondary"
        href={link}
      />
    </section>
  );
};
