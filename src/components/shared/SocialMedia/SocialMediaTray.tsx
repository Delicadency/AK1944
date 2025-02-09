import { SocialMediaIconLink } from "./SocialMediaIconLink";

interface Props {
  iconsSize?: number;
}

export const SocialMediaTray = ({ iconsSize }: Props) => (
  <>
    <SocialMediaIconLink.Facebook size={iconsSize} />
    <SocialMediaIconLink.Instagram size={iconsSize} />
    <SocialMediaIconLink.YouTube size={iconsSize} />
    <SocialMediaIconLink.X size={iconsSize} />
  </>
);
