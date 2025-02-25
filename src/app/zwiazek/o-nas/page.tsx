"use client";
import { useEffect, useState } from "react";
import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";

const AboutUs = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="pb-10 tablet:pb-0">
      <BackgroundImage
        src="/images/aboutUs_bg.png"
        alt="AboutUs BackgroundImage"
        width={1458}
        height={643}
        className="h-full bg-black00 object-center-100 tablet:object-[80%]"
      >
        <Container className="flex flex-col items-start justify-center tablet:px-10 desktop:pl-[104px] desktop:pr-[647px]">
          <Breadcrumbs color="white" />
          <Heading
            contrast="yellow"
            color="white"
            className="my-4 self-start leading-9 tablet:mb-10 tablet:leading-10 tablet:text-white desktop:mt-5"
          >
            O nas
          </Heading>

          <article className="flex flex-col items-center justify-center gap-6 pb-[40px] text-16 text-white tablet:text-18 desktop:text-justify">
            <p>
              Światowy Związek Żołnierzy Armii Krajowej (ŚZŻAK) to organizacja
              skupiająca byłych żołnierzy Armii Krajowej oraz ich sympatyków.
              Powstała w 1990 roku i ma na celu upamiętnienie dziedzictwa AK,
              ochronę dobrego imienia żołnierzy oraz krzewienie patriotyzmu.
              Obecnie działalność związku koncentruje się na działaniach
              edukacyjnych, organizacji uroczystości rocznicowych oraz
              upamiętnianiu miejsc walki i męczeństwa. ŚZŻAK angażuje się
              również w opiekę nad kombatantami, a także współpracuje z
              młodzieżą, szkołami i organizacjami społecznymi, promując historię
              Armii Krajowej.
            </p>
            {isWideScreen && (
              <>
                <p>
                  Związek dba o zachowanie pamięci historycznej poprzez
                  wydawnictwa, spotkania i współorganizowanie wydarzeń
                  kulturalnych, takich jak wystawy i projekcje filmowe. W wielu
                  regionach Polski działa w postaci lokalnych kół, które
                  aktywnie włączają się w życie lokalnych społeczności.
                </p>
                <p>
                  Ze względu na starzenie się kombatantów, organizacja zmienia
                  swój charakter, coraz bardziej skupiając się na przekazywaniu
                  wartości kolejnym pokoleniom. Wspierają ją także osoby
                  niezwiązane bezpośrednio z AK, ale podzielające jej cele i
                  misję.
                </p>
              </>
            )}
          </article>
        </Container>
      </BackgroundImage>
      {!isWideScreen && (
        <Container className="gap-6text-16 mt-5 flex flex-col items-center justify-center text-black tablet:text-18 desktop:text-justify">
          <p>
            Związek dba o zachowanie pamięci historycznej poprzez wydawnictwa,
            spotkania i współorganizowanie wydarzeń kulturalnych, takich jak
            wystawy i projekcje filmowe. W wielu regionach Polski działa w
            postaci lokalnych kół, które aktywnie włączają się w życie lokalnych
            społeczności.
          </p>
          <p>
            Ze względu na starzenie się kombatantów, organizacja zmienia swój
            charakter, coraz bardziej skupiając się na przekazywaniu wartości
            kolejnym pokoleniom. Wspierają ją także osoby niezwiązane
            bezpośrednio z AK, ale podzielające jej cele i misję.
          </p>
        </Container>
      )}
    </section>
  );
};

export default AboutUs;
