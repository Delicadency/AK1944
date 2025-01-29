import { useRef, useState } from "react";
import { cn } from "@/utils";
import { ActiveLink } from "../../shared/ActiveLink";
import { navData } from "@/data/navigationData";
import { submenuTabDeskData } from "@/data/headerData";
import { useClickOutside } from "@/hooks/useClickOutside";
import { IconChevronDown } from "@/icons/IconChevronDown";

type HeaderNavigationProps = {
  navItems: typeof navData;
  baseIndex?: number;
};

export const HeaderNavigation = ({
  navItems,
  baseIndex = 0,
}: HeaderNavigationProps) => {
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

  return (
    <nav aria-label="Główna nawigacja">
      <ul
        className="flex flex-row justify-center gap-6 desktop:gap-[80px]"
        aria-label="Lista głównych linków nawigacyjnych"
      >
        {navItems.map((item, index) => {
          const { label, href } = item;
          const actualIndex = baseIndex + index;
          const subMenuData = submenuTabDeskData[actualIndex] || null;

          return (
            <li
              key={actualIndex}
              className="relative"
              aria-label={`Element menu: ${label}`}
            >
              <ActiveLink
                className={cn(
                  classes,
                  "text-16 text-white",
                  [0, 4, 5].includes(actualIndex)
                    ? "flex items-center gap-2 tablet:relative"
                    : "",
                )}
                href={href}
                onClick={(e) => {
                  if (subMenuData) {
                    e.preventDefault();
                    handleToggle(actualIndex);
                  } else {
                    setOpenIndex(null);
                  }
                }}
                aria-label={`Przejdź do ${label}`}
                aria-expanded={
                  subMenuData ? openIndex === actualIndex : undefined
                }
                aria-haspopup={subMenuData ? "menu" : undefined}
              >
                {label}
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
                  aria-label={`Podmenu dla ${label}`}
                >
                  {subMenuData.map(
                    ({ label: subLabel, href: subHref }, subIndex) => (
                      <li
                        key={subIndex}
                        className="mb-2"
                        aria-label={`Podmenu: ${subLabel}`}
                      >
                        <ActiveLink
                          href={subHref}
                          className="text-16 text-white transition duration-300 ease-in-out hover:text-yellowVintage active:text-blue contrast:text-black00"
                          onClick={handleSubMenuLinkClick}
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
          );
        })}
      </ul>
    </nav>
  );
};
