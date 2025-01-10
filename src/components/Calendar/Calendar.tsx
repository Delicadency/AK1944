import { Button } from "../shared/Button/Button";
import Container from "../shared/Container";

const Calendar = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const dayInNumbers = currentDate.getDate();
  const dayInWords = currentDate.toLocaleString("default", { weekday: "long" });
  return (
    <Container className="flex flex-col items-center justify-center py-4 font-lora">
      <h4 className="text-24 font-bold">
        {currentMonth} {currentYear}
      </h4>
      <hr className="mt-5 w-full border border-solid border-redMain" />
      <p className="text-[96px] font-bold">{dayInNumbers}</p>
      <p className="text-24 font-bold">{dayInWords}</p>
      <hr className="my-5 w-full border border-solid border-redMain" />
      <div className="mb-5 grid grid-cols-[auto_1fr] gap-2 font-sans">
        <p className="text-16 font-bold">1942</p>
        <p className="relative text-16 before:absolute before:-left-[7px] before:content-['-']">
          Związek Walki Zbrojnej (ZWZ) został przekształcony w Armię Krajową
          (AK)
        </p>
      </div>
      <Button
        variant="primary"
        label="Kalendarz uroczystości"
        ariaDescription="Kalendarz uroczystości"
      />
    </Container>
  );
};

export default Calendar;
