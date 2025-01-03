import React from "react";
import { render } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading component", () => {
  it("renders with default props", () => {
    const { getByText } = render(
      <Heading contrast="black" color="green">
        Test Heading
      </Heading>,
    );
    const heading = getByText("Test Heading");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H2");
  });

  it("renders with different variants", () => {
    const { getByText } = render(
      <Heading variant="h1" contrast="black" color="green">
        Test Heading
      </Heading>,
    );
    const heading = getByText("Test Heading");
    expect(heading.tagName).toBe("H1");
  });

  it("renders with underline", () => {
    const { getByText, container } = render(
      <Heading underline contrast="black" color="green">
        Test Heading
      </Heading>,
    );
    const heading = getByText("Test Heading");
    expect(heading).toBeInTheDocument();
    const hr = container.querySelector("hr");
    expect(hr).toBeInTheDocument();
  });

  it("renders without underline", () => {
    const { getByText, container } = render(
      <Heading contrast="black" color="green">
        Test Heading
      </Heading>,
    );
    const heading = getByText("Test Heading");
    expect(heading).toBeInTheDocument();
    const hr = container.querySelector("hr");
    expect(hr).not.toBeInTheDocument();
  });

  it("applies correct contrast styles", () => {
    const { getByText } = render(
      <Heading contrast="yellow" color="green">
        Test Heading
      </Heading>,
    );
    const heading = getByText("Test Heading");
    expect(heading).toHaveClass("contrast:text-yellowContrast");
    expect(heading).toHaveClass("contrast:border-yellowContrast");
  });

  it("applies correct color styles", () => {
    const { getByText } = render(
      <Heading contrast="black" color="white">
        Test Heading
      </Heading>,
    );
    const heading = getByText("Test Heading");
    expect(heading).toHaveClass("text-white");
  });
});
