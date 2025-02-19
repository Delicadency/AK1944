import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { historyData } from "@/data/historyData";
export const Readiness = () => {
  const { readinessTitle, readiness1, readiness2 } = historyData.debica ?? {};
  return (
    <section className="mb-6 flex flex-col gap-6">
      <Image
        src="/images/history/debica/people.jpg"
        alt="debica"
        width={500}
        height={1080}
        className="m-auto"
      />
      <Heading variant="h4" color="green" contrast="yellow">
        {readinessTitle}
      </Heading>
      <p className="text-lg contrast:text-yellowContrast">{readiness1}</p>
      <p className="text-lg contrast:text-yellowContrast">{readiness2}</p>
    </section>
  );
};
