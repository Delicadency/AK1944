import { epilog } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { epilogTitle, epilog: content } = epilog;

export const EpilogSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {epilogTitle}
    </Heading>
    <Image
      src="/images/history/burza/epilog.webp"
      alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
      width={3500}
      height={2500}
      className="m-auto w-full max-w-[600px] desktop:hidden"
    />
    {content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
    <div className="m-auto flex gap-6">
      <Image
        src="/images/history/burza/epilog.webp"
        alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
        width={3500}
        height={2500}
        className="hidden w-full max-w-[600px] desktop:block"
      />
      <Image
        src="/images/history/burza/epilog2.webp"
        alt="Kwatermistrzostwo II Zgrupowania 5. Pułku Strzelców Konnych AK na Kałużówce. Od lewej siedzą: sierż. Adam Zdeb, Mieczysław Szczygieł, Andrzej Szumliński ps. Rdzawy, NN. Stoją NN."
        width={600}
        height={350}
        className="w-full desktop:max-w-[600px]"
      />
    </div>
  </section>
);
