import HeaderMenuIcon from "@/icons/HeaderMenuIcon";
import { HeaderLogo } from "./HeaderLogo";

export const HeaderMobile = () => {
  return (
    <div className="mt-5 flex content-center justify-around">
      <HeaderLogo />
      <p className="h-8 w-[135px] text-center font-courier text-14 contrast:text-black00 text-white">
        Światowy Związek Żołnierzy AK
      </p>
      <HeaderMenuIcon className="self-center text-white contrast:text-black00" />
    </div>
  );
};
