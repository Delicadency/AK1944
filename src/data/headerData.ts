import {
  navData,
  homeArmyUnionNavData,
  historyNavData,
  partisanTrailData,
} from "@/data/navigationData";
import { SubmenuItem } from "@/types";

// HeaderMobileMenu.tsx
export const customOrder = [0, 4, 5, 6, 7, 1, 2, 3];
export const submenuData: { [key: number]: SubmenuItem[] } = {
  0: homeArmyUnionNavData,
  1: historyNavData,
  2: partisanTrailData,
};

//HeaderTabAndDesktop.tsx
export const submenuTabDeskData: { [key: number]: SubmenuItem[] } = {
  0: homeArmyUnionNavData,
  4: historyNavData,
  5: partisanTrailData,
};
export const firstNav = navData.slice(0, 4);
export const secondNav = navData.slice(4, 8);
