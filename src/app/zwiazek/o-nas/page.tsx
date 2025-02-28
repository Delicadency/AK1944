import { AboutUs } from "@/components/AboutUs/AboutUs";
import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";

const AboutUsPage = () => {
  return (
    <section className="pb-10 tablet:pb-0">
      <BackgroundImage
        src="/images/aboutUs_bg.png"
        alt="AboutUs BackgroundImage"
        fill
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

          <article className="flex flex-col items-center justify-center gap-6 pb-10 text-16 text-white tablet:text-18 desktop:text-justify">
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

      <Container className="mt-5 flex flex-col items-center justify-center gap-6 text-16 text-black tablet:hidden tablet:text-18 desktop:text-justify">
        <AboutUs />
      </Container>
    </section>
  );
};

export default AboutUsPage;
