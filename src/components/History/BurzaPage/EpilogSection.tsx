import { epilog } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { epilogTitle, epilog: content } = epilog;

export const EpilogSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {epilogTitle}
    </Heading>
    <div className="relative m-auto aspect-[600/350] w-full max-w-[600px] desktop:hidden">
      <Image
        src="/images/history/burza/funeral.webp"
        alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
      />
    </div>
    {content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
    <div className="m-auto flex w-full justify-center gap-6">
      <div className="relative hidden aspect-[600/350] h-[350px] w-full max-w-[600px] shrink-0 desktop:block">
        <Image
          src="/images/history/burza/funeral.webp"
          alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="relative aspect-[600/350] w-full max-w-[600px] shrink-0">
        <Image
          src="/images/history/burza/logistics.webp"
          alt="Kwatermistrzostwo II Zgrupowania 5. Pułku Strzelców Konnych AK na Kałużówce. Od lewej siedzą: sierż. Adam Zdeb, Mieczysław Szczygieł, Andrzej Szumliński ps. Rdzawy, NN. Stoją NN."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  </section>
);
