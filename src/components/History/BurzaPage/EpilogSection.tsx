import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const EpilogSection = () => {
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
  } = historyData.burza;

  return (
    <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
      <Heading variant="h4" color="green" contrast="yellow">
        {epilogTitle}
      </Heading>
      <Image
        src="/images/history/burza/epilog.webp"
        alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
        width={3500}
        height={2500}
        className="m-auto max-w-[600px] desktop:hidden"
      />
      <p>{epilog1}</p>
      <p>{epilog2}</p>
      <p>{epilog3}</p>
      <p>{epilog4}</p>
      <p>{epilog5}</p>
      <p>{epilog6}</p>
      <p>{epilog7}</p>
      <p>{epilog8}</p>
      <div className="m-auto flex gap-6">
        <Image
          src="/images/history/burza/epilog.webp"
          alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
          width={3500}
          height={2500}
          className="hidden max-w-[600px] desktop:block"
        />
        <Image
          src="/images/history/burza/epilog2.webp"
          alt="Kwatermistrzostwo II Zgrupowania 5. Pułku Strzelców Konnych AK na Kałużówce. Od lewej siedzą: sierż. Adam Zdeb, Mieczysław Szczygieł, Andrzej Szumliński ps. Rdzawy, NN. Stoją NN."
          width={600}
          height={350}
          className="desktop:max-w-[600px]"
        />
      </div>
    </section>
  );
};
