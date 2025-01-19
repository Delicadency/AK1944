import IconXCircle from "@/icons/IconXCircle";
import { HeaderLogo } from "./HeaderLogo";
import Link from "next/link";
import IconFacebook from "@/icons/IconFacebook";
import IconInstagram from "@/icons/IconInstagram";
import IconYoutube from "@/icons/IconYoutube";

export const HeaderMobileMenu = () => {
  return (
    <div className="z-50 h-full w-full bg-greenB">
      <div className="mt-5 flex content-center justify-around">
        <HeaderLogo />
        <p className="h-8 w-[135px] text-center font-courier text-14 text-white contrast:text-black00">
          Światowy Związek Żołnierzy AK
        </p>
        <button className="h-6 w-6" type="button">
          <IconXCircle className="text-greenC" />
        </button>
      </div>
      <div className="flex content-center gap-4">
        <Link
          href="https://facebook.com/Szlak.Partyzancki/"
          rel="noopener norefferer"
          target="_blank"
        >
          <IconFacebook />
        </Link>
        <Link
          href="https://instagram.com"
          rel="noopener norefferer"
          target="_blank"
        >
          <IconInstagram />
        </Link>
        <Link
          href="https://youtube.com/@armiakrajowadebica3809"
          rel="noopener norefferer"
          target="_blank"
        >
          <IconYoutube />
        </Link>
      </div>
    </div>
  );
};
