import { escapeSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { escapeTitle, content } = escapeSection;
const firstPart = content.slice(0, 3);
const secondPart = content.slice(3);

export const EscapeSection = () => (
  <section className="flex flex-col gap-6 text-lg">
    <Heading variant="h4" color="green" contrast="yellow">
      {escapeTitle}
    </Heading>
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 desktop:flex-row">
        <div className="flex flex-col gap-6 desktop:w-1/2">
          {firstPart.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="relative m-auto aspect-[1.4] w-full max-w-[600px] desktop:hidden">
          <Image
            src="/images/history/regiment/shooters.webp"
            alt="Strzelcy pierwszego szwadronu 5. Pułku STrzelców Konnych. W środku rtm. Antoni Starnawski i por. Stanisław Smrokowski, 1933 r."
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 desktop:w-1/2">
          {secondPart.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <div className="relative m-auto hidden aspect-[1.4] w-full max-w-[684px] desktop:block">
          <Image
            src="/images/history/regiment/shooters.webp"
            alt="Strzelcy pierwszego szwadronu 5. Pułku STrzelców Konnych. W środku rtm. Antoni Starnawski i por. Stanisław Smrokowski, 1933 r."
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
        <div className="relative m-auto aspect-[1.4] w-full max-w-[684px]">
          <Image
            src="/images/history/regiment/mcpl.webp"
            alt="Plutonowy Peca ze sforą psów myśliwskich 5. Pułku Strzelców Konnych."
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);
