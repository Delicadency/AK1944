import Image from "next/image";
import Link from "next/link";
import { AK_DATA } from "@/data/akData";
import { Routes } from "@/routes";

export const FooterSupport = () => (
  <article className="flex flex-col items-center gap-5 text-center text-16 md:flex-row md:items-start md:text-left md:text-lg desktop:flex-row desktop:items-center desktop:justify-start desktop:gap-8 desktop:text-20">
    <p>Nr konta:</p>
    <p>{AK_DATA.bank.accountNumber}</p>

    <Link href={Routes.SUPPORT_DONATION} className="inline-block">
      <Image
        src="/images/Blik.png"
        alt="Logo Blik"
        width={68}
        height={32}
        className="w-16 h-auto"
      />
    </Link>
  </article>
);
