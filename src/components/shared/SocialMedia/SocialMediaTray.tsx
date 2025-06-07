import { SocialMediaIconLink } from "./SocialMediaIconLink";

interface Props {
  className?: string;
  iconsSize?: number;
}

export const SocialMediaTray = ({ className, iconsSize }: Props) => (
  <nav className={className}>
    <SocialMediaIconLink.Facebook size={iconsSize} />
    {/* <SocialMediaIconLink.Instagram size={iconsSize} /> */}
    <SocialMediaIconLink.YouTube size={iconsSize} />
    <SocialMediaIconLink.X size={iconsSize} />
  </nav>
);
