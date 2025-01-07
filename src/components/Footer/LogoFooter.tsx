import Image from "next/image";
import LogoFooterMobile from "../../../public/images/LogoFooterMobile.png";

const LogoFooter: React.FC = () => {
  return (
    <div className="mb-[20px] mt-[20px] flex w-full items-center justify-center">
      <Image
        src={LogoFooterMobile}
        alt="Logo"
        className="h-auto w-[83px]"
        priority
      />
    </div>
  );
};
export default LogoFooter;
