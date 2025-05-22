import { woznikiSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { woznikiTitle, content } = woznikiSection;
const firstColumn = content.slice(0, 5);
const secondColumn = content.slice(5, 7);
const thirdColumn = content.slice(7);

export const WoznikiSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {woznikiTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {firstColumn.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <Image
          src="/images/history/regiment/field_kitchen.webp"
          alt="Kuchnia polowa 5. Pułku Strzelców Konnych podczas ćwiczeń letnich w 1936 r."
          width={604}
          height={380}
          className="m-auto"
        />
        {secondColumn.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
    <div className="m-auto flex gap-6">
      <Image
        src="/images/history/regiment/color_guard.webp"
        alt="Pułkowy poczet sztandarowy i szwadron honorowy 5. Pułku Strzelców Konnych oczekują w Dębicy na przejazd króla Rumunii Karola II. Przez tory przechodzi płk Ignacy Kowalczewski."
        width={604}
        height={430}
        className=""
      />
      <Image
        src="/images/history/regiment/cheers.webp"
        alt="„Strzemienny” na pożegnanie ppłk. Bronisława Mokrzyckiego. Od lewej: ppłk dypl. Bronisław Mokrzycki, rtm. Mieczysław Chwaliński, rtm. Aleksander Jodkiewicz, rtm. Jarosław Chodań, płk Ignacy Kowalczewski, rtm. Antoni Dębski, p. Mokrzycka, por. Tadeusz Gawrzycki, p. Jodkiewiczowi, p. Piotrowska, p. Łopuska i p. Dębska. Dębica, 1937 r."
        width={604}
        height={430}
        className="hidden desktop:block"
      />
    </div>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6">
        {thirdColumn.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <Image
          src="/images/history/regiment/cheers.webp"
          alt="„Strzemienny” na pożegnanie ppłk. Bronisława Mokrzyckiego. Od lewej: ppłk dypl. Bronisław Mokrzycki, rtm. Mieczysław Chwaliński, rtm. Aleksander Jodkiewicz, rtm. Jarosław Chodań, płk Ignacy Kowalczewski, rtm. Antoni Dębski, p. Mokrzycka, por. Tadeusz Gawrzycki, p. Jodkiewiczowi, p. Piotrowska, p. Łopuska i p. Dębska. Dębica, 1937 r."
          width={604}
          height={430}
          className="m-auto desktop:hidden"
        />
      </div>
    </div>
  </section>
);
