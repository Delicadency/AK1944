import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { useMediaQuery } from "@/hooks/useMediaQuery";

jest.mock("@/hooks/useMediaQuery", () => ({
  useMediaQuery: jest.fn(),
}));

jest.mock("@/components/Header/HeaderMobile/HeaderMobile", () => ({
  HeaderMobile: () => <div data-testid="header-mobile">Header Mobile</div>,
}));

jest.mock("@/components/Header/HeaderTabletAndDesktop/HeaderTabAndDesktop", () => ({
  HeaderTabAndDesktop: () => (
    <div data-testid="header-tab-desktop">Header Tablet/Desktop</div>
  ),
}));

describe("Header component", () => {
  it("renders the header container", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders HeaderMobile when on a mobile screen", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    render(<Header />);

    expect(screen.getByTestId("header-mobile")).toBeInTheDocument();
    expect(screen.queryByTestId("header-tab-desktop")).not.toBeInTheDocument();
  });

  it("renders HeaderTabAndDesktop when on a tablet or desktop screen", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    render(<Header />);

    expect(screen.getByTestId("header-tab-desktop")).toBeInTheDocument();
    expect(screen.queryByTestId("header-mobile")).not.toBeInTheDocument();
  });
});
