import Container from "@/components/shared/Container";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { HeaderTabAndDesktop } from "./HeaderTabletAndDesktop/HeaderTabAndDesktop";

export const Header = () => (
  <Spacer>
    <header className="fixed z-20 h-auto w-full bg-greenMain pb-5 contrast:bg-yellowContrast tablet:pb-0">
      <Container>
        <HeaderMobile />
        <HeaderTabAndDesktop />
      </Container>
    </header>
  </Spacer>
);

const Spacer = ({ children }: { children: React.ReactNode }) => (
  <div className="h-[80px] tablet:h-[135px]">{children}</div>
);
