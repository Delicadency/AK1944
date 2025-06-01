import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Button } from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { SectionList } from "./SectionList";
import { IconName } from "@/types";

export interface RallyData {
  id: number;
  title: string;
  date: string;
  invite: string;
  purpose: string;
  purposeList: string[];
  rulesList: string[];
  adviceList: string[];
  rewards: string[];
  transportHeader: string;
  transportList: string[];
  warning: string;
  programList: string[];
  organizators: string[];
  partners: string[];
  taskInfo: string;
  tasks: string[];
}

interface RulesProps {
  rally: RallyData;
}

type ButtonLink = {
  iconName: string;
  label: string;
  href: string;
};

const buttons: ButtonLink[] = [
  {
    iconName: "target",
    label: "Cele rajdu",
    href: "/szlak-partyzancki/rajdy/1",
  },
  {
    iconName: "compass",
    label: "Warunki turystyczne szlaku i zalecenia dla uczestników",
    href: "/szlak-partyzancki/rajdy/1",
  },
  {
    iconName: "help",
    label: "Informacja o warunkach uczestnictwa",
    href: "/szlak-partyzancki/rajdy/1",
  },
  {
    iconName: "coffee",
    label: "Operatorzy zapewniają",
    href: "/szlak-partyzancki/rajdy/1",
  },
  {
    iconName: "gift",
    label: "Trofea i nagrody",
    href: "/szlak-partyzancki/rajdy/1",
  },
  {
    iconName: "pin",
    label: "Transport i miejsce startu",
    href: "/szlak-partyzancki/rajdy/1",
  },
  { iconName: "info", label: "UWAGA", href: "/szlak-partyzancki/rajdy/1" },
  {
    iconName: "file",
    label: "Program rajdu",
    href: "/szlak-partyzancki/rajdy/1",
  },
  {
    iconName: "award",
    label: "Organizatorzy",
    href: "/szlak-partyzancki/rajdy/1",
  },
  { iconName: "award", label: "Partnerzy", href: "/szlak-partyzancki/rajdy/1" },
  {
    iconName: "check",
    label: "Zadania przedrajdowe",
    href: "/szlak-partyzancki/rajdy/1",
  },
];

export const ParticipationRules: React.FC<RulesProps> = ({ rally }) => {
  return (
    <div>
      <div className="bg-backgroundMain pb-20 text-greenMain">
        <Container
          as="article"
          className="flex flex-col gap-10 pb-6 tablet:gap-8 tablet:pb-36"
        >
          <Breadcrumbs />
          <Heading variant="h3" color="green" contrast="yellow">
            {rally.title}
          </Heading>

          <div>
            <p className="text-xl font-semibold">{rally.date}</p>
          </div>

          <div className="py-3">
            <p>{rally.invite}</p>
          </div>

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

          <div>
            <p className="mb-3 text-2xl font-semibold">Cele rajdu</p>
            <p>{rally.purpose}</p>
            <SectionList items={rally.purposeList} listType="letter" />
          </div>

          <SectionList
            title="Informacja o warunkach uczestnictwa"
            items={rally.rulesList}
            listType="number"
          />

          <SectionList
            title="Warunki turystyczne Szlaku i zalecenia dla uczestników"
            items={rally.adviceList}
            listType="dash"
          />

          <SectionList
            title="Trofea i nagrody"
            items={rally.rewards}
            listType="dash"
          />

          <div>
            <p className="mb-2 text-2xl font-semibold">
              Transport i miejsce startu
            </p>
            <p>{rally.transportHeader}</p>
            <SectionList items={rally.transportList} listType="number" />
          </div>

          <div>
            <p className="mb-2 text-2xl font-semibold">Uwaga:</p>
            <p>{rally.warning}</p>
          </div>

          <SectionList title="Program rajdu" items={rally.programList} />

          <SectionList title="Organizatorzy" items={rally.organizators} />

          <SectionList title="Partnerzy" items={rally.partners} />

          <div>
            <p className="mb-2 text-2xl font-semibold">Zadania przedrajdowe:</p>
            <p>{rally.taskInfo}</p>
            <SectionList items={rally.tasks} />
          </div>

          <Button
            label="Zapisz się na rajd"
            href={""}
            ariaDescription="Zapisz się na rajd"
            variant="primaryBlue"
            className="mx-auto tablet:mx-0"
          />
        </Container>
      </div>
    </div>
  );
};
