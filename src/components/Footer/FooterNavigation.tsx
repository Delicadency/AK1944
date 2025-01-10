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
              aria-label="Navigate to the Związek AK page"
              title="Go to the Związek AK page"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Związek AK
            </Link>
          </li>
          <li>
            <Link
              href="/szlak-partyzancki"
              aria-label="Navigate to the Szlak Partyzancki page"
              title="Go to the Szlak Partyzancki page"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Szlak Partyzancki
            </Link>
          </li>
          <li>
            <Link
              href="/inwentarz-grobow"
              aria-label="Navigate to the Inwentarz Grobów page"
              title="Go to the Inwentarz Grobów page"
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
              ari-label="Navigate to the Partnerzy page"
              title="Go to the Partnerzy page"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Partnerzy
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              aria-label="Navigate to the Kontakt page"
              title="Go to the Kontakt page"
              className="text-base font-normal transition-opacity hover:opacity-80 md:text-lg"
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              href="/wesprzyj"
              aria-label="Navigate to the Wesprzyj page"
              title="Go to the Wesprzyj page"
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
