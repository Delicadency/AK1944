import { Routes } from "@/routes";
import { type NavItem } from "@/types";

interface NavigationSection {
  section: string;
  links: NavItem[];
}

export const navigationData: NavigationSection[] = [
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
