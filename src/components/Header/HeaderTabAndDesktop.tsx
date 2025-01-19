import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/utils";
import { HeaderLogo } from "./HeaderLogo";
import FontSwitcher from "../Switcher/FontSwitcher";
import ContrastSwitcher from "../Switcher/ContrastSwitcher";
import { Button } from "../shared/Button/Button";
import {
  navData,
  homeArmyUnionNavData,
  historyNavData,
  partisanTrailData,
} from "@/data/navigationData";
import { IconChevronDown } from "@/icons/IconChevronDown";

export const HeaderTabAndDesktop = () => {
  const firstNav = navData.slice(0, 4);
  const secondNav = navData.slice(4, 8);
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

  const getSubMenuData = (index: number) => {
    if (index === 0) return homeArmyUnionNavData;
    if (index === 4) return historyNavData;
    if (index === 5) return partisanTrailData;
    return null;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderNav = (navItems: typeof navData, baseIndex = 0) => (
    <nav>
      <ul className="flex flex-row justify-center gap-6 desktop:gap-[80px]">
        {navItems.map((item, index) => {
          const actualIndex = baseIndex + index;
          const subMenuData = getSubMenuData(actualIndex);

          return (
            <li key={actualIndex} className="relative">
              <Link
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
              >
                {item.label}
                {subMenuData && (
                  <IconChevronDown className="h-4 w-4 desktop:h-5 desktop:w-5" />
                )}
              </Link>
              {subMenuData && openIndex === actualIndex && (
                <ul className="contrast:bg-yellowContrast absolute z-50 mt-2 flex w-[243px] flex-col gap-5 bg-greenB p-4 shadow-lg">
                  {subMenuData.map((subItem, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      <Link
                        href={subItem.href}
                        className="text-16 text-white transition duration-300 ease-in-out hover:text-yellowVintage contrast:text-black00"
                        onClick={handleSubMenuLinkClick}
                      >
                        {subItem.label}
                      </Link>
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
      <HeaderLogo />
      <div className="flex flex-col gap-6">
        {renderNav(firstNav)}
        {renderNav(secondNav, 4)}
      </div>
      <div className="flex -translate-y-2 flex-col gap-5 desktop:gap-[15px]">
        <div className="flex h-[42px] flex-row desktop:w-[162px] desktop:gap-5">
          <FontSwitcher />
          <ContrastSwitcher />
        </div>
        <Button
          label="Wesprzyj"
          ariaDescription="Kliknij, aby wesprzeć fundację"
          href="/support"
          className="self-end"
        />
      </div>
    </div>
  );
};
