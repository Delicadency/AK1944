import { CalendarPageHeader } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarPageHeader";
import { CalendarMain } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarMain";
import Container from "@/components/shared/Container";

export default function CalendarPage() {
  return (
    <Container className="flex flex-col items-center gap-5 p-0 tablet:gap-16 tablet:pb-20 desktop:max-w-full desktop:px-0 desktop:pb-150">
      <CalendarPageHeader />
      <CalendarMain />
    </Container>
  );
}
