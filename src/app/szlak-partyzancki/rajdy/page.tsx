import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Button } from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";

import { Suspense } from "react";
import React from "react";
import { RallyList } from "../_components/RallyList";

type PageProps = {
  searchParams: any;
};

export default function RalliesPage({ searchParams }: PageProps) {
  const params: any = React.use(searchParams);
  const page = parseInt(params.page || "1", 10);
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h3" color="green" contrast="yellow">
          Rajdy
        </Heading>
        <div className="py-3">
          <p>
            Rajdy na Szlaku Partyzanckim II Zgrupowania AK Obwodu Dębica
            odbywają się regularnie od września 2004 roku. Organizowane są w
            celu ocalenia od zapomnienia i upamiętnienia bohaterskiej
            działalności żołnierzy Armii Krajowej. Cyklicznie odbywają się 3
            rajdy – w styczniu Pieszy Rajd Zimowy, jako rajd otwarty z okazji
            rocznicy rozwiązania Armii Krajowej; w czerwcu Rajd Gwiaździsty
            Kałużówka dla uczniów szkół podstawowych z okazji Święta 5. Pułku
            Strzelców Konnych oraz na przełomie września i października dla
            uczniów szkół ponadpodstawowych z okazji Dnia Polskiego Państwa
            Podziemnego. Organizatorem rajdów jest Światowy Związek Żołnierzy AK
            w Dębicy przy wsparciu partnerów. Wraz z powstaniem Szlaku
            Partyzanckiego I Zgrupowania AK Obwodu Dębica, którego realizatorem
            było Powiatowe Centrum Edukacji Regionalnej w Ropczycach,
            organizowane są rajdy turystyczne w powiecie
            ropczycko-sędziszowskim. Każdy rajd na Szlaku Partyzanckim to nie
            tylko okazja do aktywnego spędzenia czasu, ale także głęboka lekcja
            historii, przypominająca o bohaterstwie i poświęceniu żołnierzy
            Armii Krajowej.
          </p>
        </div>
        <Button
          label="Zapisz się na rajd"
          href={""}
          ariaDescription="Zapisz się na rajd"
          variant="primaryBlue"
        />
        <Suspense fallback={<p>Ładowanie listy rajdów...</p>}>
          <RallyList currentPage={currentPage} />
        </Suspense>
      </Container>
    </div>
  );
}

// robic zadanie na dopisanie tekstu
// dawac komentarz w kodzie ze tutaj trzeba cos dolozyc
