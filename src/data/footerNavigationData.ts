type NavigationItem = {
  label: string;
  href: string;
  ariaLabel: string;
  title: string;
};

export const navigationData: NavigationItem[] = [
  {
    label: "Związek AK",
    href: "/zwiazek-ak",
    ariaLabel: "Navigate to the Związek AK page",
    title: "Go to the Związek AK page",
  },
  {
    label: "Szlak Partyzancki",
    href: "/szlak-partyzancki",
    ariaLabel: "Navigate to the Szlak Partyzancki page",
    title: "Go to the Szlak Partyzancki page",
  },
  {
    label: "Inwentarz grobów",
    href: "/inwentarz-grobow",
    ariaLabel: "Navigate to the Inwentarz Grobów page",
    title: "Go to the Inwentarz Grobów page",
  },
  {
    label: "Partnerzy",
    href: "/partnerzy",
    ariaLabel: "Navigate to the Partnerzy page",
    title: "Go to the Partnerzy page",
  },
  {
    label: "Wesprzyj",
    href: "/wesprzyj",
    ariaLabel: "Navigate to the Wesprzyj page",
    title: "Go to the Wesprzyj page",
  },
];
