import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";

export const CalendarPageHeader = () => (
  <section className="flex flex-col items-start gap-4 px-4 tablet:px-10 desktop:px-24">
    <Breadcrumbs />
    <Heading variant="h2" color="green" contrast="yellow">
      Kalendarz uroczystości
    </Heading>
    <p className="text-18 text-greenMain">
      Przedstawiamy harmonogram uroczystości patriotyczno-religijnych, świąt
      oraz wydarzeń organizowanych lub współorganizowanych przez Światowy
      Związek Żołnierzy AK Środowisko 5. Pułku Strzelców Konnych AK w Dębicy.
      Uwzględniamy również wydarzenia, w których planowany jest udział delegacji
      Związku.
    </p>
    <p className="text-18 text-greenMain">
      <strong>Uwaga:</strong> Terminy uroczystości ustalanych przez Związek mają
      charakter orientacyjny i mogą ulec zmianie.
    </p>
  </section>
);
