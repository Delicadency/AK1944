import IconFacebook from "@/icons/IconFacebook";
import IconInstagram from "@/icons/IconInstagram";
import IconYoutube from "@/icons/IconYoutube";
import IconX from "@/icons/IconX";

interface Props {
  size?: number;
}

export const SocialMediaIconLink = {
  Facebook: ({ size }: Props) => (
    <a
      href="https://www.facebook.com/Szlak.Partyzancki"
      title="Facebook"
      aria-label="Oficjalna strona Szlaku Partyzanckiego na Facebooku"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <IconFacebook size={size} />
    </a>
  ),
  Instagram: ({ size }: Props) => (
    <a
      href="https://www.instagram.com" // Todo: Update link https://app.clickup.com/t/8697u6n5a
      title="Instagram"
      aria-label="Oficjalna strona Szlaku Partyzanckiego na Instagramie"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <IconInstagram size={size} />
    </a>
  ),
  YouTube: ({ size }: Props) => (
    <a
      href="https://www.youtube.com/@armiakrajowadebica3809"
      title="YouTube"
      aria-label="Oficjalna strona Armii Krajowej Dębica na YouTube"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <IconYoutube size={size} />
    </a>
  ),
  X: ({ size }: Props) => (
    <a
      href="https://x.com/szlak"
      title="X"
      aria-label="Oficjalna strona Szlaku Partyzanckiego na X"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <IconX size={size} />
    </a>
  ),
};
