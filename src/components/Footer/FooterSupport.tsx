import Image from "next/image";

export const FooterSupport = () => {
  return (
    <article className="lg:flex-rowlg:items-center flex flex-col items-center gap-5 text-center text-16 md:flex-row md:items-start md:text-left md:text-lg lg:justify-start lg:gap-8 lg:text-20">
      <p>Nr konta:</p>
      <p>PL12 3456 7890 1234 5678 9012 3456</p>

      <Image src="/images/Blik.png" alt="Logo Blik" width={68} height={32} />
    </article>
  );
};
