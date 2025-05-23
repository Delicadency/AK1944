import { CalendarPageHeader } from "@/app/zwiazek/kalendarz/_components/CalendarPageHeader";
import { CalendarMain } from "@/app/zwiazek/kalendarz/_components/CalendarMain";
import Container from "@/components/shared/Container";

export default function CalendarPage() {
  return (
    <Container className="flex flex-col items-center gap-5 p-0 tablet:gap-16 desktop:max-w-full tablet:pb-20 desktop:pb-150">
      <CalendarPageHeader />
      <CalendarMain />
    </Container>
  );
}
