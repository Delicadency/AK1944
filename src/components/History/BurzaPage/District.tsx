import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const District = () => {
  const { districtTitle, district1, district2, district3, district4 } =
    historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6">
        <Heading variant="h4" color="green" contrast="yellow">
          {districtTitle}
        </Heading>
        <p className="text-lg contrast:text-yellowContrast">{district1}</p>
        <p className="text-lg contrast:text-yellowContrast">{district2}</p>
        <p className="text-lg contrast:text-yellowContrast">{district3}</p>
        <p className="text-lg contrast:text-yellowContrast">{district4}</p>
      </div>
      <Image
        src="/images/history/burza/district.jpg"
        alt="Msza św. polowa odprawiana przez ks. Stanisława Bartosza ps. Mieczyk dla żołnierzy II Zgrupowaniu 5. Pułku Strzelców Konnych. Sierpień 1944 r."
        width={3470}
        height={4670}
        className="m-auto desktop:max-w-[600px]"
        priority
      />
    </section>
  );
};
