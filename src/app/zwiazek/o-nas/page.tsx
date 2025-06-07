import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";
import Container from "@/components/shared/Container";

export default function AboutUsPage() {
  return (
    <section>
      <BackgroundImage
        src="/images/become_donor_bg_1.webp"
        alt="AboutUs BackgroundImage"
        fill
        className="h-full bg-black00 object-center-100 tablet:object-[80%]"
      >
        <Container className="flex flex-col items-start justify-center tablet:px-10 desktop:pl-24">
          <Breadcrumbs color="white" />

          <Heading
            contrast="yellow"
            color="white"
            className="my-4 self-start leading-9 tablet:mb-10 tablet:leading-10 tablet:text-white desktop:mt-5"
          >
            O nas
          </Heading>

          <article className="flex max-w-2xl flex-col items-center justify-center gap-6 pb-10 text-16 text-white tablet:text-18 desktop:text-justify">
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

            <div className="hidden gap-6 tablet:flex tablet:flex-col">
              <AboutUs />
            </div>
          </article>
        </Container>
      </BackgroundImage>

      <Container className="mt-5 flex flex-col items-center justify-center gap-6 pb-10 text-16 text-black tablet:hidden tablet:text-18 desktop:text-justify">
        <AboutUs />
      </Container>
    </section>
  );
}

const AboutUs = () => (
  <>
    <p>
      Związek dba o zachowanie pamięci historycznej poprzez wydawnictwa,
      spotkania i współorganizowanie wydarzeń kulturalnych, takich jak wystawy i
      projekcje filmowe. W wielu regionach Polski działa w postaci lokalnych
      kół, które aktywnie włączają się w życie lokalnych społeczności.
    </p>
    <p>
      Ze względu na starzenie się kombatantów, organizacja zmienia swój
      charakter, coraz bardziej skupiając się na przekazywaniu wartości kolejnym
      pokoleniom. Wspierają ją także osoby niezwiązane bezpośrednio z AK, ale
      podzielające jej cele i misję.
    </p>
  </>
);
