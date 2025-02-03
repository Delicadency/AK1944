"use client";
import Container from "../shared/Container";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { HeaderTabAndDesktop } from "./HeaderTabletAndDesktop/HeaderTabAndDesktop";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <header className="fixed z-20 h-auto w-full bg-greenMain pb-5 contrast:bg-yellowContrast largeFont:pb-[100px] mediumFont:pb-[60px] tablet:largeFont:pb-0 tablet:mediumFont:pb-0 tablet:pb-0">
      <Container>
        {isMobile ? <HeaderMobile /> : <HeaderTabAndDesktop />}
      </Container>
    </header>
  );
}
