import { Fragment, useState } from "react";
import { ActiveLink } from "@/components/shared/ActiveLink";
import { customOrder, submenuData } from "@/data/headerData";
import { navData } from "@/data/navigationData";
import { IconChevronDown } from "@/icons/IconChevronDown";
import { cn } from "@/utils";

export const HeaderMobileNavigation = () => {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

  const orderedNavData = customOrder.map((index) => navData[index]);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const navClasses =
    "text-16 text-backgroundMain transition duration-300 ease-in-out active:text-blue contrast:text-black00";

  return (
    <nav aria-label="Główna nawigacja">
      <ul className="flex flex-col gap-5">
        {orderedNavData.map(({ href, label }, index) => (
          <Fragment key={index}>
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
                    className={cn(
                      "ml-1 size-5 transform transition duration-300 ease-in-out",
                      openSubmenuIndex === index && "rotate-180",
                    )}
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
                  className={cn(
                    "ml-4 flex flex-col gap-3 overflow-hidden transition-all duration-500 ease-in-out",
                    openSubmenuIndex === index ? "max-h-screen" : "max-h-0",
                  )}
                  data-testid={`submenu-${index}`}
                  aria-hidden={openSubmenuIndex !== index}
                  style={{
                    pointerEvents: openSubmenuIndex === index ? "auto" : "none",
                  }}
                >
                  {submenuData[index]?.map(
                    ({ href: subHref, label: subLabel }, subIndex: number) => (
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
                data-testid="separator"
              />
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};
