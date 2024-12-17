import Link from "next/link";
import { navigationData } from "./navigationData";

export const FooterNavigation = () => {
  return (
    <div className="mb-6 w-full">
      <ul className="flex flex-col items-start gap-[20px]">
        {navigationData.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="text-base font-normal transition-opacity hover:opacity-80"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
