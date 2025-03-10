"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { useDisclosure } from "@/hooks/useDisclosure";
import HeaderMenuIcon from "@/icons/HeaderMenuIcon";
import { cn } from "@/utils";
import { HeaderLogo } from "../HeaderLogo";

const HeaderMobileMenu = dynamic(() =>
  import("./HeaderMobileMenu").then((mod) => ({
    default: mod.HeaderMobileMenu,
  })),
);

export const HeaderMobile = () => {
  const { isOpen, toggle, close } = useDisclosure();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    toggle();
    if (!isOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  };

  return (
    <div className="relative tablet:hidden" data-testid="header-mobile">
      <div className="mt-5 flex content-center justify-around">
        <HeaderLogo />
        <p className="h-8 w-[135px] text-center font-courier text-14 text-white contrast:text-black00">
          Światowy Związek Żołnierzy AK
        </p>
        <button
          type="button"
          data-testid="button"
          aria-label="Otwórz menu"
          onClick={handleToggle}
          ref={menuButtonRef}
        >
          <HeaderMenuIcon className="self-center text-white/90 transition duration-300 hover:text-white active:scale-110 contrast:text-black00" />
        </button>
      </div>

      <div
        data-testid="mobile-menu"
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full transform transition-transform duration-300 ease-in-out",
          "bg-greenB contrast:bg-yellowContrast",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {isOpen && <HeaderMobileMenu onClose={close} />}
      </div>
    </div>
  );
};
