import { FooterNavigation } from "./FooterNavigation";
import LogoFooter from "./LogoFooter";
import { FooterSupport } from "./FooterSupport";
import { FooterLegalInfo } from "./FooterLegalInfo";
import FooterSocialMedia from "./FooterSocialMedia";
import Container from "../shared/Container";

export const Footer = () => {
  return (
    <footer className="w-full max-w-[1200px] bg-[#0A290A] px-6 py-8 text-white">
      <Container>
        <div className="md:py-19 flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="mb-4 flex justify-center">
            <LogoFooter />
          </div>
          <div className="flex flex-col md:ml-[76px] md:mt-[49px] md:w-2/3 md:flex-row md:justify-between">
            <FooterNavigation />
          </div>
        </div>
        <div className="md:mt-[29px] md:flex md:flex-row">
          <FooterSocialMedia />
          <FooterSupport />
        </div>
        {/* Separator */}
        <div className="my-4 h-[1px] w-full bg-white md:my-8" />
        <FooterLegalInfo />
      </Container>
    </footer>
  );
};
