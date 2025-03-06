import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";
import { CalendarCard } from "@/components/shared/CalendarCard/CalendarCard";
import { CalendarHeader } from "@/components/Calendar/CalendarHeader";
import { Calendar } from "@/components/Calendar/Calendar";
import Container from "@/components/shared/Container";
import { Posts } from "@/components/Calendar/Events/Posts";

export default function CalendarPage() {
  const currentDate = new Date();

  return (
    <Container className="flex flex-col gap-5 p-0">
      <section className="flex flex-col items-start gap-4 px-4">
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Kalendarz uroczystości
        </Heading>
        <p className="text-18 text-greenMain">
          Przedstawiamy harmonogram uroczystości patriotyczno-religijnych, świąt
          oraz wydarzeń organizowanych lub współorganizowanych przez Światowy
          Związek Żołnierzy AK Środowisko 5. Pułku Strzelców Konnych AK w
          Dębicy. Uwzględniamy również wydarzenia, w których planowany jest
          udział delegacji Związku.
        </p>
        <p className="text-18 text-greenMain">
          <strong>Uwaga:</strong> Terminy uroczystości ustalanych przez Związek
          mają charakter orientacyjny i mogą ulec zmianie.
        </p>
      </section>

      <section className="flex w-full flex-col items-center gap-10 self-center bg-greenMain py-9">
        <Calendar date={new Date()} />
        <CalendarCard date={"1234"} description="" hideButton />
      </section>

      <section className="flex flex-col items-center gap-5 px-4 py-10">
        <CalendarHeader
          className="items-center justify-center text-24 text-greenMain"
          iconClassName="stroke-greenMain h-7 w-7"
          date={currentDate}
        />
        <Posts />
      </section>
    </Container>
  );
}
