import Image from "next/image";
import { AK_DATA } from "@/data/akData";

export const FooterSupport = () => (
  <article className="lg:flex-rowlg:items-center flex flex-col items-center gap-5 text-center text-16 md:flex-row md:items-start md:text-left md:text-lg lg:justify-start lg:gap-8 lg:text-20">
    <p>Nr konta:</p>
    <p>{AK_DATA.bank.accountNumber}</p>

    <Image src="/images/Blik.png" alt="Logo Blik" width={68} height={32} />
  </article>
);
