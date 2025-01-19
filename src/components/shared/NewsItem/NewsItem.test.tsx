import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { NewsItem } from "./NewsItem";

describe("NewsItem Component", () => {
  const mockProps = {
    heading: "Test Heading",
    date: "2023-10-01",
    excerpt: "Test text content",
    featured_media: "1",
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

  it("renders the read more text", async () => {
    render(<NewsItem {...mockProps} />);
    const readMoreElement = await screen.findByText("Test text content");
    expect(readMoreElement).toBeInTheDocument();
  });
});
