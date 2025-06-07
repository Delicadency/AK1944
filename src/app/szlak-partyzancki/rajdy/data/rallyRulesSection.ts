import { LIST_TYPE } from "../_components/SectionList";
import { RallyData } from "../_models/rallyData";

export const getRallySections = (rally: RallyData) => [
  {
    title: "Cele rajdu",
    href: "cele-rajdu",
    header: rally.purpose,
    items: rally.purposeList,
    listType: LIST_TYPE.LETTER,
  },
  {
    title: "Informacja o warunkach uczestnictwa",
    href: "warunki-uczestnictwa",
    items: rally.rulesList,
    listType: LIST_TYPE.NUMBER,
  },
  {
    title: "Warunki turystyczne Szlaku i zalecenia dla uczestników",
    href: "warunki-szlaku",
    items: rally.adviceList,
    listType: LIST_TYPE.DASH,
  },
  {
    title: "Trofea i nagrody",
    href: "nagrody",
    items: rally.rewards,
    listType: LIST_TYPE.DASH,
  },
  {
    title: "Transport i miejsce startu",
    href: "transport",
    header: rally.transportHeader,
    items: rally.transportList,
    listType: LIST_TYPE.NUMBER,
  },
  {
    title: "UWAGA:",
    href: "uwaga",
    header: rally.warning,
  },
  {
    title: "Program rajdu",
    href: "program-rajdu",
    items: rally.programList,
  },
  {
    title: "Organizatorzy",
    href: "organizatorzy",
    items: rally.organizators,
  },
  {
    title: "Partnerzy",
    href: "partnerzy",
    items: rally.partners,
  },
  {
    title: "Zadania przedrajdowe:",
    href: "zadania-przedrajdowe",
    header: rally.taskInfo,
    items: rally.tasks,
  },
];
