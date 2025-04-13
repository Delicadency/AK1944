import { Heading } from "@/components/shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import Image from "next/image";

export const GenesisSection = () => {
  const { genesisTitle, genesis1, genesis2, genesis3, genesis4, commanders } =
    historyData.regiment ?? {};
  const commandersList = commanders.persons;

  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {genesisTitle}
      </Heading>
      <div className="flex flex-col gap-6 desktop:flex-row desktop:gap-[128px]">
        <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
          <p>{genesis1}</p>
          <Image
            src="/images/history/regiment/officers.webp"
            alt="Obraz przedstawiający żołnierza salutującego oficerom."
            width={394}
            height={486}
            className="m-auto desktop:hidden"
            priority
          />
          <p>{genesis2}</p>
          <p>{genesis3}</p>
          <p>{genesis4}</p>
        </div>
        <aside className="flex flex-shrink-0 flex-col gap-6">
          <Image
            src="/images/history/regiment/officers.webp"
            alt="Obraz przedstawiający żołnierza salutującego oficerom."
            width={394}
            height={486}
            className="m-auto mobile:hidden desktop:block"
            priority
          />

          <Heading variant="h4" color="green" contrast="yellow">
            {commanders.title}
          </Heading>
          <p className="hidden desktop:block">
            W okresie międzywojennym dowódcami pułku byli kolejno:
          </p>
          <ul className="relative flex flex-col gap-2 desktop:-translate-x-5">
            {commandersList.map((commander, index) => (
              <li
                key={commander.id}
                className="relative flex flex-col gap-1 pl-5 desktop:flex-row"
              >
                {index !== commandersList.length - 1 && (
                  <div className="absolute left-0 top-4 h-full w-[2px] bg-greenC" />
                )}
                <span className="absolute left-[1px] top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-greenMain" />
                <p>{commander.name}</p>
                <p>{commander.date}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};
