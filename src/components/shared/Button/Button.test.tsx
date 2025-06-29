import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button label="Kliknij mnie" ariaDescription="Przycisk testowy" />);
    const buttonElement = screen.getByRole("button", {
      name: /przycisk testowy/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "flex h-fit items-center gap-[16px] rounded px-8 py-3 font-sourceSans shadow-inner transition-all duration-200 ease-in-out active:scale-95 w-fit contrast:bg-yellowContrast contrast:text-black00 contrast:hover:bg-[#1A1A1A] bg-redMain text-backgroundMain desktop:hover:bg-[#7A0003] desktop:hover:text-white active:bg-redMain text-16 justify-center text-center",
    );
    expect(buttonElement).toHaveClass("text-16");
    expect(buttonElement).not.toHaveClass(
      "pointer-events-none cursor-not-allowed opacity-30",
    );
    expect(buttonElement).toHaveTextContent(/kliknij mnie/i);
    expect(buttonElement).toHaveAccessibleName(/przycisk testowy/i);
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
      "contrast:bg-yellowContrast contrast:text-black00 contrast:hover:bg-[#1A1A1A] contrast:desktop:hover:text-yellowContrast bg-greenLight text-black desktop:hover:bg-[#BDD2BC] desktop:hover:text-[#333] active:bg-greenLight",
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
      "pointer-events-none cursor-not-allowed opacity-30",
    );
    expect(buttonElement).toHaveClass(
      "flex h-fit items-center gap-[16px] rounded px-8 py-3 font-sourceSans shadow-inner transition-all duration-200 ease-in-out active:scale-95 w-fit contrast:bg-yellowContrast contrast:text-black00 contrast:hover:bg-[#1A1A1A] contrast:desktop:hover:text-yellowContrast bg-backgroundMain text-redMain desktop:hover:bg-[#F0EFEB] desktop:hover:text-[#A60000] active:bg-backgroundMain text-16 justify-center text-center pointer-events-none cursor-not-allowed opacity-30",
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

  it("renders icon and text when iconName is provided", () => {
    render(
      <Button
        label="Kliknij mnie"
        ariaDescription="Przycisk testowy"
        iconName="coffee"
      />,
    );
    const iconElement = screen.getByRole("button").querySelector("svg");
    expect(iconElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button", {
      name: /przycisk testowy/i,
    });
    expect(buttonElement).toHaveTextContent(/kliknij mnie/i);
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
