import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/routes";

export const HeaderLogo = () => (
  <div className="w-[54px] tablet:w-[80px] desktop:w-[180px]">
    <Link href={Routes.HOME}>
      <Image
        src="/images/Logo_SZZAK.png"
        alt="Logo"
        priority
        width={179}
        height={65}
        sizes="(max-width: 767px) 54px, (max-width: 1279px) 80px, 179px"
        aria-label="Logo"
        className="h-auto w-[179px]"
      />
    </Link>
  </div>
);
