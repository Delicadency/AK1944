import { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { SupportSection } from "../wesprzyj/_components/SupportSection";
import { VolunteerCard } from "../wesprzyj/_components/VolunteerSection/VolunteerCard";
import { Heading } from "@/components/shared/Heading/Heading";

export const metadata: Metadata = {
  title: "Zostań wolontariuszem",
  description: "Dołącz do naszej organizacji jako wolontariusz",
};

export default function VolunteersPage() {
  return (
    <div className="tablet:pb-20 desktop:pb-150">
      <Container as="main" className="space-y-20">
        <Breadcrumbs currentPageLabel="Zostań wolontariuszem" />

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
            <div className="space-y-6">
              <Heading color="green" contrast="yellow" variant="h3">
                Dlaczego warto zostać wolontariuszem ŚZŻAK?
              </Heading>
              <p>
                Historia nie przetrwa sama – potrzebuje ludzi. Potrzebuje
                Ciebie. Każde wspomnienie, które dziś żyje, każda opowieść,
                którą możemy usłyszeć – to coś więcej niż przeszłość i
                podręczniki. To świadectwo odwagi, poświęcenia i miłości do
                ojczyzny. Jako Światowy Związek Żołnierzy Armii Krajowej czujemy
                odpowiedzialność, by tę pamięć nieść dalej – prawdziwie, z
                szacunkiem, w sposób, który nie przemija.
              </p>
            </div>

            <div>
              <p>
                Wolontariat w naszej organizacji to nie tylko pomoc – to
                współtworzenie żywej historii. To obecność tam, gdzie przeszłość
                spotyka się z przyszłością. Twoje zaangażowanie pomoże nam
                docierać do kolejnych pokoleń, pokazywać, czym jest patriotyzm,
                i dawać świadectwo, które nie przemija.
              </p>
            </div>

            <p>To również szansa dla Ciebie!</p>

            <div className="space-y-6">
              <Heading color="green" contrast="yellow" variant="h3">
                Jako wolontariusz/ka:
              </Heading>
              <ul className="list-disc space-y-2 pl-6">
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
                  otrzymasz zaświadczenie o wolontariacie, możliwość poleceń, a
                  w wielu przypadkach także wsparcie mentorskie.
                </li>
              </ul>
            </div>
          </div>
        </SupportSection>
      </Container>
    </div>
  );
}
