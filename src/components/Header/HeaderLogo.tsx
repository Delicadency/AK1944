import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <div className="w-[33px] tablet:w-[78px] desktop:w-[82px]">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo"
          priority
          width={82}
          height={100}
          sizes="(max-width: 767px) 33px, (max-width: 1279px) 78px, 82px"
          aria-label="Logo"
        />
      </Link>
    </div>
  );
};
