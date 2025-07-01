import Container from "@/components/shared/Container";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { HeaderTabAndDesktop } from "./HeaderTabletAndDesktop/HeaderTabAndDesktop";

export const Header = () => (
  <Spacer>
    <header className="fixed z-20 h-20 w-screen bg-greenMain pb-5 tablet:h-[136px] tablet:pb-0">
      <Container>
        <HeaderMobile />
        <HeaderTabAndDesktop />
      </Container>
    </header>
  </Spacer>
);

const Spacer = ({ children }: { children: React.ReactNode }) => (
  <div className="h-[80px] tablet:h-[136px]">{children}</div>
);
