"use client";
import Container from "../shared/Container";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { HeaderTabAndDesktop } from "./HeaderTabletAndDesktop/HeaderTabAndDesktop";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <Spacer>
      <header className="fixed z-20 h-auto w-full bg-greenMain pb-5 contrast:bg-yellowContrast tablet:pb-0">
        <Container>
          {isMobile ? <HeaderMobile /> : <HeaderTabAndDesktop />}
        </Container>
      </header>
    </Spacer>
  );
}

const Spacer = ({ children }: { children: React.ReactNode }) => (
  <div className="h-[80px] tablet:h-[135px]">{children}</div>
);
