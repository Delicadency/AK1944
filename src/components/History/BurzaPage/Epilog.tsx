"use client";
import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {epilogTitle}
      </Heading>
      {!isDesktop && (
        <Image
          src="/images/history/burza/epilog.jpg"
          alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
          width={3500}
          height={2500}
          className="m-auto desktop:max-w-[600px]"
        />
      )}
      <p className="text-lg contrast:text-yellowContrast">{epilog1}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog2}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog3}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog4}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog5}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog6}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog7}</p>
      <p className="text-lg contrast:text-yellowContrast">{epilog8}</p>
      <div className="m-auto flex gap-6">
        {isDesktop && (
          <Image
            src="/images/history/burza/epilog.jpg"
            alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
            width={3500}
            height={2500}
            className="desktop:max-w-[600px]"
          />
        )}
        <Image
          src="/images/history/burza/epilog2.jpg"
          alt="Kwatermistrzostwo II Zgrupowania 5. Pułku Strzelców Konnych AK na Kałużówce. Od lewej siedzą: sierż. Adam Zdeb, Mieczysław Szczygieł, Andrzej Szumliński ps. Rdzawy, NN. Stoją NN."
          width={600}
          height={350}
          className="desktop:max-w-[600px]"
        />
      </div>
    </section>
  );
};
