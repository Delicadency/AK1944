import { useState, useRef } from "react";
import { ActiveLink } from "../shared/ActiveLink";
import { cn } from "@/utils";
import FontSwitcher from "../Switcher/FontSwitcher";
import ContrastSwitcher from "../Switcher/ContrastSwitcher";
import { navData } from "@/data/navigationData";
import { HeaderLogo } from "./HeaderLogo";
import { Button } from "../shared/Button/Button";
import { IconChevronDown } from "@/icons/IconChevronDown";
import { submenuTabDeskData, firstNav, secondNav } from "@/data/headerData";
import { useClickOutside } from "@/hooks/useClickOutside";

export const HeaderTabAndDesktop = () => {
  const classes =
    "contrast:text-black00 hover:text-yellowVintage leading-6 transition duration-300 ease-in-out active:text-blue";

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubMenuLinkClick = () => {
    setOpenIndex(null);
  };

  useClickOutside(menuRef, () => setOpenIndex(null));

  const renderNav = (navItems: typeof navData, baseIndex = 0) => (
    <nav aria-label="Główna nawigacja">
      <ul
        className="flex flex-row justify-center gap-6 desktop:gap-[80px]"
        aria-label="Lista głównych linków nawigacyjnych"
      >
        {navItems.map((item, index) => {
          const actualIndex = baseIndex + index;
          const subMenuData = submenuTabDeskData[actualIndex] || null;

          return (
            <li
              key={actualIndex}
              className="relative"
              aria-label={`Element menu: ${item.label}`}
            >
              <ActiveLink
                className={cn(
                  classes,
                  "text-16 text-white",
                  actualIndex === 0 || actualIndex === 4 || actualIndex === 5
                    ? "flex items-center gap-2 tablet:relative"
                    : "",
                )}
                href={item.href}
                onClick={(e) => {
                  if (subMenuData) {
                    e.preventDefault();
                    handleToggle(actualIndex);
                  } else {
                    setOpenIndex(null);
                  }
                }}
                aria-label={`Przejdź do ${item.label}`}
                aria-expanded={
                  subMenuData ? openIndex === actualIndex : undefined
                }
                aria-haspopup="menu"
              >
                {item.label}
                {subMenuData && (
                  <IconChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300 ease-in-out desktop:h-5 desktop:w-5",
                      openIndex === actualIndex ? "rotate-180" : "rotate-0",
                    )}
                    aria-hidden="true"
                  />
                )}
              </ActiveLink>
              {subMenuData && openIndex === actualIndex && (
                <ul
                  className="absolute z-50 mt-2 flex w-[243px] flex-col gap-5 bg-greenB p-4 shadow-lg contrast:bg-yellowContrast"
                  aria-label={`Podmenu dla ${item.label}`}
                >
                  {subMenuData.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="mb-2"
                      aria-label={`Podmenu: ${subItem.label}`}
                    >
                      <ActiveLink
                        href={subItem.href}
                        className="text-16 text-white transition duration-300 ease-in-out hover:text-yellowVintage active:text-blue contrast:text-black00"
                        onClick={handleSubMenuLinkClick}
                        aria-label={`Przejdź do ${subItem.label}`}
                      >
                        {subItem.label}
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <div ref={menuRef} className="mt-6 flex justify-between desktop:mt-5">
      <HeaderLogo aria-label="Logo strony głównej" />
      <div
        className="flex flex-col gap-6"
        aria-label="Sekcja głównych linków nawigacyjnych"
      >
        {renderNav(firstNav)}
        {renderNav(secondNav, 4)}
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
