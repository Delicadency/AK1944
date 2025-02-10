import { render, screen } from "@testing-library/react";
import { SocialMediaTray } from "./SocialMediaTray";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

jest.mock("@/icons/IconFacebook", () =>
  jest.fn(() => <div>Facebook Icon</div>),
);
jest.mock("@/icons/IconInstagram", () =>
  jest.fn(() => <div>Instagram Icon</div>),
);
jest.mock("@/icons/IconYoutube", () => jest.fn(() => <div>YouTube Icon</div>));
jest.mock("@/icons/IconX", () => jest.fn(() => <div>X Icon</div>));

// Move to SocialMediaTray. Extract strings to variables/constants.
describe("SocialMediaTray", () => {
  const socials = {
    Facebook: {
      title: "Facebook",
      href: "https://www.facebook.com/Szlak.Partyzancki",
      label: "Oficjalna strona Szlaku Partyzanckiego na Facebooku",
    },
    Instagram: {
      title: "Instagram",
      href: "https://www.instagram.com", // Todo: Update link https://app.clickup.com/t/8697u6n5a
      label: "Oficjalna strona Szlaku Partyzanckiego na Instagramie",
    },
    YouTube: {
      title: "YouTube",
      href: "https://www.youtube.com/@armiakrajowadebica3809",
      label: "Oficjalna strona Armii Krajowej Dębica na YouTube",
    },
    X: {
      title: "X",
      href: "https://x.com/szlak",
      label: "Oficjalna strona Szlaku Partyzanckiego na X",
    },
  } as const;

  it("renders all social media links with correct label", () => {
    render(<SocialMediaTray />);

    expect(screen.getByLabelText(socials.Facebook.label)).toBeInTheDocument();
    expect(screen.getByLabelText(socials.Instagram.label)).toBeInTheDocument();
    expect(screen.getByLabelText(socials.YouTube.label)).toBeInTheDocument();
    expect(screen.getByLabelText(socials.X.label)).toBeInTheDocument();
  });

  it.each([socials.Facebook, socials.Instagram, socials.YouTube, socials.X])(
    "renders correct href for $title link",
    ({ label, href }) => {
      render(<SocialMediaTray />);

      const link = screen.getByLabelText(label);
      expect(link).toHaveAttribute("href", href);
    },
  );

  it("renders all icons correctly", () => {
    render(<SocialMediaTray />);

    expect(screen.getByText("Facebook Icon")).toBeInTheDocument();
    expect(screen.getByText("Instagram Icon")).toBeInTheDocument();
    expect(screen.getByText("YouTube Icon")).toBeInTheDocument();
    expect(screen.getByText("X Icon")).toBeInTheDocument();
  });

  it("should have rel='noopener noreferrer' and target='_blank' for all links", () => {
    render(<SocialMediaTray />);

    const links = screen.getAllByRole("link");

    links.forEach((link) => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  it("should pass accessibility checks", async () => {
    const { container } = render(<SocialMediaTray />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
