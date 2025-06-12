import { Routes } from "@/routes";
import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import { Button } from "@/components/shared/Button/Button";
import { getEventForToday } from "@/app/(client)/zwiazek/kalendarz/_utils/getEventsForToday";
import Container from "@/components/shared/Container";

interface Props {
  withButton?: boolean;
}

export const CalendarCard = ({ withButton = false }: Props) => {
  const eventForToday = getEventForToday();
  const [, , eventYear] = eventForToday?.date.split(".") || [""];
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("pl-PL", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const dayInNumbers = currentDate.getDate();
  const dayInWords = currentDate.toLocaleString("pl-PL", { weekday: "long" });

  return (
    <div className="flex items-center justify-center overflow-hidden px-0 tablet:px-0 desktop:px-0">
      <BackgroundImage
        alt="calendar background"
        src="/images/calendar_background.png"
        fill
      >
        <Container className="flex w-[284px] flex-col items-center justify-center py-4 font-lora">
          <h4 className="text-24 font-bold" aria-label="Rok i miesiąc">
            {currentMonth} {currentYear}
          </h4>
          <hr
            className="mt-5 w-full border border-solid border-redMain contrast:border-black"
            aria-hidden
          />
          <p
            className="my-4 text-96 font-bold leading-none"
            aria-label="Dzień miesiąca"
          >
            {dayInNumbers}
          </p>
          <p className="text-24 font-bold" aria-label="Dzień tygodnia">
            {dayInWords}
          </p>
          <hr
            className="my-5 w-full border border-solid border-redMain contrast:border-black"
            aria-hidden
          />
          {eventForToday?.title && (
            <div className="flex flex-col items-center">
              <p className="relative mb-5 font-sans text-16 leading-normal tracking-tight">
                <b>{eventYear}</b> - {eventForToday?.title}
              </p>
            </div>
          )}
          {withButton && (
            <Button
              variant="primaryBlue"
              label="Kalendarz uroczystości"
              ariaDescription="Kalendarz uroczystości"
              href={Routes.CALENDAR}
            />
          )}
        </Container>
      </BackgroundImage>
    </div>
  );
};
