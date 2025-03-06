import { Button } from "../../shared/Button/Button";
import Container from "../../shared/Container";
import ContrastSwitcher from "../../Switcher/ContrastSwitcher";
import IconXCircle from "@/icons/IconXCircle";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderMobileNavigation } from "./HeaderMobileNavigation";
import { SocialMediaTray } from "@/components/shared/SocialMedia/SocialMediaTray";
import { Routes } from "@/routes";

interface HeaderMobileMenuProps {
  onClose: () => void;
}

export const HeaderMobileMenu = ({ onClose }: HeaderMobileMenuProps) => (
  <Container>
    <div
      className="relative h-full w-full bg-greenB contrast:bg-yellowContrast"
      aria-label="Menu"
      aria-roledescription="Menu"
    >
      <div className="mt-5 flex content-center justify-around">
        <HeaderLogo />

        <p
          className="h-8 w-[135px] text-center font-courier text-14 text-white contrast:text-black00"
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

      <div className="flex items-center justify-center gap-6 py-8">
        <Button
          label="Wesprzyj"
          ariaDescription="Kliknij, aby wesprzeć fundację"
          href={Routes.SUPPORT}
          className="self-center"
        />
        <ContrastSwitcher />
      </div>
    </div>
  </Container>
);
