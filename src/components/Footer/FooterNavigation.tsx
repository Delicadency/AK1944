import Link from "next/link";

export const FooterNavigation = () => {
  return (
    <div className="mb-6 w-full">
      <div className="flex flex-col gap-[20px] md:flex-row md:justify-between">
        {/* Pierwsza część nawigacji */}
        <ul className="mb-4 flex flex-col gap-[20px] space-y-4 md:mb-0 md:w-1/2 md:gap-[32px]">
          <li>
            <Link
              href="/zwiazek-ak"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Związek AK
            </Link>
          </li>
          <li>
            <Link
              href="/szlak-partyzancki"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Szlak Partyzancki
            </Link>
          </li>
          <li>
            <Link
              href="/inwentarz-grobow"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Inwentarz grobów
            </Link>
          </li>
        </ul>

        {/* Druga część nawigacji */}
        <ul className="flex flex-col gap-[20px] space-y-4 md:w-1/2 md:gap-[32px]">
          <li>
            <Link
              href="/partnerzy"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Partnerzy
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              href="/wesprzyj"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Wesprzyj
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
