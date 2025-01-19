import { render } from "@testing-library/react";
import { BackgroundImage, BackgroundImageProps } from "./BackgroundImage";

describe("BackgroundImage", () => {
  const defaultProps: BackgroundImageProps = {
    children: <div>Test Child</div>,
    src: "/test-image.jpg",
    alt: "Background Image",
    width: 1920,
    height: 1080,
  };

  it("renders without crashing", () => {
    const { container } = render(<BackgroundImage {...defaultProps} />);
    expect(container).toBeInTheDocument();
  });

  it("renders the background image with correct src", () => {
    const { getByAltText } = render(<BackgroundImage {...defaultProps} />);
    const image = getByAltText("Background Image");
    expect(image.getAttribute("src"));
  });

  it("renders children correctly", () => {
    const { getByText } = render(<BackgroundImage {...defaultProps} />);
    const child = getByText("Test Child");
    expect(child).toBeInTheDocument();
  });
});
