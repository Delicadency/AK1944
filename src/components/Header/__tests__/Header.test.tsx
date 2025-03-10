import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header component", () => {
  it("renders the header container", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders HeaderMobile when on a mobile screen", async () => {
    render(<Header />);

    expect(screen.getByTestId("header-mobile")).toBeInTheDocument();
    expect(screen.getByTestId("header-mobile")).toBeVisible();

    expect(screen.queryByTestId("header-tab-desktop")).toBeInTheDocument();
    expect(screen.queryByTestId("header-tab-desktop")).toHaveClass("hidden");
  });

  it("renders HeaderTabAndDesktop when on a tablet or desktop screen", () => {
    render(<Header />);

    expect(screen.getByTestId("header-tab-desktop")).toBeInTheDocument();
    expect(screen.getByTestId("header-tab-desktop")).toBeVisible();

    expect(screen.queryByTestId("header-mobile")).toBeInTheDocument();
    expect(screen.queryByTestId("header-mobile")).toHaveClass("tablet:hidden");
  });
});
