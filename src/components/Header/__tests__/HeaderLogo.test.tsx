import { render, screen } from "@testing-library/react";
import { HeaderLogo } from "../HeaderLogo";

describe("HeaderLogo", () => {
  it("renders logo image with correct alt text", () => {
    render(<HeaderLogo />);
    const logo = screen.getByAltText("Logo") as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src");
    expect(logo.src).toContain("%2Fimages%2Flogo.png");
  });

  it("links to the homepage", () => {
    render(<HeaderLogo />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });

  it("has appropriate width based on screen size", () => {
    render(<HeaderLogo />);
    const logoContainer = screen.getByRole("link").parentElement;
    expect(logoContainer).toHaveClass("w-[33px]");
  });

  it("should be accessible by keyboard navigation", () => {
    render(<HeaderLogo />);
    const link = screen.getByRole("link");
    link.focus();
    expect(link).toHaveFocus();
  });
});
