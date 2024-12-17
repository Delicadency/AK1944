import Image from "next/image";
import Blik from "../../../public/images/Blik.png";

export const FooterSupport = () => {
  return (
    <div className="mb-[20px] flex w-full flex-col items-center gap-[20px] text-sm">
      <p className="mb-1">Nr konta:</p>
      <p className="mb-4">PL12 3456 7890 1234 5678 9012 3456</p>
      <p className="relative">
        <Image src={Blik} alt="Logo Blik" className="h-auto w-[67px]" />
      </p>
    </div>
  );
};
