import { render, screen } from "@testing-library/react";
import { HeaderSocialMediaLinks } from "../HeaderSocialMediaLinks";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

jest.mock("@/icons/IconFacebook", () => jest.fn(() => <div>Facebook Icon</div>));
jest.mock("@/icons/IconInstagram", () => jest.fn(() => <div>Instagram Icon</div>));
jest.mock("@/icons/IconYoutube", () => jest.fn(() => <div>YouTube Icon</div>));

describe("HeaderSocialMediaLinks", () => {
  it("renders all social media links", () => {
    render(<HeaderSocialMediaLinks />);

    expect(screen.getByLabelText("Oficjalna strona Szlaku Partyzanckiego na Facebooku")).toBeInTheDocument();
    expect(screen.getByLabelText("Oficjalna strona Szlaku Partyzanckiego na Instagramie")).toBeInTheDocument();
    expect(screen.getByLabelText("Oficjalna strona Armii Krajowej Dębica na YouTube")).toBeInTheDocument();
  });

  it("renders correct href for Facebook link", () => {
    render(<HeaderSocialMediaLinks />);

    const facebookLink = screen.getByLabelText("Oficjalna strona Szlaku Partyzanckiego na Facebooku");
    expect(facebookLink).toHaveAttribute("href", "https://facebook.com/Szlak.Partyzancki/");
  });

  it("renders correct href for Instagram link", () => {
    render(<HeaderSocialMediaLinks />);

    const instagramLink = screen.getByLabelText("Oficjalna strona Szlaku Partyzanckiego na Instagramie");
    expect(instagramLink).toHaveAttribute("href", "https://instagram.com");
  });

  it("renders correct href for YouTube link", () => {
    render(<HeaderSocialMediaLinks />);

    const youtubeLink = screen.getByLabelText("Oficjalna strona Armii Krajowej Dębica na YouTube");
    expect(youtubeLink).toHaveAttribute("href", "https://youtube.com/@armiakrajowadebica3809");
  });

  it("renders all icons correctly", () => {
    render(<HeaderSocialMediaLinks />);

    expect(screen.getByText("Facebook Icon")).toBeInTheDocument();
    expect(screen.getByText("Instagram Icon")).toBeInTheDocument();
    expect(screen.getByText("YouTube Icon")).toBeInTheDocument();
  });

  it("should have rel='noopener noreferrer' and target='_blank' for all links", () => {
    render(<HeaderSocialMediaLinks />);

    const links = screen.getAllByRole("link");

    links.forEach(link => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
  it("should pass accessibility checks", async () => {
    const { container } = render(<HeaderSocialMediaLinks />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
