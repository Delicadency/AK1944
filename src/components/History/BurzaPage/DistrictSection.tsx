import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { districtTitle, district1, district2, district3, district4 } =
  historyData.burza;

export const DistrictSection = () => (
  <section className="flex flex-col gap-6 desktop:flex-row">
    <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
      <Heading variant="h4" color="green" contrast="yellow">
        {districtTitle}
      </Heading>
      <p>{district1}</p>
      <p>{district2}</p>
      <p>{district3}</p>
      <p>{district4}</p>
    </div>
    <Image
      src="/images/history/burza/district.webp"
      alt="Msza św. polowa odprawiana przez ks. Stanisława Bartosza ps. Mieczyk dla żołnierzy II Zgrupowaniu 5. Pułku Strzelców Konnych. Sierpień 1944 r."
      width={3470}
      height={4670}
      className="m-auto max-w-[600px]"
      priority
    />
  </section>
);
