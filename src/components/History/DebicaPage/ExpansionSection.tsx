import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { expansionSection } from "@/data/historyData";

const { expansionTitle, content } = expansionSection;

export const ExpansionSection = () => (
  <section className="flex flex-col gap-6">
    <Heading variant="h4" color="green" contrast="yellow">
      {expansionTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <Image
        src="/images/history/debica/school.webp"
        alt="Szkoła w Gumniskach - siedziba komendy Obwodu ZWZ-AK Dębica."
        width={500}
        height={310}
        className="m-auto desktop:hidden"
      />
      <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
        <div>
          {content[0].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Image
          src="/images/history/debica/people.webp"
          alt="Uśmiechnięci mężczyźni"
          width={500}
          height={310}
          sizes="(max-width: 767px) 200px"
          className="m-auto desktop:hidden"
        />
        <div>
          {content[1].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="hidden shrink-0 flex-col justify-center gap-6 desktop:flex">
        <Image
          src="/images/history/debica/school.webp"
          alt="Szkoła w Gumniskach - siedziba komendy Obwodu ZWZ-AK Dębica."
          width={500}
          height={310}
        />
        <Image
          src="/images/history/debica/people.webp"
          alt="Uśmiechnięci mężczyźni"
          width={500}
          height={310}
        />
      </div>
    </div>
  </section>
);
