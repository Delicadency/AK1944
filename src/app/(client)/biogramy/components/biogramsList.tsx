import Link from "next/link";

interface Person {
  id: number;
  name: string;
  slug: string;
  birthDate: string;
  deathDate: string;
}

interface BiogramsListProps {
  people: Person[];
}

export const BiogramsList = ({ people }: BiogramsListProps) => {
  return (
    <div className="relative mx-auto w-full max-w-md md:max-w-5xl">
      <div
        className="absolute bottom-0 top-0 hidden w-[2px] bg-greenMain md:block"
        style={{ left: "calc(440px)" }}
      />
      <div
        className="absolute bottom-0 top-0 hidden w-[2px] bg-greenMain md:block"
        style={{ left: "calc(100% - 170px - 1rem)" }}
      />

      <div className="flex w-full items-center px-4 py-2 pb-6 font-courier text-18 desktop:pb-16">
        <div className="flex min-w-[120px] gap-2 text-left font-bold">
          <span>L.p.</span>
          <span>Nazwisko i imię</span>
        </div>

        <div className="hidden flex-1 justify-center font-bold md:flex">
          <p>Data urodzenia</p>
        </div>

        <div className="hidden min-w-[120px] text-right font-bold md:flex">
          <p>Data śmierci</p>
        </div>
      </div>

      {people.map((person, index) => (
        <div
          key={person.id}
          className={`flex items-center justify-between px-4 py-2 font-courier text-18 font-bold ${
            index % 2 === 0 ? "bg-greenLight" : "bg-backgroundB"
          }`}
        >
          <div className="flex min-w-[120px] gap-2">
            <span>{index + 1}.</span>

            <span className="md:hidden">{person.name}</span>

            <Link
              href={`/biogramy/${person.slug}`}
              className="hidden md:inline md:underline"
            >
              {person.name}
            </Link>
          </div>

          <div className="flex items-center md:w-full md:max-w-[610px]">
            <Link
              href={`/biogramy/${person.slug}`}
              className="mr-4 text-xl md:hidden"
            >
              &rsaquo;
            </Link>

            <div className="hidden flex-1 justify-between md:flex">
              <span className="mr-10 flex-1 text-center">
                {person.birthDate}
              </span>
              <span className="mr-5 flex-1 text-right">{person.deathDate}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
