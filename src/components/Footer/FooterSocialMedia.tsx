import Link from "next/link";
import Image from "next/image";

const FooterSocialMedia: React.FC = () => {
  return (
    <div className="mt-2 hidden space-x-4 md:flex lg:mr-8 lg:space-x-4">
      <Link
        href="https://www.facebook.com"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/IconFecebook.png"
          alt="Facebook"
          width={38}
          height={38}
          className="transition-opacity hover:opacity-80"
        />
      </Link>
      <Link
        href="https://www.instagram.com"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/IconInstagram.png"
          alt="Instagram"
          width={38}
          height={38}
          className="transition-opacity hover:opacity-80"
        />
      </Link>
      <Link
        href="https://www.youtube.com"
        aria-label="YouTube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/IconYouTube.png"
          alt="YouTube"
          width={38}
          height={38}
          className="transition-opacity hover:opacity-80"
        />
      </Link>
    </div>
  );
};

export default FooterSocialMedia;
