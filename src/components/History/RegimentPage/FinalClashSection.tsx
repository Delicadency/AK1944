import { Heading } from "@/components/shared/Heading/Heading";
import { finalClashSection } from "@/data/historyData";
import Image from "next/image";

const { finalClashTitle, content } = finalClashSection;

export const FinalClashSection = () => (
  <section className="flex flex-col gap-6 text-lg">
    <Heading variant="h4" color="green" contrast="yellow">
      {finalClashTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="relative m-auto aspect-[1.4] w-full max-w-[684px]">
        <Image
          src="/images/history/regiment/communication.webp"
          alt="Taczanka plutonu łączności 5. Pulku Strzelców Konnych z centralą telefoniczną."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  </section>
);
