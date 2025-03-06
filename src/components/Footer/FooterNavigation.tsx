import { ActiveLink } from "@/components/shared/ActiveLink";
import { navigationData } from "@/data/footerNavigationData";

export const FooterNavigation = () => (
  <nav className="flex w-full flex-1 flex-col justify-center gap-8 md:flex-row md:items-center md:justify-around">
    {navigationData.map((sectionData, index) => (
      <ul key={index} className="flex flex-col gap-8 lg:flex-row lg:space-x-6">
        {sectionData.links.map((link, linkIndex) => (
          <li key={linkIndex} className="lg:text-center">
            <ActiveLink
              href={link.href}
              aria-label={link.ariaLabel}
              title={link.title}
              className="md:text-lg lg:text-xl"
            >
              {link.label}
            </ActiveLink>
          </li>
        ))}
      </ul>
    ))}
  </nav>
);
