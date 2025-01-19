import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { NewsItem } from "./NewsItem";

describe("NewsItem Component", () => {
  const mockProps = {
    heading: "Test Heading",
    date: "2023-10-01",
    image: {
      alt: "Test Image",
      src: "/test-image.jpg",
      width: 600,
      height: 400,
    },
    text: "Test text content",
    id: "1",
  };

  it("renders the heading", async () => {
    render(<NewsItem {...mockProps} />);
    const headingElement = await screen.findByText("Test Heading");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the date", async () => {
    render(<NewsItem {...mockProps} />);
    const dateElement = await screen.findByText("2023-10-01");
    expect(dateElement).toBeInTheDocument();
  });

  it("renders the image with correct attributes", async () => {
    render(<NewsItem {...mockProps} />);
    const imageElement = await screen.findByAltText("Test Image");
    expect(imageElement).toHaveAttribute("src", "/test-image.jpg");
    expect(imageElement).toHaveAttribute("width", "600");
    expect(imageElement).toHaveAttribute("height", "400");
  });

  it("renders the read more text", async () => {
    render(<NewsItem {...mockProps} />);
    const readMoreElement = await screen.findByText("Test text content");
    expect(readMoreElement).toBeInTheDocument();
  });
});
