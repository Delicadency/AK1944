"use client";

import { useCallback, useRef } from "react";
import { submenuTabDeskData } from "@/data/headerData";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useKeyPress } from "@/hooks/useKeyPress";
import { type NavItem } from "@/types";
import { NavLink } from "../NavLink";
import { SubmenuToggle } from "../SubmenuToggle";
import { useSubmenuState } from "../useSubmenuState";

interface HeaderNavigationProps {
  navItems: NavItem[];
  baseIndex?: number;
}

export const HeaderNavigation = ({
  navItems,
  baseIndex = 0,
}: HeaderNavigationProps) => {
  const { toggleSubmenu, closeSubmenu, isSubmenuOpen } = useSubmenuState();
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, closeSubmenu);

  const handleEscapeKey = useCallback(() => {
    closeSubmenu();
  }, [closeSubmenu]);

  useKeyPress("Escape", handleEscapeKey);

  return (
    <nav aria-label="Główna nawigacja" ref={menuRef}>
      <ul
        className="flex flex-row justify-center gap-6 desktop:gap-20"
        aria-label="Lista głównych linków nawigacyjnych"
      >
        {navItems.map((item, index) => {
          const actualIndex = baseIndex + index;
          return (
            <NavItem
              key={actualIndex}
              item={item}
              index={index}
              baseIndex={baseIndex}
              isSubmenuOpen={isSubmenuOpen(actualIndex)}
              toggleSubmenu={() => toggleSubmenu(actualIndex)}
              closeSubmenu={closeSubmenu}
            />
          );
        })}
      </ul>
    </nav>
  );
};

interface NavItemProps {
  item: NavItem;
  index: number;
  baseIndex: number;
  isSubmenuOpen: boolean;
  toggleSubmenu: () => void;
  closeSubmenu: () => void;
}

const NavItem = ({
  item: { label, href },
  index,
  baseIndex,
  isSubmenuOpen,
  toggleSubmenu,
  closeSubmenu,
}: NavItemProps) => {
  const actualIndex = baseIndex + index;
  const subMenuData = submenuTabDeskData[actualIndex] || null;
  const hasSubmenu = !!subMenuData;
  const submenuId = `submenu-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <li className="relative text-white" aria-label={`Element menu: ${label}`}>
      {hasSubmenu ? (
        <SubmenuToggle
          label={label}
          isOpen={isSubmenuOpen}
          onClick={toggleSubmenu}
          controlsId={submenuId}
        />
      ) : (
        <NavLink href={href} label={label} onClick={closeSubmenu} />
      )}

      {hasSubmenu && isSubmenuOpen && (
        <Submenu
          items={subMenuData}
          parentLabel={label}
          onLinkClick={closeSubmenu}
          id={submenuId}
        />
      )}
    </li>
  );
};

interface SubmenuProps {
  items: NavItem[];
  parentLabel: string;
  onLinkClick: () => void;
  id?: string;
}

const Submenu = ({ items, parentLabel, onLinkClick, id }: SubmenuProps) => (
  <ul
    id={id}
    className="absolute z-50 mt-2 flex w-[243px] flex-col gap-5 bg-greenB p-4 shadow-lg contrast:bg-yellowContrast"
    aria-label={`Podmenu dla ${parentLabel}`}
  >
    {items.map(({ label, href }, index) => (
      <li key={index} className="mb-2" aria-label={`Podmenu: ${label}`}>
        <NavLink href={href} label={label} onClick={onLinkClick} />
      </li>
    ))}
  </ul>
);
