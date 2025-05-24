import { partisanSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { partisanTitle, content } = partisanSection;

export const PartisanSection = () => (
  <section className="flex flex-col gap-6">
    <Heading variant="h4" color="green" contrast="yellow">
      {partisanTitle}
    </Heading>
    <div className="flex flex-col gap-6 font-sourceSans text-lg contrast:text-yellowContrast desktop:flex-row-reverse">
      <Image
        src="/images/history/burza/battles.webp"
        alt="Ostatnie pożegnanie jednego z poległych żołnierzy AK. Gumniska, 1944 r."
        width={2120}
        height={2950}
        className="m-auto w-full max-w-[450px]"
      />
      <div className="flex flex-col gap-6">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);
