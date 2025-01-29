import { useRef } from "react";
import FontSwitcher from "../../Switcher/FontSwitcher";
import ContrastSwitcher from "../../Switcher/ContrastSwitcher";
import { HeaderLogo } from "../HeaderLogo";
import { Button } from "../../shared/Button/Button";
import { firstNav, secondNav } from "@/data/headerData";
import { HeaderNavigation } from "./HeaderNavigation";

export const HeaderTabAndDesktop = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={menuRef} className="mt-6 flex justify-between desktop:mt-5">
      <HeaderLogo aria-label="Logo strony głównej" />
      <div
        className="flex flex-col gap-6"
        aria-label="Sekcja głównych linków nawigacyjnych"
      >
        <HeaderNavigation navItems={firstNav} />
        <HeaderNavigation navItems={secondNav} baseIndex={4} />
      </div>
      <div
        className="flex -translate-y-2 flex-col gap-5 desktop:gap-[15px]"
        aria-label="Sekcja przełączników i przycisku wsparcia"
      >
        <div
          className="flex h-[42px] flex-row desktop:w-[162px] desktop:gap-5"
          aria-label="Przełączniki czcionki i kontrastu"
        >
          <FontSwitcher aria-label="Przełącznik wielkości czcionki" />
          <ContrastSwitcher aria-label="Przełącznik kontrastu" />
        </div>
        <Button
          label="Wesprzyj"
          ariaDescription="Kliknij, aby wesprzeć fundację"
          href="/support"
          className="self-end"
          aria-label="Kliknij, aby przejść do strony wsparcia"
        />
      </div>
    </div>
  );
};
