import React, { useState } from "react";
import { ActiveLink } from "../shared/ActiveLink";
import { cn } from "@/utils";
import { Button } from "../shared/Button/Button";
import Container from "../shared/Container";
import FontSwitcher from "../Switcher/FontSwitcher";
import ContrastSwitcher from "../Switcher/ContrastSwitcher";
import IconXCircle from "@/icons/IconXCircle";
import { HeaderLogo } from "./HeaderLogo";
import IconFacebook from "@/icons/IconFacebook";
import IconInstagram from "@/icons/IconInstagram";
import IconYoutube from "@/icons/IconYoutube";
import { IconChevronDown } from "@/icons/IconChevronDown";
import { navData } from "@/data/navigationData";
import { customOrder, submenuData } from "@/data/headerData";
import { SubmenuItem } from "@/types";

interface HeaderMobileMenuProps {
  onClose: () => void;
}

export const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({
  onClose,
}) => {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const orderedNavData = customOrder.map((index) => navData[index]);
  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };
  const navClasses =
    "text-16 text-backgroundMain transition duration-300 ease-in-out active:text-blue contrast:text-black00";

  return (
    <Container>
      <div
        className="relative h-full w-full bg-greenB contrast:bg-yellowContrast"
        aria-label="Menu"
      >
        <div className="mt-5 flex content-center justify-around">
          <HeaderLogo aria-label="Logo" />
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
        <div
          className="flex justify-center gap-4 py-[26px]"
          aria-label="Linki do mediów społecznościowych"
        >
          <a
            href="https://facebook.com/Szlak.Partyzancki/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Oficjalna strona Szlaku Partyzanckiego na Facebooku"
          >
            <IconFacebook />
          </a>
          {/* Do zweryfikowania, czy klient ma konto na instagramie. Jesli nie, podmienić na X */}
          <a
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Oficjalna strona Szlaku Partyzanckiego na Instagramie"
          >
            <IconInstagram />
          </a>
          <a
            href="https://youtube.com/@armiakrajowadebica3809"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Oficjalna strona Armii Krajowej Dębica na YouTube"
          >
            <IconYoutube />
          </a>
        </div>
        <nav aria-label="Główna nawigacja">
          <ul className="flex flex-col gap-5">
            {orderedNavData.map(({ href, label }, index) => (
              <React.Fragment key={index}>
                <li className="text-backgroundMain">
                  {submenuData[index] ? (
                    <button
                      className={cn(
                        navClasses,
                        "flex w-full items-center text-left",
                      )}
                      onClick={() => toggleSubmenu(index)}
                      aria-expanded={openSubmenuIndex === index}
                      aria-controls={`submenu-${index}`}
                      aria-label={`Rozwiń menu ${label}`}
                      aria-haspopup="menu"
                    >
                      <span>{label}</span>
                      <IconChevronDown
                        className={`ml-1 h-5 w-5 transform transition duration-300 ease-in-out ${
                          openSubmenuIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <ActiveLink
                      href={href}
                      className={navClasses}
                      aria-label={`Przejdź do ${label}`}
                    >
                      {label}
                    </ActiveLink>
                  )}
                  {submenuData[index] && (
                    <ul
                      id={`submenu-${index}`}
                      className={`ml-4 flex flex-col gap-3 overflow-hidden transition-all duration-500 ease-in-out ${
                        openSubmenuIndex === index ? "max-h-screen" : "max-h-0"
                      }`}
                      aria-hidden={openSubmenuIndex !== index}
                    >
                      {submenuData[index]?.map(
                        (
                          { href: subHref, label: subLabel }: SubmenuItem,
                          subIndex: number,
                        ) => (
                          <li key={subIndex} className="first:mt-2">
                            <ActiveLink
                              href={subHref}
                              className={navClasses}
                              aria-label={`Przejdź do ${subLabel}`}
                            >
                              {subLabel}
                            </ActiveLink>
                          </li>
                        ),
                      )}
                    </ul>
                  )}
                </li>
                {index === 4 && (
                  <hr
                    className="-translate-y-2 border-t border-backgroundMain contrast:border-black00"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-[22px] py-5">
          <div className="flex h-[42px] flex-row justify-center">
            <FontSwitcher aria-label="Przełącznik wielkości czcionki" />
            <ContrastSwitcher aria-label="Przełącznik kontrastu" />
          </div>
          <Button
            label="Wesprzyj"
            ariaDescription="Kliknij, aby wesprzeć fundację"
            href="/support"
            className="self-center"
          />
        </div>
      </div>
    </Container>
  );
};
