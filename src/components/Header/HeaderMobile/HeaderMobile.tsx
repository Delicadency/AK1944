import { useState } from "react";
import HeaderMenuIcon from "@/icons/HeaderMenuIcon";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { cn } from "@/utils";

export const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="mt-5 flex content-center justify-around">
        <HeaderLogo />
        <p className="h-8 w-[135px] text-center font-courier text-14 text-white contrast:text-black00">
          Światowy Związek Żołnierzy AK
        </p>
        <button type="button" onClick={toggleMenu}>
          <HeaderMenuIcon className="self-center text-white transition duration-300 active:scale-110 active:text-blue contrast:text-black00" />
        </button>
      </div>

      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full transform transition-transform duration-300 ease-in-out",
          "bg-greenB contrast:bg-yellowContrast",
          {
            "translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
          },
        )}
      >
        <HeaderMobileMenu onClose={toggleMenu} />
      </div>
    </div>
  );
};
