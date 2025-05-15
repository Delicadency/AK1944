import { Button } from "@/components/shared/Button/Button";
import ContrastSwitcher from "@/components/Switcher/ContrastSwitcher";
import { firstNav, secondNav } from "@/data/headerData";
import { Routes } from "@/routes";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderNavigation } from "./HeaderNavigation";

export const HeaderTabAndDesktop = () => (
  <div
    className="hidden items-center justify-between gap-2 py-5 tablet:flex"
    data-testid="header-tab-desktop"
  >
    <HeaderLogo aria-label="Logo strony głównej" />

    <div
      className="flex flex-col gap-6"
      aria-label="Sekcja głównych linków nawigacyjnych"
    >
      <HeaderNavigation navItems={firstNav} />
      <HeaderNavigation navItems={secondNav} baseIndex={4} />
    </div>

    <div className="flex flex-col-reverse gap-4 desktop:flex-row desktop:items-center desktop:gap-10">
      <Button
        label="Wesprzyj"
        ariaDescription="Kliknij, aby wesprzeć fundację"
        href={Routes.SUPPORT}
        aria-label="Kliknij, aby przejść do strony wsparcia"
        variant="primary"
      />
      <ContrastSwitcher aria-label="Przełącznik kontrastu" />
    </div>
  </div>
);
