import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";

const AboutUs = () => {
  return (
    <section className="pb-10 tablet:pb-0">
      <BackgroundImage
        src="/images/aboutUs_bg.png"
        alt="AboutUs BackgroundImage"
        width={1458}
        height={643}
        className="-top-[105px] h-[643px] bg-black00 object-center-100 tablet:-top-0 tablet:object-[80%]"
      >
        <Container className="flex h-full flex-col items-center justify-center tablet:px-10 desktop:pl-[104px] desktop:pr-[647px]">
          <Heading
            contrast="yellow"
            color="green"
            className="mb-4 mt-[68px] self-start tablet:mb-12 tablet:text-white"
          >
            O nas
          </Heading>

          <article className="flex flex-col items-center justify-center gap-6 desktop:text-justify">
            <p className="text-16 text-white contrast:bg-yellowContrast tablet:text-18">
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
            <p className="text-16 text-black contrast:bg-yellowContrast tablet:text-18 tablet:text-white">
              Związek dba o zachowanie pamięci historycznej poprzez wydawnictwa,
              spotkania i współorganizowanie wydarzeń kulturalnych, takich jak
              wystawy i projekcje filmowe. W wielu regionach Polski działa w
              postaci lokalnych kół, które aktywnie włączają się w życie
              lokalnych społeczności.
            </p>
            <p className="text-16 text-black contrast:bg-yellowContrast tablet:text-18 tablet:text-white">
              Ze względu na starzenie się kombatantów, organizacja zmienia swój
              charakter, coraz bardziej skupiając się na przekazywaniu wartości
              kolejnym pokoleniom. Wspierają ją także osoby niezwiązane
              bezpośrednio z AK, ale podzielające jej cele i misję.
            </p>
          </article>
        </Container>
      </BackgroundImage>
    </section>
  );
};

export default AboutUs;
