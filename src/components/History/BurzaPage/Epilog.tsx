import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const Epilog = () => {
  const {
    epilogTitle,
    epilog1,
    epilog2,
    epilog3,
    epilog4,
    epilog5,
    epilog6,
    epilog7,
    epilog8,
  } = historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {epilogTitle}
      </Heading>
      <Image
        src="/images/history/burza/epilog.jpg"
        alt="debica"
        width={3500}
        height={2500}
        className="m-auto"
      />
      <p className="text-lg contrast:text-yellowContrast">{epilog1}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog2}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog3}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog4}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog5}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog6}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog7}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog8}</p>
      <Image
        src="/images/history/burza/epilog2.jpg"
        alt="debica"
        width={600}
        height={350}
        className="m-auto"
      />
    </section>
  );
};
