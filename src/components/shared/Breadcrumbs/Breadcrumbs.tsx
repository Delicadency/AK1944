"use client";

import { usePathname } from "next/navigation";
import IconBackHome from "@/icons/IconBackHome";
import clsx from "clsx";
import Link from "next/link";

interface BreadcrumbProps {
  iconFill?: "green" | "white";
}

const Breadcrumbs = ({ iconFill = "green" }: BreadcrumbProps) => {
  const iconFillColor = {
    green: "fill-greenMain",
    white: "fill-white",
  };

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const generatePreviousPath = (index: number) =>
    "/" + pathSegments.slice(0, index).join("/");

  return (
    <nav>
      <ol className="flex flex-row items-center">
        <li className="flex flex-row items-center justify-center">
          <Link href="/">
            <IconBackHome className={clsx(iconFillColor[iconFill])} />
          </Link>
          <span className="mx-2 text-greenMain">{">"}</span>
        </li>
        {pathSegments.map((_, index) => (
          <li key={index} className="flex items-center">
            <Link
              href={generatePreviousPath(index)}
              className="capitalize text-gray-700 hover:text-green-600"
            >
              {generatePreviousPath(index) === "" ||
              generatePreviousPath(index) === "/"
                ? "Światowy Związek Żołnierzy AK"
                : pathSegments[index - 1]}
            </Link>
            <span className="mx-2">{">"}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

//todo: replace to a proper Breadcrumbs component - https://app.clickup.com/t/8697w2c4t
