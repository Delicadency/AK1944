"use client";
import Container from "../shared/Container";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { HeaderTabAndDesktop } from "./HeaderTabletAndDesktop/HeaderTabAndDesktop";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <header className="fixed z-20 h-[80px] w-full bg-greenMain contrast:bg-yellowContrast tablet:h-[148px] desktop:h-[140px]">
      <Container>
        {isMobile ? <HeaderMobile /> : <HeaderTabAndDesktop />}
      </Container>
    </header>
  );
}
