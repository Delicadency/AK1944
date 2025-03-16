import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { axe, toHaveNoViolations } from "jest-axe";

const MockLeadingIcon = ({ className }: { className?: string }) => (
  <svg data-testid="leading-icon" className={className}>
    <path d="M0 0h24v24H0z" />
  </svg>
);

const MockTrailingIcon = ({ className }: { className?: string }) => (
  <svg data-testid="trailing-icon" className={className}>
    <path d="M0 0h24v24H0z" />
  </svg>
);

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button label="Kliknij mnie" ariaDescription="Przycisk testowy" />);
    const buttonElement = screen.getByRole("button", {
      name: /przycisk testowy/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "bg-redMain text-backgroundMain hover:bg-[#7A0003] active:bg-redMain contrast:bg-black00 contrast:text-yellow",
    );
    expect(buttonElement).toHaveClass("text-base");
  });

  it("renders correctly text content and aria-label attribute", () => {
    render(<Button label="Kliknij mnie" ariaDescription="Przycisk testowy" />);
    const buttonElement = screen.getByRole("button", {
      name: /przycisk testowy/i,
    });
    expect(buttonElement).toHaveTextContent(/kliknij mnie/i);
    expect(buttonElement).toHaveAccessibleName(/przycisk testowy/i);
  });

  it("renders in secondary variant with large text", () => {
    render(
      <Button
        label="Zielony przycisk"
        ariaDescription="Przycisk testowy w kolorze zielonym"
        variant="secondary"
        size="large"
      />,
    );
    const buttonElement = screen.getByRole("button", {
      name: /przycisk testowy/i,
    });
    expect(buttonElement).toHaveClass(
      "contrast:bg-yellow contrast:hover:bg-[#DAD01C] contrast:text-black00 bg-greenLight text-black hover:bg-[#BDD2BC] active:bg-greenLight",
    );
    expect(buttonElement).toHaveClass("text-lg");
  });

  it("renders correctly when disabled", () => {
    render(
      <Button
        label="Nieaktywny przycisk"
        ariaDescription="Nieaktywny przycisk testowy w kolorze białym"
        variant="inversion"
        disabled={true}
        href="/test"
      />,
    );
    const buttonElement = screen.getByRole("button", {
      name: /przycisk testowy/i,
    });
    expect(buttonElement).toHaveClass(
      "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30",
    );
    expect(buttonElement).toHaveClass(
      "contrast:bg-yellow contrast:hover:bg-[#DAD01C] contrast:text-black00 bg-backgroundMain text-redMain hover:bg-[#F0EFEB] active:bg-backgroundMain",
    );
    expect(buttonElement).not.toHaveAttribute("href", "/test");
  });

  it("renders a link styled as a button", () => {
    render(
      <Button
        label="Kliknij mnie"
        ariaDescription="Przycisk testowy"
        href="/test"
      />,
    );
    const linkElement = screen.getByRole("link", { name: /przycisk testowy/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).not.toHaveRole("button");
    expect(linkElement).toHaveAttribute("href", "/test");
  });

  it("renders with leading and trailing icons", () => {
    render(
      <Button
        label="Kliknij mnie"
        ariaDescription="Przycisk testowy"
        leadingIcon={MockLeadingIcon}
        trailingIcon={MockTrailingIcon}
      />,
    );

    const leadingIcon = screen.getByTestId("leading-icon");
    const trailingIcon = screen.getByTestId("trailing-icon");

    expect(leadingIcon).toHaveClass("size-4", "text-inherit");
    expect(trailingIcon).toHaveClass("size-4", "text-inherit");
  });

  it("should trigger form submit when the button is of type 'submit'", () => {
    const handleSubmit = jest.fn((event) => event.preventDefault());
    render(
      <form onSubmit={handleSubmit}>
        <Button
          label="Prześlij formularz"
          ariaDescription="Kliknij, by przesłać formularz"
          type="submit"
        />
      </form>,
    );
    const buttonElement = screen.getByRole("button", {
      name: /przesłać formularz/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "submit");
    fireEvent.click(buttonElement);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Button label="Kliknij mnie" ariaDescription="Przycisk testowy" />,
    );
    const results = await axe(container);
    expect.extend(toHaveNoViolations);
    expect(results).toHaveNoViolations();
  });
});
