"use client";

import { useEffect, useState } from "react";
import Container from "../shared/Container";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderTabAndDesktop } from "./HeaderTabAndDesktop";

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
    <header className="fixed h-[80px] w-full bg-greenMain contrast:bg-yellowContrast tablet:h-[148px] desktop:h-[140px]">
      <Container>
        {isMobile ? <HeaderMobile /> : <HeaderTabAndDesktop />}
      </Container>
    </header>
  );
}
