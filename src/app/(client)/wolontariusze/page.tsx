import { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { SupportSection } from "../wesprzyj/_components/SupportSection";
import { VolunteerCard } from "../wesprzyj/_components/VolunteerSection/VolunteerCard";
import { Heading } from "@/components/shared/Heading/Heading";
import { IconBullet } from "@/icons/IconBullet";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zostań wolontariuszem",
  description: "Dołącz do naszej organizacji jako wolontariusz",
};

export default function VolunteersPage() {
  return (
    <div className="tablet:pb-20 desktop:pb-150">
      <Container as="main" className="space-y-20">
        <Breadcrumbs currentPageLabel="Zostań wolontariuszem" />
        <section>
          <SupportSection
            id="volunteer-main-section"
            title="Zostań wolontariuszem"
            card={
              <VolunteerCard
                buttonText="Wypełnij formularz"
                href="#volunteer-form"
              />
            }
          >
            <div className="space-y-6">
              <div className="mt-10 space-y-6">
                <Heading color="green" contrast="yellow" variant="h3">
                  Dlaczego warto zostać wolontariuszem ŚZŻAK?
                </Heading>
                <p>
                  Historia nie przetrwa sama – potrzebuje ludzi. Potrzebuje
                  Ciebie. Każde wspomnienie, które dziś żyje, każda opowieść,
                  którą możemy usłyszeć – to coś więcej niż przeszłość i
                  podręczniki. To świadectwo odwagi, poświęcenia i miłości do
                  ojczyzny. Jako Światowy Związek Żołnierzy Armii Krajowej
                  czujemy odpowiedzialność, by tę pamięć nieść dalej –
                  prawdziwie, z szacunkiem, w sposób, który nie przemija.
                </p>
              </div>

              <div className="space-y-6">
                <p>
                  Wolontariat w naszej organizacji to nie tylko pomoc – to
                  współtworzenie żywej historii. To obecność tam, gdzie
                  przeszłość spotyka się z przyszłością. Twoje zaangażowanie
                  pomoże nam docierać do kolejnych pokoleń, pokazywać, czym jest
                  patriotyzm, i dawać świadectwo, które nie przemija.
                </p>
              </div>
              <p>To również szansa dla Ciebie!</p>
            </div>
          </SupportSection>

          <div className="mt-6 space-y-6">
            <Heading
              color="green"
              contrast="yellow"
              variant="h3"
              className="mb-6 mt-6"
            >
              Jako wolontariusz/ka:
            </Heading>
            <ul className="list-disc space-y-2 pl-6 text-20">
              <li>
                Zdobędziesz doświadczenie przy projektach edukacyjnych,
                medialnych i organizacyjnych,
              </li>
              <li>
                Rozwiniesz swoje umiejętności – od pracy z mediami
                społecznościowymi po organizację wydarzeń,
              </li>
              <li>
                Poznasz niezwykłych ludzi – kombatantów, pasjonatów historii,
                innych wolontariuszy,
              </li>
              <li>
                Zyskasz poczucie sensu – robisz coś, co naprawdę ma wartość,
              </li>
              <li>
                otrzymasz zaświadczenie o wolontariacie, możliwość poleceń, a w
                wielu przypadkach także wsparcie mentorskie.
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-6">
            <Heading color="green" contrast="yellow" variant="h3">
              Jak możesz pomóc? - Formy wsparcia
            </Heading>
            <div className="text-20">
              <p>
                Wolontariat to nie tylko obecność – to konkretne działania,
                które mają znaczenie.<br></br> Obecnie szczególnie potrzebujemy
                osób, które:
              </p>
              <ul className="mt-5 space-y-[20px] font-bold">
                <li className="flex items-start gap-2">
                  <IconBullet
                    className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
                    aria-hidden="true"
                  />{" "}
                  <span className="font-bold">
                    Pomogą w aktualizowaniu treści na stronie internetowej.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconBullet
                    className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
                    aria-hidden="true"
                  />
                  <span className="font-bold">
                    Wesprą prowadzenie naszych mediów społecznościowych.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconBullet
                    className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
                    aria-hidden="true"
                  />
                  <span className="font-bold">
                    Zajmą się fotografowaniem wydarzeń i tworzeniem materiałów
                    wizualnych.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconBullet
                    className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
                    aria-hidden="true"
                  />
                  <span className="font-bold">
                    Poprowadzą warsztaty lub spotkania z młodzieżą.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconBullet
                    className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
                    aria-hidden="true"
                  />
                  <span className="font-bold">
                    Pomogą w przygotowaniu i obsłudze wydarzeń historycznych i
                    patriotycznych.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconBullet
                    className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
                    aria-hidden="true"
                  />
                  <span className="font-bold">
                    Wezmą udział w rajdach szlakiem partyzanckim.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconBullet
                    className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
                    aria-hidden="true"
                  />
                  <span className="font-bold">
                    Będą promować działalność Związku w swoim otoczeniu i
                    lokalnej społeczności.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center md:w-1/2">
            <Image
              src="/images/volunteers.png"
              alt="Ludzie"
              width={480}
              height={280}
            />
          </div>
        </section>
        <section className="mt-6 flex justify-center">
          <div className="w-full max-w-3xl space-y-6 text-center text-28 font-bold">
            <div className="inline-block">
              <Heading
                color="green"
                contrast="yellow"
                variant="h3"
                className="mb-6 mt-6 uppercase"
              >
                dołącz do nas!
              </Heading>
            </div>
            <p>
              Razem możemy więcej niż tylko opowiadać historię – możemy ją
              przeżywać, przekazywać dalej i sprawić, by nigdy nie została
              zapomniana.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
