import { HeaderLogo } from "../HeaderLogo";
import { HeaderMobileMenuWrapper } from "./HeaderMobileMenuWrapper";

export const HeaderMobile = () => (
  <div className="relative tablet:hidden h-10" data-testid="header-mobile">
    <div className="mt-5 flex content-center justify-around">
      <HeaderLogo />
      <p className="h-8 w-[135px] text-center font-courier text-14 text-white contrast:text-black00">
        Światowy Związek Żołnierzy AK
      </p>
      <HeaderMobileMenuWrapper />
    </div>
  </div>
);
