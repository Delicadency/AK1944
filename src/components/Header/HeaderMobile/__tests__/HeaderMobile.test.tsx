import { render, screen } from "@testing-library/react";
import { HeaderMobile } from "../HeaderMobile";
// import HeaderMenuIcon from "@/icons/HeaderMenuIcon";

jest.mock("../../HeaderLogo", () => ({
  HeaderLogo: () => <div>Logo</div>,
}));

jest.mock("./../HeaderMobileMenu", () => ({
  HeaderMobileMenu: ({ onClose }: { onClose: () => void }) => (
    <div>
      <button onClick={onClose}>Close Menu</button>
    </div>
  ),
}));

describe("HeaderMobile", () => {
  it("renders the logo", () => {
    render(<HeaderMobile />);
    expect(screen.getByText("Logo")).toBeInTheDocument();
  });

  it("renders the correct text", () => {
    render(<HeaderMobile />);
    expect(screen.getByText("Światowy Związek Żołnierzy AK")).toBeInTheDocument();
  });

 
});
