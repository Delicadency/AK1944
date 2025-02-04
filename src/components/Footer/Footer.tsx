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

import { FooterNavigation } from "./FooterNavigation";
import LogoFooter from "./LogoFooter";
import { FooterSupport } from "./FooterSupport";
import { FooterLegalInfo } from "./FooterLegalInfo";
import { FooterSocialMedia } from "./FooterSocialMedia";
import Container from "../shared/Container";

export const Footer = () => {
  return (
    <footer className="w-full bg-greenMain px-6 py-8 text-white">
      <Container>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[minmax(150px,200px)_1fr] md:gap-4 lg:grid lg:grid-cols-[200px_1fr] lg:items-start lg:gap-8">
          {/* First column: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <LogoFooter />
            {/* Social Media only tablet view */}
            <div className="mt-4 md:mt-0 lg:hidden">
              <FooterSocialMedia />
            </div>
          </div>

          {/* Second column: Navigation, Social Media, Support */}
          <div className="flex flex-col lg:gap-8">
            {/* Navigation and  Social Media on desktop view */}
            <div className="flex flex-col md:justify-start lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
              <FooterNavigation />
              {/* Social Media in one row with Navigation on desktop */}
              <div className="hidden lg:block">
                <FooterSocialMedia />
              </div>
            </div>

            {/* Support section */}
            <div className="mt-6 md:mt-8 lg:mt-0">
              <FooterSupport />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-4 h-[1px] w-full bg-white md:my-8" />

        {/* Legal Info */}
        <FooterLegalInfo />
      </Container>
    </footer>
  );
};
