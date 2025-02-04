import { SocialMediaIcon } from "../shared/SocialMediaIcon/SocialMediaIcon";

// Todo: Hrefs in Constants or some Config?
const socials = [
  {
    name: "Facebook",
    src: "/images/IconFecebook.png",
    href: "https://www.facebook.com/Szlak.Partyzancki",
  },
  {
    name: "Instagram",
    src: "/images/IconInstagram.png",
    href: "https://www.instagram.com", // Todo: Update.
  },
  {
    name: "YouTube",
    src: "/images/IconYouTube.png",
    href: "https://www.youtube.com/@armiakrajowadebica3809",
  },
];

export const FooterSocialMedia = () => (
  <div className="mt-2 hidden space-x-4 md:flex lg:mr-8 lg:space-x-4">
    {socials.map(({ name, src, href }) => (
      <SocialMediaIcon key={name} name={name} src={src} href={href} />
    ))}
  </div>
);
