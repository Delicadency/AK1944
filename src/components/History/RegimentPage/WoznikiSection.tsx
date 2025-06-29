import { woznikiSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { woznikiTitle, content } = woznikiSection;
const firstPart = content.slice(0, 5);
const secondPart = content.slice(5, 7);
const thirdPart = content.slice(7, 9);
const fourthPart = content.slice(9);

export const WoznikiSection = () => (
  <section className="flex flex-col gap-6 text-lg">
    <Heading variant="h4" color="green" contrast="yellow">
      {woznikiTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {firstPart.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <div className="relative m-auto aspect-[1.58] w-full max-w-[684px]">
          <Image
            src="/images/history/regiment/field_kitchen.webp"
            alt="Kuchnia polowa 5. Pułku Strzelców Konnych podczas ćwiczeń letnich w 1936 r."
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
    <div className="flex gap-6">
      <div className="relative m-auto aspect-[1.4] w-full max-w-[684px]">
        <Image
          src="/images/history/regiment/color_guard.webp"
          alt="Pułkowy poczet sztandarowy i szwadron honorowy 5. Pułku Strzelców Konnych oczekują w Dębicy na przejazd króla Rumunii Karola II. Przez tory przechodzi płk Ignacy Kowalczewski."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="relative m-auto hidden aspect-[1.4] w-full max-w-[684px] desktop:block">
        <Image
          src="/images/history/regiment/cheers.webp"
          alt="„Strzemienny” na pożegnanie ppłk. Bronisława Mokrzyckiego. Od lewej: ppłk dypl. Bronisław Mokrzycki, rtm. Mieczysław Chwaliński, rtm. Aleksander Jodkiewicz, rtm. Jarosław Chodań, płk Ignacy Kowalczewski, rtm. Antoni Dębski, p. Mokrzycka, por. Tadeusz Gawrzycki, p. Jodkiewiczowi, p. Piotrowska, p. Łopuska i p. Dębska. Dębica, 1937 r."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {thirdPart.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {fourthPart.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="relative m-auto aspect-[1.4] w-full max-w-[600px] desktop:hidden">
        <Image
          src="/images/history/regiment/cheers.webp"
          alt="„Strzemienny” na pożegnanie ppłk. Bronisława Mokrzyckiego. Od lewej: ppłk dypl. Bronisław Mokrzycki, rtm. Mieczysław Chwaliński, rtm. Aleksander Jodkiewicz, rtm. Jarosław Chodań, płk Ignacy Kowalczewski, rtm. Antoni Dębski, p. Mokrzycka, por. Tadeusz Gawrzycki, p. Jodkiewiczowi, p. Piotrowska, p. Łopuska i p. Dębska. Dębica, 1937 r."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  </section>
);
