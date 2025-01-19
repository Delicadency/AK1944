import { render, screen, fireEvent } from "@testing-library/react";
import { ReadMore } from "./ReadMore";

describe("ReadMore Component", () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  test("renders the truncated text when the text exceeds the word limit", () => {
    render(<ReadMore id="test" text={text} amountOfWords={5} />);

    expect(screen.getByText(/Lorem ipsum dolor sit/)).toBeInTheDocument();
    expect(screen.queryByText(/consectetur adipiscing elit/)).toHaveClass(
      "hidden",
    );
    expect(screen.getByText("czytaj więcej")).toBeInTheDocument();
  });

  test("does not truncate text when it is within the word limit", () => {
    render(
      <ReadMore id="test" text={"Short text example."} amountOfWords={5} />,
    );

    expect(screen.getByText("Short text example.")).toBeInTheDocument();
    expect(screen.queryByText("czytaj więcej")).not.toBeInTheDocument();
  });

  test("expands and collapses the text when 'czytaj więcej' or 'ukryj' is clicked", () => {
    render(<ReadMore id="test" text={text} amountOfWords={5} />);

    // Check initial state
    expect(screen.queryByText(/consectetur adipiscing elit/)).toHaveClass(
      "hidden",
    );

    // Click to expand
    fireEvent.click(screen.getByText("czytaj więcej"));
    expect(screen.getByText(/consectetur adipiscing elit/)).toBeVisible();
    expect(screen.getByText("ukryj")).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(screen.getByText("ukryj"));
    expect(screen.queryByText(/consectetur adipiscing elit/)).toHaveClass(
      "hidden",
    );
    expect(screen.getByText("czytaj więcej")).toBeInTheDocument();
  });

  test("handles keyboard events (Enter and Space) to toggle expansion", () => {
    render(<ReadMore id="test" text={text} amountOfWords={5} />);
    const toggleButton = screen.getByRole("button");

    // Press Space to expand
    fireEvent.keyDown(toggleButton, { code: "Space" });
    expect(screen.getByText(/consectetur adipiscing elit/)).toBeVisible();
    expect(screen.getByText("ukryj")).toBeInTheDocument();

    // Press Enter to collapse
    fireEvent.keyDown(toggleButton, { code: "Enter" });
    expect(screen.queryByText(/consectetur adipiscing elit/)).toHaveClass(
      "hidden",
    );
    expect(screen.getByText("czytaj więcej")).toBeInTheDocument();
  });

  test("applies custom className to the paragraph", () => {
    render(
      <ReadMore
        id="test"
        text={text}
        amountOfWords={5}
        className="custom-class"
      />,
    );

    const paragraph = screen.getByText(/Lorem ipsum dolor sit/);
    expect(paragraph).toHaveClass("custom-class");
  });
});
