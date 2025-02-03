import Link from "next/link";
import { navigationData } from "../../data/footerNavigationData";

export const FooterNavigation = () => {
  return (
    <div className="mb-6 w-full lg:space-x-5">
      <div className="flex flex-col gap-[20px] md:flex-row lg:gap-[32px]">
        {navigationData.map((sectionData, index) => (
          <ul
            key={index}
            className="mb-4 flex flex-col gap-[20px] space-y-4 md:mb-0 md:w-1/2 md:gap-[32px] lg:w-[100%] lg:flex-row lg:justify-start lg:space-x-6 lg:space-y-0"
          >
            {sectionData.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.href}
                  aria-label={link.ariaLabel}
                  title={link.title}
                  className="text-16 text-base font-normal transition-opacity hover:opacity-80 md:text-18 lg:text-20"
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
