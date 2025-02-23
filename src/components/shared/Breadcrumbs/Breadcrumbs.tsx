"use client";

import { usePathname } from "next/navigation";
import IconBackHome from "@/icons/IconBackHome";
import clsx from "clsx";
import Link from "next/link";
import IconChevronRight from "@/icons/IconChevronRight";
import {
  navData,
  homeArmyUnionNavData,
  historyNavData,
  partisanTrailData,
  footerNavData,
} from "@/data/navigationData";

const allNavData = [
  ...navData,
  ...homeArmyUnionNavData,
  ...historyNavData,
  ...partisanTrailData,
  ...footerNavData,
];

interface BreadcrumbProps {
  color?: "green" | "white";
}

export const Breadcrumbs = ({ color = "green" }: BreadcrumbProps) => {
  const iconFillColor = {
    green: "fill-greenMain",
    white: "fill-white",
  };
  const iconChevronColor = {
    green: "stroke-greenMain",
    white: "stroke-white",
  };
  const textColor = {
    green: "text-greenMain",
    white: "text-white",
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
            <IconBackHome className={clsx(iconFillColor[color])} />
            <IconChevronRight className={clsx(iconChevronColor[color])} />
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
                  textColor[color],
                  "flex items-center justify-center gap-2",
                )}
              >
                {previousPath === "/zwiazek"
                  ? "Światowy Związek Żołnierzy AK"
                  : getLabelForPath(previousPath.replace("-", " "))}
                <IconChevronRight className={clsx(iconChevronColor[color])} />
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
