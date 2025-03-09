import { Routes } from "@/routes";

export const navigationData = [
  {
    section: "Główna",
    links: [
      {
        label: "Związek AK",
        href: Routes.ABOUT,
      },
      {
        label: "Szlak Partyzancki",
        href: Routes.PARTISAN_TRAIL,
      },
      {
        label: "Inwentarz grobów",
        href: Routes.GRAVES_INVENTORY,
      },
    ],
  },
  {
    section: "Informacje",
    links: [
      {
        label: "Partnerzy",
        href: Routes.PARTNERS,
      },
      {
        label: "Kontakt",
        href: Routes.CONTACT,
      },
      {
        label: "Wesprzyj",
        href: Routes.SUPPORT,
      },
    ],
  },
] as const;
