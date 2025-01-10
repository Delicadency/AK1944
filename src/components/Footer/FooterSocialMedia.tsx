import Image from "next/image";
import Link from "next/link";
import LogoFacebook from "../../../public/images/IconFecebook.png";
import LogoInstagram from "../../../public/images/IconInstagram.png";
import LogoYouTube from "../../../public/images/IconYouTube.png";

const FooterSocialMedia: React.FC = () => {
  return (
    <div className="mt-2 hidden space-x-4 md:flex">
      <Link
        href="https://www.facebook.com"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={LogoFacebook}
          alt="Facebook"
          className="h-[32px] w-[32px] transition-opacity hover:opacity-80"
        />
      </Link>
      <Link
        href="https://www.instagram.com"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={LogoInstagram}
          alt="Instagram"
          className="h-[32px] w-[32px] transition-opacity hover:opacity-80"
        />
      </Link>
      <Link
        href="https://www.youtube.com"
        aria-label="YouTube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={LogoYouTube}
          alt="YouTube"
          className="h-[32px] w-[32px] transition-opacity hover:opacity-80"
        />
      </Link>
    </div>
  );
};
export default FooterSocialMedia;
