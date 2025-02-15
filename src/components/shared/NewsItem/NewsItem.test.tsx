import React from "react";
import { render, screen } from "@testing-library/react";
import { NewsItem } from "./NewsItem";

jest.mock("../../../dataAccess/image", () => ({
  getImage: jest.fn(() => Promise.resolve("image-url")),
}));

jest.mock("@/utils", () => ({
  formatDate: jest.fn((text: string) => text),
  cleanHTML: jest.fn((text: string) => text),
  truncateText: jest.fn((text: string) => text),
}));

jest.mock("html-react-parser", () => ({
  __esModule: true,
  default: jest.fn((text: string) => text),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

/* This test is not testing much for now. */
// Todo: https://app.clickup.com/t/8697w8dw8
// https://github.com/testing-library/react-testing-library/issues/1209
describe("NewsItem", () => {
  const testPost = {
    id: 1,
    date: "2023-10-01",
    title: "Test title",
    content: "Test content",
    heading: "Test Heading",
    excerpt: "Test text content",
    featured_media: 1,
  };

  it("renders the date", async () => {
    render(await NewsItem({ post: testPost })); /* Workaround */
    // render(<NewsItem post={testPost} />);

    const dateElement = await screen.findByText(testPost.date);

    expect(dateElement).toBeInTheDocument();
  });

  it("renders the read more text", async () => {
    render(await NewsItem({ post: testPost })); /* Workaround */
    // render(<NewsItem post={testPost} />);

    const readMoreElement = await screen.findByText("Test text content");

    expect(readMoreElement).toBeInTheDocument();
  });
});
