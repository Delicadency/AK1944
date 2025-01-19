import Link from "next/link";
import IconXCircle from "@/icons/IconXCircle";
import { HeaderLogo } from "./HeaderLogo";
import IconFacebook from "@/icons/IconFacebook";
import IconInstagram from "@/icons/IconInstagram";
import IconYoutube from "@/icons/IconYoutube";
import { navData } from "@/data/navigationData";
import Container from "../shared/Container";
import FontSwitcher from "../Switcher/FontSwitcher";
import ContrastSwitcher from "../Switcher/ContrastSwitcher";
import { Button } from "../shared/Button/Button";

interface HeaderMobileMenuProps {
  onClose: () => void;
}

export const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({
  onClose,
}) => {
  const customOrder = [0, 4, 5, 6, 7, 1, 2, 3];
  const orderedNavData = customOrder.map((index) => navData[index]);

  return (
    <Container>
      <div className="relative h-full w-full bg-greenB">
        <div className="mt-5 flex content-center justify-around">
          <HeaderLogo />
          <p className="h-8 w-[135px] text-center font-courier text-14 text-white contrast:text-black00">
            Światowy Związek Żołnierzy AK
          </p>
          <button
            className="h-6 w-6"
            type="button"
            aria-label="Zamknij menu"
            onClick={onClose}
          >
            <IconXCircle className="text-greenC" />
          </button>
        </div>

        <div className="flex justify-center gap-4 py-[26px]">
          <Link
            href="https://facebook.com/Szlak.Partyzancki/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Oficjalna strona Szlaku Partyzanckiego na Facebooku"
          >
            <IconFacebook />
          </Link>
          <Link
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Oficjalna strona Szlaku Partyzanckiego na Instagramie"
          >
            <IconInstagram />
          </Link>
          <Link
            href="https://youtube.com/@armiakrajowadebica3809"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Oficjalna strona Armii Krajowej Dębica na Youtube"
          >
            <IconYoutube />
          </Link>
        </div>

        <nav className="">
          <ul className="flex flex-col gap-5">
            {orderedNavData.map(({ href, label }, index) => (
              <li key={index} className="text-white">
                <Link
                  href={href}
                  className="text-16 text-white transition duration-300 ease-in-out active:text-blue contrast:text-black00"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-[22px] py-5">
          <div className="flex h-[42px] flex-row justify-center">
            <FontSwitcher />
            <ContrastSwitcher />
          </div>
          <Button
            label="Wesprzyj"
            ariaDescription="Kliknij, aby wesprzeć fundację"
            href="/support"
            className="self-center"
          />
        </div>
      </div>
    </Container>
  );
};
