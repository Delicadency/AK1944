import Link from "next/link";
import Image from "next/image";

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
          src="/images/IconFecebook.png"
          alt="Facebook"
          width={32}
          height={32}
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
          src="/images/IconInstagram.png"
          alt="Instagram"
          width={32}
          height={32}
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
          src="/images/IconYouTube.png"
          alt="YouTube"
          width={32}
          height={32}
          className="h-[32px] w-[32px] transition-opacity hover:opacity-80"
        />
      </Link>
    </div>
  );
};

export default FooterSocialMedia;
