import Link from "next/link";
import { navigationData } from "../../data/footerNavigationData";

export const FooterNavigation = () => {
  return (
    <nav className="flex w-full flex-1 flex-col justify-center gap-8 md:flex-row md:items-center md:justify-around">
      {navigationData.map((sectionData, index) => (
        <ul
          key={index}
          className="flex flex-col gap-8 lg:flex-row lg:space-x-6"
        >
          {sectionData.links.map((link, linkIndex) => (
            <li key={linkIndex} className="lg:text-center">
              <Link
                href={link.href}
                aria-label={link.ariaLabel}
                title={link.title}
                className="text-base font-normal transition-opacity hover:opacity-80 md:text-18 lg:text-20"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
};
