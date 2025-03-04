import ContrastSwitcher from "../../Switcher/ContrastSwitcher";
import { HeaderLogo } from "../HeaderLogo";
import { Button } from "../../shared/Button/Button";
import { firstNav, secondNav } from "@/data/headerData";
import { HeaderNavigation } from "./HeaderNavigation";
import { Routes } from "@/routes";

export const HeaderTabAndDesktop = () => (
  <div className="flex items-center justify-between gap-2 py-5">
    <HeaderLogo aria-label="Logo strony głównej" />

    <div
      className="flex flex-col gap-6"
      aria-label="Sekcja głównych linków nawigacyjnych"
    >
      <HeaderNavigation navItems={firstNav} />
      <HeaderNavigation navItems={secondNav} baseIndex={4} />
    </div>

    <div
      className="flex flex-col-reverse gap-4 desktop:flex-row desktop:items-center desktop:gap-10"
      aria-label="Przełącznik kontrastu i przycisku wsparcia"
    >
      <Button
        label="Wesprzyj"
        ariaDescription="Kliknij, aby wesprzeć fundację"
        href={Routes.SUPPORT}
        aria-label="Kliknij, aby przejść do strony wsparcia"
      />
      <ContrastSwitcher aria-label="Przełącznik kontrastu" />
    </div>
  </div>
);
