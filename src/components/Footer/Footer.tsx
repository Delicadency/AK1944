import { FooterNavigation } from "./FooterNavigation";
import LogoFooter from "./LogoFooter";
import { FooterSupport } from "./FooterSupport";
import { FooterLegalInfo } from "./FooterLegalInfo";

export const Footer = () => {
  return (
    <div>
      <LogoFooter />
      <FooterNavigation />
      <FooterSupport />
      <FooterLegalInfo />
    </div>
  );
};
