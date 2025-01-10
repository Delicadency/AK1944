import Image from "next/image";
import LogoFooterMobile from "../../../public/images/LogoFooterMobile.png";
import LogoFooterTab from "../../../public/images/LogoFooterTab.png";

const LogoFooter: React.FC = () => {
  return (
    <div className="mb-5 mt-5 flex w-full justify-center md:left-[32.5px] md:top-[32px] md:justify-start md:text-left">
      <div className="flex justify-center md:hidden">
        <Image src={LogoFooterMobile} alt="Logo" className="h-auto w-[83px]" />
      </div>
      <div className="hidden md:mt-4 md:block">
        <Image
          src={LogoFooterTab}
          alt="Logo Tablet"
          className="h-[180px] w-[148px]"
        />
      </div>
    </div>
  );
};
export default LogoFooter;
