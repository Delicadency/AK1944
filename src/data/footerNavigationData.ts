import { Routes } from "@/routes";

export const navigationData = [
  {
    section: "Główna",
    links: [
      {
        label: "Związek AK",
        href: Routes.ABOUT,
        ariaLabel: "Przejdź do strony Związek AK",
        title: "Przejdź do strony Związek AK",
      },
      {
        label: "Szlak Partyzancki",
        href: Routes.PARTISAN_TRAIL,
        ariaLabel: "Przejdź do strony Szlak Partyzancki",
        title: "Przejdź do strony Szlak Partyzancki",
      },
      {
        label: "Inwentarz grobów",
        href: Routes.GRAVES_INVENTORY,
        ariaLabel: "Przejdź do strony Inwentarz Grobów",
        title: "Przejdź do strony Inwentarz Grobów",
      },
    ],
  },
  {
    section: "Informacje",
    links: [
      {
        label: "Partnerzy",
        href: Routes.PARTNERS,
        ariaLabel: "Przejdź do strony Partnerzy",
        title: "Przejdź do strony Partnerzy",
      },
      {
        label: "Kontakt",
        href: Routes.CONTACT,
        ariaLabel: "Przejdź do strony Kontakt",
        title: "Przejdź do strony Kontakt",
      },
      {
        label: "Wesprzyj",
        href: Routes.SUPPORT,
        ariaLabel: "Przejdź do strony Wesprzyj",
        title: "Przejdź do strony Wesprzyj",
      },
    ],
  },
];
