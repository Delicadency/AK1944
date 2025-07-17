"use client";

import { usePathname } from "next/navigation";
import IconBackHome from "@/icons/IconBackHome";
import clsx from "clsx";
import Link from "next/link";
import {
  navData,
  homeArmyUnionNavData,
  historyNavData,
  partisanTrailData,
  footerNavData,
} from "@/data/navigationData";
import { IconChevronDown } from "@/icons/IconChevronDown";

const allNavData = [
  ...navData,
  ...homeArmyUnionNavData,
  ...historyNavData,
  ...partisanTrailData,
  ...footerNavData,
];

interface BreadcrumbProps {
  color?: "green" | "white";
  contrastVariant?: "yellow" | "black";
  currentPageLabel?: string;
  homeIconColor?: "green" | "white";
  homeIconContrastVariant?: "yellow" | "black";
}

export const Breadcrumbs = ({
  color = "green",
  contrastVariant = "yellow",
  currentPageLabel,
  homeIconColor = "green",
  homeIconContrastVariant = "yellow",
}: BreadcrumbProps) => {
  const iconHomeColor = homeIconColor ?? color;
  const iconHomeContrast = homeIconContrastVariant ?? contrastVariant;
  const getCircleColor = (
    color: "green" | "white",
    contrastVariant: "yellow" | "black",
  ) => {
    const base = {
      green: "fill-greenMain",
      white: "fill-white",
    };

    const contrast = {
      yellow: "contrast:fill-yellowContrast",
      black: "contrast:fill-black00",
    };

    return clsx(base[color], contrast[contrastVariant]);
  };

  const getHouseStrokeColor = (
    color: "green" | "white",
    contrastVariant: "yellow" | "black",
  ) => {
    const base = {
      green: "stroke-white",
      white: "stroke-greenMain",
    };

    const contrast = {
      yellow: "contrast:stroke-black00",
      black: "contrast:stroke-yellowContrast",
    };

    return clsx(base[color], contrast[contrastVariant]);
  };

  const getIconChevronColor = (
    color: "green" | "white",
    contrastVariant: "yellow" | "black",
  ) => {
    const base = {
      green: "text-greenMain",
      white: "text-white",
    };

    const contrast = {
      yellow: "contrast:text-yellowContrast",
      black: "contrast:text-black00",
    };

    return clsx(base[color], contrast[contrastVariant]);
  };

  const getTextColor = (
    color: "green" | "white",
    contrastVariant: "yellow" | "black",
  ) => {
    const base = {
      green: "text-greenMain",
      white: "text-white",
    };

    const contrast = {
      yellow: "contrast:text-yellowContrast",
      black: "contrast:text-black00",
    };

    return clsx(base[color], contrast[contrastVariant]);
  };

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const generatePreviousPath = (index: number) =>
    "/" + pathSegments.slice(0, index).join("/");

  const getLabelForPath = (path: string) => {
    const navItem = allNavData.find((item) => item.href === path);
    return navItem ? navItem.label : path.split("/").pop();
  };

  return (
    <nav className="pt-10">
      <ol className="flex flex-row items-center gap-2">
        <li className="flex flex-row items-center justify-center">
          <Link href="/" className="flex items-center justify-center gap-2">
            <IconBackHome
              circleClassName={getCircleColor(iconHomeColor, iconHomeContrast)}
              houseClassName={getHouseStrokeColor(
                iconHomeColor,
                iconHomeContrast,
              )}
            />
            <IconChevronDown
              className={clsx(
                getIconChevronColor(color, contrastVariant),
                "-rotate-90",
              )}
            />
          </Link>
        </li>
        {pathSegments.map((_, index) => {
          const previousPath = generatePreviousPath(index);
          if (previousPath === "/") return null;
          return (
            <li
              key={index}
              className="flex h-full flex-row items-center justify-center text-14 capitalize leading-4 tablet:text-18"
            >
              <Link
                href={
                  previousPath === "/zwiazek" ||
                  previousPath === "/szlak-partyzancki"
                    ? "/"
                    : previousPath
                }
                className={clsx(
                  getTextColor(color, contrastVariant),
                  "flex items-center justify-center gap-2",
                )}
              >
                {previousPath === "/zwiazek"
                  ? "Światowy Związek Żołnierzy AK"
                  : getLabelForPath(previousPath.replace("-", " "))}
                <IconChevronDown
                  className={clsx(
                    getIconChevronColor(color, contrastVariant),
                    "-rotate-90",
                  )}
                />
              </Link>
            </li>
          );
        })}
        {currentPageLabel && (
          <li className="text-14 font-semibold capitalize leading-4 tablet:text-18">
            <span className={getTextColor(color, contrastVariant)}>
              {currentPageLabel}
            </span>
          </li>
        )}
      </ol>
    </nav>
  );
};
