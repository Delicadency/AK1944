import Image from "next/image";

export const FooterSupport = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] text-center text-16 md:flex-row md:items-start md:text-left md:text-18 md:text-lg lg:ml-[180px] lg:flex-row lg:items-center lg:justify-start lg:gap-[32px] lg:text-left lg:text-20">
      <p className="mb-4 md:mt-2 lg:mb-0">Nr konta:</p>
      <p className="mb-4 md:mt-2 lg:mb-0">PL12 3456 7890 1234 5678 9012 3456</p>
      <p className="relative">
        <Image
          src="/images/Blik.png"
          alt="Logo Blik"
          width={68}
          height={32}
          className="h-auto w-[67px]"
        />
      </p>
    </div>
  );
};
