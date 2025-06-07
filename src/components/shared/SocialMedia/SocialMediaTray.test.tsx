import { render, screen } from "@testing-library/react";
import { SocialMediaTray } from "./SocialMediaTray";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

jest.mock("@/icons/IconFacebook", () =>
  jest.fn(({ size }) => <div data-size={size}>Facebook Icon</div>),
);
// jest.mock("@/icons/IconInstagram", () =>
//   jest.fn(({ size }) => <div data-size={size}>Instagram Icon</div>),
// );
jest.mock("@/icons/IconYoutube", () =>
  jest.fn(({ size }) => <div data-size={size}>YouTube Icon</div>),
);
jest.mock("@/icons/IconX", () =>
  jest.fn(({ size }) => <div data-size={size}>X Icon</div>),
);

describe("SocialMediaTray", () => {
  const { Facebook, YouTube, X } = {
    Facebook: {
      title: "Facebook",
      href: "https://www.facebook.com/Szlak.Partyzancki",
      label: "Oficjalna strona Szlaku Partyzanckiego na Facebooku",
    },
    // Instagram: {
    //   title: "Instagram",
    //   href: "https://www.instagram.com", // Todo: Update link https://app.clickup.com/t/8697u6n5a
    //   label: "Oficjalna strona Szlaku Partyzanckiego na Instagramie",
    // },
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

  it("renders all social media links with correct title", () => {
    render(<SocialMediaTray />);

    expect(screen.getByTitle(Facebook.title)).toBeInTheDocument();
    // expect(screen.getByTitle(Instagram.title)).toBeInTheDocument();
    expect(screen.getByTitle(YouTube.title)).toBeInTheDocument();
    expect(screen.getByTitle(X.title)).toBeInTheDocument();
  });

  it.each([Facebook, YouTube, X])(
    "renders correct href & aria-label for $title link",
    ({ title, href, label }) => {
      render(<SocialMediaTray />);

      const link = screen.getByTitle(title);

      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("aria-label", label);
    },
  );

  it("renders all icons correctly", () => {
    render(<SocialMediaTray />);

    expect(screen.getByText("Facebook Icon")).toBeInTheDocument();
    // expect(screen.getByText("Instagram Icon")).toBeInTheDocument();
    expect(screen.getByText("YouTube Icon")).toBeInTheDocument();
    expect(screen.getByText("X Icon")).toBeInTheDocument();
  });

  it("renders all icons with correct size", () => {
    render(<SocialMediaTray iconsSize={42} />);

    expect(screen.getByText("Facebook Icon").dataset["size"]).toBe("42");
    // expect(screen.getByText("Instagram Icon").dataset["size"]).toBe("42");
    expect(screen.getByText("YouTube Icon").dataset["size"]).toBe("42");
    expect(screen.getByText("X Icon").dataset["size"]).toBe("42");
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
