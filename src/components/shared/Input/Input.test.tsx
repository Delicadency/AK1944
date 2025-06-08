import { render, screen } from "@testing-library/react";
import { type DefaultIconProps } from "@/types";
import { Input } from ".";

const MockLeadingIcon = (props: DefaultIconProps) => (
  <svg data-testid="leading-icon" {...props}>
    <path d="M0 0h24v24H0z" />
  </svg>
);

const MockTrailingIcon = (props: DefaultIconProps) => (
  <svg data-testid="trailing-icon" {...props}>
    <path d="M0 0h24v24H0z" />
  </svg>
);

describe("Input", () => {
  it("renders with default props", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("assigns class names by properties", () => {
    render(<Input color="error" />);

    expect(screen.getByRole("textbox")).toHaveClass(
      "text-redMain ring-redError placeholder:text-redError",
    );
  });

  it("applies default class names when no props are provided", () => {
    render(<Input />);

    expect(screen.getByRole("textbox")).toHaveClass(
      "col-start-1 row-start-1 block w-full rounded-md border-0 bg-white px-3 py-1.5 ring-1 ring-inset transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-inset sm:text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed",
      "text-greenMain ring-border placeholder:text-border focus:ring-greenMain",
    );
  });

  it("injects native input properties", () => {
    render(<Input aria-label="Type here" placeholder="Enter text" disabled />);
    const input = screen.getByLabelText("Type here");
    expect(input).toBeVisible();
    expect(input).toHaveAttribute("placeholder", "Enter text");
    expect(input).toBeDisabled();
  });

  it("renders with leading and trailing icons", () => {
    render(
      <Input
        leadingIcon={MockLeadingIcon}
        trailingIcon={MockTrailingIcon}
        aria-label="Input with icons"
      />,
    );

    const leadingIcon = screen.getByTestId("leading-icon");
    const trailingIcon = screen.getByTestId("trailing-icon");

    expect(leadingIcon).toHaveClass(
      "col-start-1 row-start-1 self-center size-5 pointer-events-none sm:size-4",
      "text-border",
      "ml-3",
    );
    expect(trailingIcon).toHaveClass(
      "col-start-1 row-start-1 self-center size-5 pointer-events-none sm:size-4",
      "text-border",
      "mr-3",
      "justify-self-end",
    );
  });

  it("applies error color to icons", () => {
    render(
      <Input
        color="error"
        leadingIcon={MockLeadingIcon}
        trailingIcon={MockTrailingIcon}
        aria-label="Input with error"
      />,
    );

    const leadingIcon = screen.getByTestId("leading-icon");
    const trailingIcon = screen.getByTestId("trailing-icon");

    expect(leadingIcon).toHaveClass("text-redError");
    expect(trailingIcon).toHaveClass("text-redError");
  });
});
