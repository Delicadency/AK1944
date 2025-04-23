import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { firstDaysTitle, firstDays1, firstDays2, firstDays3, firstDays4 } =
  historyData.burza;

export const FirstDaysSection = () => (
  <section className="flex flex-col gap-6">
    <div className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {firstDaysTitle}
      </Heading>
      <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast desktop:flex-row">
        <div className="flex flex-col gap-6 desktop:w-[50%]">
          <p>{firstDays1}</p>
          <p>{firstDays2}</p>
        </div>
        <div className="flex flex-col gap-6 desktop:w-[50%]">
          <p>{firstDays3}</p>
          <p>{firstDays4}</p>
        </div>
      </div>
    </div>
    <div className="m-auto flex gap-6">
      <Image
        src="/images/history/burza/first-days.webp"
        alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Kondukt pogrzebowy z trumną poległego żołnierza AK w drodze z Gołęczyny na Kałużówkę, 21 sierpnia 1944 r."
        width={2000}
        height={1300}
        className="max-w-[600px]"
      />
      <Image
        src="/images/history/burza/kaluzowka.webp"
        alt="Punkt sanitarny na Kałużówce. Od lewej: dr Kazimierz Gradziński, Maria Szewczyk, Teresa Langer, dr Jan Szymaszek, Władysława Gubernat, Lucyna Dykier."
        width={2000}
        height={1300}
        className="hidden max-w-[600px] desktop:block"
      />
    </div>
  </section>
);
