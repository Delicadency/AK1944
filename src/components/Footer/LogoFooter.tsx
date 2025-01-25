import Image from "next/image";

const LogoFooter: React.FC = () => {
  return (
    <div className="mb-5 mt-5 flex w-full justify-center md:left-[32.5px] md:top-[32px] md:justify-start md:text-left">
      <div className="flex justify-center md:hidden">
        <Image
          src="/images/LogoFooterMobile.png"
          alt="Związek AK Logo"
          width={83}
          height={100}
          className="h-auto w-[83px]"
        />
      </div>
      <div className="hidden md:mt-4 md:block lg:hidden">
        <Image
          src="/images/LogoFooterTab.png"
          alt="Związek AK Logo"
          width={149}
          height={181}
          className="h-[180px] w-[148px]"
        />
      </div>
      <div className="hidden lg:mr-[40px] lg:mt-[22px] lg:block">
        <Image
          src="/images/LogoFooterDesktop.png"
          alt="Związek AK Logo"
          width={149}
          height={181}
          className="h-[180px] w-[148px]"
        />
      </div>
    </div>
  );
};
export default LogoFooter;
