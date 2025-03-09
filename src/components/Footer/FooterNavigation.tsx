import { ActiveLink } from "@/components/shared/ActiveLink";
import { navigationData } from "@/data/footerNavigationData";

export const FooterNavigation = () => (
  <nav className="flex w-full flex-1 flex-col justify-center gap-8 md:flex-row md:items-center md:justify-around lg:justify-center lg:space-x-6 xl:space-x-8">
    {navigationData.map(({ links }, index) => (
      <NavigationSection key={index} links={links} />
    ))}
  </nav>
);

interface NavigationSectionProps {
  links: (typeof navigationData)[number]["links"];
}

const NavigationSection = ({ links }: NavigationSectionProps) => (
  <ul className="flex flex-col gap-8 lg:flex-row lg:space-x-6 xl:space-x-8">
    {links.map(({ label, href }, index) => (
      <li key={index} className="lg:text-center">
        <ActiveLink
          href={href}
          aria-label={`Przejdź do strony ${label}`}
          className="md:text-lg lg:text-xl"
        >
          {label}
        </ActiveLink>
      </li>
    ))}
  </ul>
);
