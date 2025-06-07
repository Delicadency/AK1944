import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Button } from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { IconName } from "@/types";
import { SectionList } from "./SectionList";
import { RallyData } from "../_models/rallyData";
import { buttons } from "../data/buttonsData";
import { getRallySections } from "../data/rallyRulesSection";

interface RulesProps {
  rally: RallyData;
}

export const ParticipationRules = ({ rally }: RulesProps) => {
  const sections = getRallySections(rally);

  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 tablet:gap-8 tablet:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          {rally.title}
        </Heading>

        <p className="font-lora text-xl font-bold">{rally.date}</p>

        <p className="py-3 text-16 tablet:text-18 font-sourceSans">{rally.invite}</p>

        <div className="grid gap-4 tablet:flex tablet:flex-wrap">
          {buttons.map((btn) => (
            <Button
              key={btn.label}
              label={btn.label}
              iconName={btn.iconName as IconName}
              href={btn.href}
              ariaDescription={btn.label}
              variant="lightGreen"
            />
          ))}
          <Button
            label="Zapisz się na rajd"
            href={""}
            iconName="send"
            ariaDescription="Zapisz się na rajd"
            variant="primaryBlue"
          />
        </div>

        {sections.map((section, index) => (
          <SectionList
            key={index}
            title={section.title}
            href={section.href}
            header={section.header}
            items={section.items}
            listType={section.listType}
          />
        ))}

        <Button
          label="Zapisz się na rajd"
          href={""}
          ariaDescription="Zapisz się na rajd"
          variant="primaryBlue"
          className="mx-auto tablet:mx-0"
        />
      </Container>
    </div>
  );
};
