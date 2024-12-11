import Image from "next/image";
import LogoFooterMobile from "../../../public/images/LogoFooterMobile.png";

const LogoFooter: React.FC = () => {
  return (
    <div>
      <Image src={LogoFooterMobile} alt="Logo" />
    </div>
  );
};
export default LogoFooter;
