import { Heading } from "@/components/shared/Heading/Heading";
import { bilgorajSection } from "@/data/historyData";
import Image from "next/image";

const { bilgorajTitle, content } = bilgorajSection;

const firstPart = content.slice(0, 5);
const secondPart = content.slice(5);

export const BilgorajSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {bilgorajTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {firstPart.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <div className="relative m-auto aspect-[1.4] w-full max-w-[684px]">
          <Image
            src="/images/history/regiment/patrol.webp"
            alt="Patrol 5. Pułku Strzelców Konnych podczas ćwiczeń letnich w rejonie Istebnej w 1936 r. Na lancach proporce szmaragdowo-białe z amarantowym paskiem w środku."
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
        {secondPart.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);
