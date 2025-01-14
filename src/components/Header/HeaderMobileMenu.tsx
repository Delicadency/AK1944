import { HeaderLogo } from "./HeaderLogo";

export const HeaderMobileMenu = () => {
  return (
    <div className="h-full w-full bg-greenB z-50">
      <div className="mt-5 flex content-center justify-around">
        <HeaderLogo />
        <p className="h-8 w-[135px] text-center font-courier text-14 text-white contrast:text-black00">
          Światowy Związek Żołnierzy AK
        </p>
      </div>
    </div>
  );
};
