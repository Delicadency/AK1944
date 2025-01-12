"use client";

import Container from "../shared/Container";
import { HeaderMobile } from "./HeaderMobile";

export default function Header() {
  return (
    <header className="fixed h-[80px] w-full bg-greenMain contrast:bg-yellow tablet:h-[148px] desktop:h-[140px]">
      <Container>
        <div className="">
          <HeaderMobile />
        </div>
      </Container>
    </header>
  );
}
