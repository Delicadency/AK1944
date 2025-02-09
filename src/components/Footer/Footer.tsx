// import { FooterNavigation } from "./FooterNavigation";
// import LogoFooter from "./LogoFooter";
// import { FooterSupport } from "./FooterSupport";
// import { FooterLegalInfo } from "./FooterLegalInfo";
// import FooterSocialMedia from "./FooterSocialMedia";
// import Container from "../shared/Container";

// export const Footer = () => {
//   return (
//     <footer className="w-full bg-[#0A290A] px-6 py-8 text-white">
//       <Container>
//         <div className="md:py-19 flex flex-col md:flex-row md:items-start md:justify-between">
//           <div className="mb-4 flex justify-center">
//             <LogoFooter />
//           </div>
//           <div className="flex flex-col md:ml-[76px] md:mt-[49px] md:w-2/3 md:flex-row md:justify-between lg:items-center lg:ml-6 lg:w-[100%] ">
//             <FooterNavigation />
//             <FooterSocialMedia />
//           </div>
//         </div>
//         <div className="md:mt-[29px] md:flex md:flex-row">
//           <FooterSupport />
//         </div>
//         {/* Separator */}
//         <div className="my-4 h-[1px] w-full bg-white md:my-8" />
//         <FooterLegalInfo />
//       </Container>
//     </footer>
//   );
// }

import Image from "next/image";
import Container from "@/components/shared/Container";
import { SocialMediaTray } from "@/components/shared/SocialMedia/SocialMediaTray";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSupport } from "./FooterSupport";
import { FooterLegalInfo } from "./FooterLegalInfo";

export const Footer = () => {
  return (
    <footer className="w-full bg-greenMain px-6 py-8 text-white">
      <Container>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[minmax(150px,200px)_1fr] md:gap-4 lg:grid lg:grid-cols-[200px_1fr] lg:items-start lg:gap-8">
          <FooterColumn>
            <Logo />
            <SocialMediaTray className="flex gap-4" />
          </FooterColumn>

          <FooterColumn>
            <FooterNavigation />
            <FooterSupport />
          </FooterColumn>
        </div>

        <Divider />

        <FooterLegalInfo />
      </Container>
    </footer>
  );
};

const FooterColumn = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full flex-col items-center justify-between gap-8">
    {children}
  </div>
);

const Logo = () => (
  <Image
    src="/images/LogoFooterDesktop.png"
    alt="Związek AK Logo"
    width={149}
    height={181}
  />
);

const Divider = () => <div className="my-8 h-[1px] w-full bg-white" />;
