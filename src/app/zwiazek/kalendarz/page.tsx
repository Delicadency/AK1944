import { CalendarPageHeader } from "@/app/zwiazek/kalendarz/_components/CalendarPageHeader";
import { CalendarMain } from "@/app/zwiazek/kalendarz/_components/CalendarMain";
import Container from "@/components/shared/Container";

export default function CalendarPage() {
  return (
    <Container className="flex flex-col items-center gap-5 p-0 tablet:gap-16 desktop:max-w-full desktop:p-0">
      <CalendarPageHeader />
      <CalendarMain />
    </Container>
  );
}
