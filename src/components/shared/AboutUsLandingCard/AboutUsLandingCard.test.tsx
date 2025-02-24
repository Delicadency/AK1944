import { render, screen } from "@testing-library/react";
import AboutUsLandingCard from "../AboutUsLandingCard/AboutUsLandingCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("AboutUsLandingCard", () => {
  const props = {
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
    render(<AboutUsLandingCard {...props} />);

    const image = screen.getByAltText(props.image.alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", props.image.src);

    const heading = screen.getByText(props.heading);
    expect(heading).toBeInTheDocument();

    const description = screen.getByText(props.description);
    expect(description).toBeInTheDocument();

    const button = screen.getByRole("button", { name: props.buttonLabel });
    expect(button).toBeInTheDocument();
  });
});
