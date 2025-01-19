"use client";

import { useEffect, useState } from "react";
import Container from "../shared/Container";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderTabAndDesktop } from "./HeaderTabAndDesktop";
// import { HeaderMobileMenu } from "./HeaderMobileMenu";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className="contrast:bg-yellowContrast z-20 fixed h-[80px] w-full bg-greenMain tablet:h-[148px] desktop:h-[140px]">
      <Container>
        {isMobile ? <HeaderMobile /> : <HeaderTabAndDesktop />}
      </Container>
    </header>
  );
}
