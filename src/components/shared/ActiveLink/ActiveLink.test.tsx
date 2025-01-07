import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import "@testing-library/jest-dom";
import { ActiveLink } from ".";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: jest.fn(({ children, ...props }) => <a {...props}>{children}</a>),
}));

const mockedUsePathname = usePathname as jest.Mock;

describe("ActiveLink", () => {
  beforeEach(() => {
    mockedUsePathname.mockReset();
  });

  it("renders children passed to it", () => {
    render(<ActiveLink href="/path">Home</ActiveLink>);

    expect(screen.getByText("Home")).toBeVisible();
  });

  it("applies active class when the path is an exact match", () => {
    mockedUsePathname.mockReturnValue("/path");
    render(
      <ActiveLink href="/path" activeClassName="active">
        Home
      </ActiveLink>,
    );

    expect(screen.getByText("Home")).toHaveClass("active");
  });

  it("does not apply active class when the path does not match exactly and 'exact' is true", () => {
    mockedUsePathname.mockReturnValue("/path/sub-path");
    render(
      <ActiveLink href="/path" activeClassName="active" exact>
        Home
      </ActiveLink>,
    );

    expect(screen.getByText("Home")).not.toHaveClass("active");
  });

  it("applies active class when the path is not an exact match and 'exact' is false", () => {
    mockedUsePathname.mockReturnValue("/path/sub-path");
    render(
      <ActiveLink href="/path" activeClassName="active" exact={false}>
        Home
      </ActiveLink>,
    );

    expect(screen.getByText("Home")).toHaveClass("active");
  });

  it("handles href as an object", () => {
    mockedUsePathname.mockReturnValue("/path");
    render(
      <ActiveLink
        href={{ pathname: "/path", query: { key: "value" } }}
        activeClassName="active"
      >
        Home
      </ActiveLink>,
    );

    expect(screen.getByText("Home")).toHaveClass("active");
  });

  it("applies provided custom styles", () => {
    render(
      <ActiveLink href="/path" className="custom-class">
        Home
      </ActiveLink>,
    );

    expect(screen.getByText("Home")).toHaveClass("custom-class");
  });
});
