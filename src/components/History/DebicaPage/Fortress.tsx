import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const Fortress = () => {
  const { fortressTitle, fortress1, fortress2 } = historyData.debica ?? {};
  return (
    <section className="mb-6 flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6">
        <Heading variant="h4" color="green" contrast="yellow">
          {fortressTitle}
        </Heading>
        <p className="text-lg contrast:text-yellowContrast">{fortress1}</p>
        <p className="text-lg contrast:text-yellowContrast">{fortress2}</p>
      </div>
      <Image
        src="/images/history/debica/debica.jpeg"
        alt="debica"
        width={650}
        height={1080}
        className="m-auto"
        priority
      />
    </section>
  );
};
