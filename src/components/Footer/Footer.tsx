import { FooterNavigation } from "./FooterNavigation";
import LogoFooter from "./LogoFooter";
import { FooterSupport } from "./FooterSupport";
import { FooterLegalInfo } from "./FooterLegalInfo";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 w-[95%] max-w-md -translate-x-1/2 rounded-t-xl bg-[#0A290A] px-6 py-8 text-white">
      <div className="flex flex-col items-center">
        <LogoFooter />
        <FooterNavigation />
        <FooterSupport />
        <div className="h-[1px] w-full bg-white" />
        <FooterLegalInfo />
      </div>
    </footer>
  );
};
