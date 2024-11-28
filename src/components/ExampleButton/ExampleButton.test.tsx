import { render, screen } from "@testing-library/react";
import { ExampleButton } from "./ExampleButton";

describe("ExampleButton", () => {
  it("renders the button with the correct label", () => {
    render(<ExampleButton variant="primary" label="Click me" />);
    
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  it("applies the correct styles for the 'primary' variant", () => {
    render(<ExampleButton variant="primary" label="Click me" />);
    
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("bg-redMain");
    expect(button).toHaveClass("text-backgroundMain");
  });

  it("applies the correct styles for the 'inversion' variant", () => {
    render(<ExampleButton variant="inversion" label="Click me" />);
    
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("bg-backgroundMain");
    expect(button).toHaveClass("text-redMain");
  });

  it("applies the correct styles for the 'secondary' variant", () => {
    render(<ExampleButton variant="secondary" label="Click me" />);
    
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("bg-greenLight");
    expect(button).toHaveClass("text-black");
  });
});
