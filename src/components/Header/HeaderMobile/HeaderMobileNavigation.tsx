import { customOrder, submenuData } from "@/data/headerData";
import { navData } from "@/data/navigationData";
import { cn } from "@/utils";
import { NavLink } from "../NavLink";
import { SubmenuToggle } from "../SubmenuToggle";
import { useSubmenuState } from "../useSubmenuState";

export const HeaderMobileNavigation = () => {
  const { toggleSubmenu, isSubmenuOpen } = useSubmenuState();
  const orderedNavData = customOrder.map((index) => navData[index]);

  return (
    <nav aria-label="Główna nawigacja">
      <ul className="flex flex-col">
        {orderedNavData.map(({ href, label }, index) => (
          <NavItem
            key={index}
            href={href}
            label={label}
            index={index}
            isSubmenuOpen={isSubmenuOpen(index)}
            toggleSubmenu={() => toggleSubmenu(index)}
          />
        ))}
      </ul>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  index: number;
  isSubmenuOpen: boolean;
  toggleSubmenu: () => void;
}

const NavItem = ({
  href,
  label,
  index,
  isSubmenuOpen,
  toggleSubmenu,
}: NavItemProps) => {
  const hasSubmenu = !!submenuData[index];

  return (
    <li className="py-3 text-textLight">
      {hasSubmenu ? (
        <>
          <SubmenuToggle
            label={label}
            isOpen={isSubmenuOpen}
            onClick={toggleSubmenu}
            controlsId={`submenu-${index}`}
            className="w-full text-16"
          />
          <Submenu
            items={submenuData[index]}
            index={index}
            isOpen={isSubmenuOpen}
          />
        </>
      ) : (
        <NavLink href={href} label={label} />
      )}
    </li>
  );
};

interface SubmenuProps {
  items: { href: string; label: string }[];
  index: number;
  isOpen: boolean;
}

const Submenu = ({ items, index, isOpen }: SubmenuProps) => (
  <ul
    id={`submenu-${index}`}
    data-testid={`submenu-${index}`}
    className={cn(
      "ml-6 mt-2 space-y-3 overflow-hidden transition-all duration-300",
      isOpen ? "max-h-96" : "mt-0 max-h-0",
    )}
  >
    {items.map((item, subIndex) => (
      <li key={subIndex}>
        <NavLink href={item.href} label={item.label} />
      </li>
    ))}
  </ul>
);
