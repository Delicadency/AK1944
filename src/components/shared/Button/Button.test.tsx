import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button label="Kliknij mnie" ariaDescription="Przycisk testowy" />);
    const buttonElement = screen.getByRole("button", {
      name: /przycisk testowy/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "contrast:bg-black00 contrast:text-yellow bg-redMain text-backgroundMain desktop:hover:bg-[#7A0003] active:bg-redMain",
    );
    expect(buttonElement).toHaveClass("text-16");
    expect(buttonElement).not.toHaveClass(
      "pointer-events-none cursor-not-allowed opacity-30",
    );
    expect(buttonElement).toHaveTextContent("Kliknij mnie");
    expect(buttonElement).toHaveAttribute("type", "button");
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
      "contrast:bg-yellow contrast:desktop:hover:bg-[#DAD01C] contrast:text-black00 bg-greenLight text-black desktop:hover:bg-[#BDD2BC] active:bg-greenLight",
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
      "contrast:bg-yellow contrast:desktop:hover:bg-[#DAD01C] contrast:text-black00 bg-backgroundMain text-redMain desktop:hover:bg-[#F0EFEB] active:bg-backgroundMain",
    );
    expect(buttonElement).toHaveAttribute("type", "button");
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
  it("renders ButtonIcon when iconName is provided", () => {
    render(<Button label="Kliknij mnie" ariaDescription="Przycisk testowy" iconName="coffee" />)
    const iconElement = screen.getByRole("presentation");
    expect(iconElement).toBeInTheDocument();
  })
});
