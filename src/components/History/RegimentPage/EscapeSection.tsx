import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const EscapeSection = () => {
  const { escapeTitle, escape1, escape2, escape3, escape4, escape5 } =
    historyData.regiment;
  return (
    <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
      <Heading variant="h4" color="green" contrast="yellow">
        {escapeTitle}
      </Heading>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 desktop:flex-row">
          <div className="flex flex-col gap-6 desktop:w-1/2">
            <p>{escape1}</p>
            <p>{escape2}</p>
            <p>{escape3}</p>
          </div>
          <Image
            src="/images/history/regiment/shooters.webp"
            alt="Strzelcy pierwszego szwadronu 5. Pułku STrzelców Konnych. W środku rtm. Antoni Starnawski i por. Stanisław Smrokowski, 1933 r."
            width={604}
            height={428}
            className="m-auto desktop:hidden"
          />
          <div className="flex flex-col gap-6 desktop:w-1/2">
            <p>{escape4}</p>
            <p>{escape5}</p>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <Image
            src="/images/history/regiment/shooters.webp"
            alt="Strzelcy pierwszego szwadronu 5. Pułku STrzelców Konnych. W środku rtm. Antoni Starnawski i por. Stanisław Smrokowski, 1933 r."
            width={604}
            height={428}
            className="hidden desktop:block"
          />
          <Image
            src="/images/history/regiment/mcpl.webp"
            alt="Plutonowy Peca ze sforą psów myśliwskich 5. Pułku Strzelców Konnych."
            width={604}
            height={428}
            className=""
          />
        </div>
      </div>
    </section>
  );
};
