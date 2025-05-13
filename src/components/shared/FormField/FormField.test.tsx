import { render, screen } from "@testing-library/react";
import { FormField } from ".";

describe("FormField", () => {
  it("renders input with name as label when label prop is not provided", () => {
    render(<FormField name="email" />);

    const input = screen.getByRole("textbox", { name: /email/i });
    const label = screen.getByText("email");

    expect(input).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBe(input);
    expect(label).toBeInTheDocument();
  });

  it("renders input with custom label when label prop is provided", () => {
    render(<FormField name="email" label="Email Address" />);

    const input = screen.getByRole("textbox", { name: /Email Address/i });
    const label = screen.getByText("Email Address");

    expect(input).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBe(input);
    expect(label).toBeInTheDocument();
  });

  it("displays error message when issues are provided", () => {
    render(
      <FormField
        name="email"
        issues={["Please provide a valid email address"]}
      />,
    );

    const input = screen.getByRole("textbox", { name: /email/i });
    expect(input).toHaveAccessibleErrorMessage(
      "Please provide a valid email address",
    );
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("applies error styles to input and label when issues exist", () => {
    render(
      <FormField
        name="email"
        issues={["Please provide a valid email address"]}
      />,
    );

    const input = screen.getByRole("textbox", { name: /email/i });
    const label = screen.getByText("email");

    expect(input).toHaveClass(
      "text-redMain ring-redError placeholder:text-redError",
    );
    expect(label).toHaveClass("text-redError");
  });

  it("shows only the first error message when multiple issues exist", () => {
    render(
      <FormField
        name="email"
        issues={[
          "Please provide a valid email address",
          "Email is required",
          "Email already exists",
        ]}
      />,
    );

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toHaveTextContent(
      "Please provide a valid email address",
    );
    expect(errorMessage).not.toHaveTextContent("Email is required");
    expect(errorMessage).not.toHaveTextContent("Email already exists");
  });

  it("passes through additional input props", () => {
    render(
      <FormField
        name="email"
        placeholder="Enter your email"
        required
        className="custom-class"
      />,
    );

    const input = screen.getByRole("textbox", { name: /email/i });
    expect(input).toHaveAttribute("placeholder", "Enter your email");
    expect(input).toBeRequired();
    expect(input).toHaveClass("custom-class");
  });

  it("has no error states when no issues are provided", () => {
    render(<FormField name="email" />);

    const input = screen.getByRole("textbox", { name: /email/i });
    const label = screen.getByText("email");

    expect(input).not.toHaveAccessibleErrorMessage();
    expect(input).toHaveClass(
      "text-greenMain ring-border placeholder:text-border focus:ring-greenMain",
    );
    expect(label).toHaveClass("text-greenMain");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
