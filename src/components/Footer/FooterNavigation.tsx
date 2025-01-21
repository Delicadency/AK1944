import Link from "next/link";
import { navigationData } from "../../data/footerNavigationData";

export const FooterNavigation = () => {
  return (
    <div className="mb-6 w-full">
      <div className="flex flex-col gap-[20px] md:flex-row md:justify-between">
        {navigationData.map((sectionData, index) => (
          <ul
            key={index}
            className="mb-4 flex flex-col gap-[20px] space-y-4 md:mb-0 md:w-1/2 md:gap-[32px]"
          >
            {sectionData.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.href}
                  aria-label={link.ariaLabel}
                  title={link.title}
                  className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
