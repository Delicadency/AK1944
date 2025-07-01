import { render, screen, fireEvent } from "@testing-library/react";
import { HeaderMobile } from "../HeaderMobile";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

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
    expect(
      screen.getByText("Światowy Związek Żołnierzy AK"),
    ).toBeInTheDocument();
  });

  it("renders the text with correct classes", () => {
    render(<HeaderMobile />);
    expect(screen.getByText("Światowy Związek Żołnierzy AK")).toHaveClass(
      "h-10 w-[135px] text-center font-courier text-14 text-white",
    );
  });

  it("renders the menu button", () => {
    render(<HeaderMobile />);
    const menuButton = screen.getByTestId("button");
    expect(menuButton).toBeInTheDocument();
  });

  it("renders the menu with correct classes", () => {
    render(<HeaderMobile />);
    expect(screen.getByTestId("mobile-menu")).toHaveClass(
      "fixed right-0 top-0 z-50 h-full w-full transform transition-transform duration-300 ease-in-out",
    );
  });

  it("toggles the mobile menu when clicking the menu button", () => {
    render(<HeaderMobile />);
    const menuButton = screen.getByTestId("button");
    expect(screen.queryByTestId("mobile-menu")).toHaveClass("translate-x-full");
    fireEvent.click(menuButton);
    expect(screen.getByTestId("mobile-menu")).not.toHaveClass(
      "translate-x-full",
    );
    fireEvent.click(menuButton);
    expect(screen.queryByTestId("mobile-menu")).toHaveClass("translate-x-full");
  });
  it("does not have any accessibility violations (axe)", async () => {
    const { container } = render(<HeaderMobile />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
