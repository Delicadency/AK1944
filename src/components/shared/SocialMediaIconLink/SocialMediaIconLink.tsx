import IconFacebook from "@/icons/IconFacebook";
import IconInstagram from "@/icons/IconInstagram";
import IconYoutube from "@/icons/IconYoutube";
import IconX from "@/icons/IconX";

export enum SocialMedia {
  Facebook = "Facebook",
  Instagram = "Instagram",
  YouTube = "YouTube",
  X = "X",
}

interface Props {
  type: SocialMedia;
  size?: number;
}

export const SocialMediaIconLink = ({ type, size }: Props) => {
  const { name, href, description, Icon } = socials[type];
  return (
    <a
      href={href}
      title={name}
      aria-label={description}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <Icon size={size} />
    </a>
  );
};

type IconComponent =
  | typeof IconFacebook
  | typeof IconInstagram
  | typeof IconYoutube
  | typeof IconX;

type SocialMediaData = {
  Icon: IconComponent;
  name: string;
  href: string;
  description: string;
};

const socials: Record<SocialMedia, SocialMediaData> = {
  [SocialMedia.Facebook]: {
    Icon: IconFacebook,
    name: "Facebook",
    href: "https://www.facebook.com/Szlak.Partyzancki",
    description: "Oficjalna strona Szlaku Partyzanckiego na Facebooku",
  },
  [SocialMedia.Instagram]: {
    Icon: IconInstagram,
    name: "Instagram",
    href: "https://www.instagram.com", // Todo: Update link https://app.clickup.com/t/8697u6n5a
    description: "Oficjalna strona Szlaku Partyzanckiego na Instagramie",
  },
  [SocialMedia.YouTube]: {
    Icon: IconYoutube,
    name: "YouTube",
    href: "https://www.youtube.com/@armiakrajowadebica3809",
    description: "Oficjalna strona Armii Krajowej Dębica na YouTube",
  },
  [SocialMedia.X]: {
    Icon: IconX,
    name: "X",
    href: "https://x.com/szlak",
    description: "Oficjalna strona Szlaku Partyzanckiego na X",
  },
};
