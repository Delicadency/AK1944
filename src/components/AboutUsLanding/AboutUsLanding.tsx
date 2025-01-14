"use client";

import Image from "next/image";
import { Button } from "../shared/Button/Button";
import Container from "../shared/Container";
import { Heading } from "../shared/Heading/Heading";

const AboutUsLanding = () => {
  return (
    <section className="pb-10 contrast:bg-black00">
      <Container className="flex flex-col items-center gap-10 py-10 tablet:gap-6 tablet:px-9 tablet:py-12 desktop:px-[314px]">
        <Heading color="green" contrast="yellow" underline>
          O nas
        </Heading>
        <p className="text-base contrast:text-yellowContrast tablet:text-center desktop:pb-4">
          Światowy Związek Żołnierzy Armii Krajowej (ŚZŻAK) to organizacja
          skupiająca byłych żołnierzy Armii Krajowej oraz ich sympatyków.
          Powstała w 1990 roku i ma na celu upamiętnienie dziedzictwa AK,
          ochronę dobrego imienia żołnierzy oraz krzewienie patriotyzmu. Obecnie
          działalność związku koncentruje się na działaniach edukacyjnych,
          organizacji uroczystości rocznicowych oraz upamiętnianiu miejsc walki
          i męczeństwa.
        </p>
        <Button
          label="Poznajmy się"
          ariaDescription="Poznajmy się"
          variant="secondary"
        />
      </Container>
      <div className="flex w-full flex-col gap-10 tablet:snap-mandatory tablet:flex-row tablet:overflow-x-auto tablet:scroll-smooth tablet:px-11 desktop:mx-auto desktop:max-w-[1440px] desktop:items-center desktop:justify-center desktop:gap-6 desktop:overflow-x-hidden desktop:px-28">
        <Container className="flex w-[320px] flex-col items-center gap-6 rounded bg-greenMain py-5 contrast:bg-yellowContrast tablet:w-[395px] tablet:flex-shrink-0 tablet:snap-start tablet:gap-3 tablet:px-6 desktop:snap-none">
          <Image
            src="/images/history_AK.png"
            alt="Historia AK"
            width={350}
            height={190}
            className="h-[191px] w-[288px] rounded object-cover tablet:mb-5 tablet:w-[350px]"
          />
          <div className="self-start">
            <Heading color="white" contrast="black" variant="h3">
              Historia AK
            </Heading>
          </div>
          <p className="text-white contrast:text-black tablet:mb-1">
            ŚZŻAK powstał w 1990 roku w Polsce z inicjatywy byłych żołnierzy
            Armii Krajowej, którzy pragnęli upamiętnić działalność jednej z
            największych podziemnych armii II wojny światowej.
          </p>
          <Button
            label="Poznaj historię"
            ariaDescription="Poznaj historię"
            variant="secondary"
          />
        </Container>
        <Container className="flex w-[320px] flex-col items-center gap-6 rounded bg-greenMain py-5 contrast:bg-yellowContrast tablet:w-[395px] tablet:flex-shrink-0 tablet:snap-start tablet:gap-3 tablet:px-6 desktop:snap-none">
          <Image
            src="/images/partisan_trail.png"
            alt="Szlak Partyzancki"
            width={350}
            height={190}
            className="h-[191px] w-[288px] rounded object-cover tablet:mb-5 tablet:w-[350px]"
          />
          <div className="self-start">
            <Heading color="white" contrast="black" variant="h3">
              Szlak Partyzancki
            </Heading>
          </div>
          <p className="text-white contrast:text-black tablet:mb-1">
            Jest propozycją dla Wszystkich rozmiłowanych w pieszych wędrówkach i
            historii oraz cenną pomocą dydaktyczną dla nauczycieli i rodziców w
            wychowaniu patriotycznym dzieci i młodzieży.
          </p>
          <Button
            label="Czytaj więcej"
            ariaDescription="Czytaj więcej"
            variant="secondary"
          />
        </Container>
        <Container className="flex w-[320px] flex-col items-center gap-6 rounded bg-greenMain py-5 contrast:bg-yellowContrast tablet:w-[395px] tablet:flex-shrink-0 tablet:snap-start tablet:gap-3 tablet:px-6 desktop:snap-none">
          <Image
            src="/images/graves.png"
            alt="Inwentarz grobów"
            width={350}
            height={190}
            className="h-[191px] w-[288px] rounded object-cover tablet:mb-5 tablet:w-[350px]"
          />
          <div className="self-start">
            <Heading color="white" contrast="black" variant="h3">
              Inwentarz grobów
            </Heading>
          </div>
          <p className="text-white contrast:text-black tablet:mb-1">
            Dbamy o zachowanie pamięci o żołnierzach AK, dokumentując miejsca
            ich spoczynku. Tworzymy szczegółowy rejestr grobów kombatantów,
            umożliwiający ich odnalezienie i upamiętnienie.
          </p>
          <Button
            label="Znajdź grób"
            ariaDescription="Poznaj historię"
            variant="secondary"
          />
        </Container>
      </div>
    </section>
  );
};

export default AboutUsLanding;
