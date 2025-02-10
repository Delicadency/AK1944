import { render, screen } from "@testing-library/react";
import AboutUsLandingCard from "../AboutUsLandingCard/AboutUsLandingCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("AboutUsLandingCard", () => {
  const defaultProps = {
    image: {
      src: "/test-image.jpg",
      alt: "Test Image",
      width: 350,
      height: 190,
    },
    heading: "Test Heading",
    description: "This is a test description.",
    buttonLabel: "Learn More",
  };

  it("renders the component with the correct content", () => {
    render(<AboutUsLandingCard {...defaultProps} />);

    // Verify image
    const image = screen.getByAltText(defaultProps.image.alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultProps.image.src);

    // Verify heading
    const heading = screen.getByText(defaultProps.heading);
    expect(heading).toBeInTheDocument();

    // Verify description
    const description = screen.getByText(defaultProps.description);
    expect(description).toBeInTheDocument();

    // Verify button
    const button = screen.getByRole("button", {
      name: defaultProps.buttonLabel,
    });
    expect(button).toBeInTheDocument();
  });
});
