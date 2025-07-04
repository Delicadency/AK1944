import { HeaderLogo } from "../HeaderLogo";
import { HeaderMobileMenuWrapper } from "./HeaderMobileMenuWrapper";

export const HeaderMobile = () => (
  <div className="relative h-10 tablet:hidden" data-testid="header-mobile">
    <div className="mt-5 flex content-center justify-around">
      <HeaderLogo />
      <p className="h-10 w-[135px] text-center font-courier text-14 text-white">
        Światowy Związek Żołnierzy AK
      </p>
      <HeaderMobileMenuWrapper />
    </div>
  </div>
);
