import Image from "next/image";
import Blik from "../../../public/images/Blik.png";

export const FooterSupport = () => {
  return (
    <div>
      <p>Nr konta:</p>
      <p>PL12 3456 7890 1234 5678 9012 3456</p>
      <Image src={Blik} alt="Logo Blik" />
    </div>
  );
};
