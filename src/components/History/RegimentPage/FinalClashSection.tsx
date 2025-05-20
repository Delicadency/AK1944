import { Heading } from "@/components/shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import Image from "next/image";

const { finalClashTitle, finalClash1, finalClash2, finalClash3 } =
  historyData.regiment;

export const FinalClashSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {finalClashTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <p>{finalClash1}</p>
        <p>{finalClash2}</p>
        <p>{finalClash3}</p>
      </div>
      <Image
        src="/images/history/regiment/communication.webp"
        alt="Taczanka plutonu łączności 5. Pulku Strzelców Konnych z centralą telefoniczną."
        width={604}
        height={452}
        className="m-auto"
      />
    </div>
  </section>
);
