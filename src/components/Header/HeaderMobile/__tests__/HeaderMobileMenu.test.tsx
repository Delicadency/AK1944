import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeaderMobileMenu } from "../HeaderMobileMenu";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

jest.mock("../../../shared/Button/Button", () => ({
  Button: jest.fn(({ label, ariaDescription, href, className }) => (
    <a href={href} className={className} aria-label={ariaDescription}>
      {label}
    </a>
  )),
}));

jest.mock("../../HeaderLogo", () => ({
  HeaderLogo: jest.fn(() => <div data-testid="logo" />),
}));

jest.mock("../HeaderSocialMediaLinks", () => ({
  HeaderSocialMediaLinks: jest.fn(() => (
    <div data-testid="linki do mediów społecznościowych" />
  )),
}));

jest.mock("../HeaderMobileNavigation", () => ({
  HeaderMobileNavigation: jest.fn(() => <nav aria-label="Nawigacja mobilna" />),
}));

describe("HeaderMobileMenu", () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    render(<HeaderMobileMenu onClose={onCloseMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the HeaderLogo component", () => {
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("renders the title correctly", () => {
    expect(
      screen.getByText(/światowy Związek Żołnierzy AK/i),
    ).toBeInTheDocument();
  });

  it("renders the close button", () => {
    const closeButton = screen.getByLabelText(/zamknij menu/i);
    expect(closeButton).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const closeButton = screen.getByLabelText(/zamknij menu/i);
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("renders the HeaderSocialMediaLinks component", () => {
    expect(
      screen.getByTestId(/linki do mediów społecznościowych/i),
    ).toBeInTheDocument();
  });

  it("renders the support button with correct label and aria-description", () => {
    const supportButton = screen.getByLabelText(
      /kliknij, aby wesprzeć fundację/i,
    );
    expect(supportButton).toBeInTheDocument();
    expect(supportButton).toHaveTextContent(/wesprzyj/i);
    expect(supportButton).toHaveAttribute("href", "/wesprzyj");
  });

  it("renders the ContrastSwitcher component", () => {
    render(<HeaderMobileMenu onClose={() => {}} />);

    const contrastSwitchers = screen.getAllByTestId("contrast-switcher");
    expect(contrastSwitchers.length).toBeGreaterThan(0);
    expect(contrastSwitchers[0]).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<HeaderMobileMenu onClose={() => {}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
