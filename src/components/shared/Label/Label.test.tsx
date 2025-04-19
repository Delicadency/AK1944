import { render, screen } from "@testing-library/react";
import { Label } from ".";

describe("Label", () => {
  it("renders with default props", () => {
    render(<Label>Label</Label>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("assigns class names by properties", () => {
    render(
      <Label color="error" visibility="shown">
        Label
      </Label>,
    );
    expect(screen.getByText("Label")).toHaveClass(
      "block text-sm/6 font-medium text-redError",
    );
  });

  it("applies default class names when no props are provided", () => {
    render(<Label>Label</Label>);
    expect(screen.getByText("Label")).toHaveClass(
      "block text-sm/6 font-medium text-greenMain",
    );
  });

  it("injects native label properties", () => {
    render(<Label title="Label" htmlFor="input" />);
    expect(screen.getByTitle("Label")).toBeInTheDocument();
    expect(screen.getByTitle("Label")).toHaveAttribute("for", "input");
  });
});
