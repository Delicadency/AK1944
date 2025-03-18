import { Routes } from "@/routes";
import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import { Button } from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container";
interface Props {
  date?: string | number;
  description?: string;
  withButton?: boolean;
}

export const CalendarCard = ({
  date,
  description,
  withButton = false,
}: Props) => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const dayInNumbers = currentDate.getDate();
  const dayInWords = currentDate.toLocaleString("default", { weekday: "long" });
  return (
    <div className="flex w-[284px] items-center justify-center overflow-hidden px-0 tablet:px-0 desktop:px-0">
      <BackgroundImage
        alt="calendar background"
        src="/images/calendar_background.png"
        fill
      >
        <Container className="flex flex-col items-center justify-center py-4 font-lora">
          <h4 className="text-24 font-bold" aria-label="Rok i miesiąc">
            {currentMonth} {currentYear}
          </h4>
          <hr
            className="mt-5 w-full border border-solid border-redMain contrast:border-black"
            aria-hidden
          />
          <p className="text-96 font-bold" aria-label="Dzień miesiąca">
            {dayInNumbers}
          </p>
          <p className="text-24 font-bold" aria-label="Dzień tygodnia">
            {dayInWords}
          </p>
          <hr
            className="my-5 w-full border border-solid border-redMain contrast:border-black"
            aria-hidden
          />
          {description && (
            <div className="mb-5 grid grid-cols-[auto_1fr] gap-2 font-sans">
              <p className="text-16 font-bold">{date}</p>
              <p className="relative text-16 before:absolute before:-left-[7px] before:content-['-']">
                {description}
              </p>
            </div>
          )}
          {withButton && (
            <Button
              variant="primary"
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
