import Image from "next/image";
import Blik from "../../../public/images/Blik.png";

export const FooterSupport = () => {
  return (
    <div className="mb-[20px] flex flex-col items-center gap-[20px] text-center text-base md:ml-[80px] md:flex-row md:items-start md:text-left md:text-lg">
      <p className="mb-4 md:mt-2 md:text-nowrap">Nr konta:</p>
      <p className="mb-4 md:mt-2 md:text-nowrap">
        PL12 3456 7890 1234 5678 9012 3456
      </p>
      <p className="relative">
        <Image src={Blik} alt="Logo Blik" className="h-auto w-[67px]" />
      </p>
    </div>
  );
};
