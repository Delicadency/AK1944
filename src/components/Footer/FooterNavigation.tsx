import Link from "next/link";
import { navigationData } from "./navigationData";

export const FooterNavigation = () => {
  return (
    <div>
      <ul className="desktop:gap-[16px] flex flex-col gap-[8px]">
        {navigationData.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
