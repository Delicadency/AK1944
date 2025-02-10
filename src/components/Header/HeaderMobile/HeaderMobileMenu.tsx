import * as React from "react";
import { Button } from "../../shared/Button/Button";
import Container from "../../shared/Container";
import FontSwitcher from "../../Switcher/FontSwitcher";
import ContrastSwitcher from "../../Switcher/ContrastSwitcher";
import IconXCircle from "@/icons/IconXCircle";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderMobileNavigation } from "./HeaderMobileNavigation";
import { SocialMediaTray } from "@/components/shared/SocialMedia/SocialMediaTray";

interface HeaderMobileMenuProps {
  onClose: () => void;
}

export const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({
  onClose,
}) => {
  return (
    <Container>
      <div
        className="relative h-full w-full bg-greenB contrast:bg-yellowContrast"
        aria-label="Menu"
        aria-roledescription="Menu"
      >
        <div className="mt-5 flex content-center justify-around">
          <HeaderLogo />

          <p
            className="h-8 w-[135px] text-center font-courier text-14 text-white contrast:text-black00 mediumFont:pb-[70px] largeFont:pb-[110px]"
            aria-label="Światowy Związek Żołnierzy Armii Krajowej"
          >
            Światowy Związek Żołnierzy AK
          </p>

          <button
            className="h-6 w-6"
            type="button"
            aria-label="Zamknij menu"
            onClick={onClose}
          >
            <IconXCircle className="text-greenC transition duration-300 active:scale-110 active:text-backgroundMain contrast:text-black00" />
          </button>
        </div>

        <SocialMediaTray className="flex items-center justify-center gap-4 py-7" />

        <HeaderMobileNavigation />

        <div className="flex flex-col gap-6 py-5">
          <div className="flex h-[42px] flex-row justify-center">
            <FontSwitcher />
            <ContrastSwitcher />
          </div>

          <Button
            label="Wesprzyj"
            ariaDescription="Kliknij, aby wesprzeć fundację"
            href="/wesprzyj"
            className="self-center"
          />
        </div>
      </div>
    </Container>
  );
};
