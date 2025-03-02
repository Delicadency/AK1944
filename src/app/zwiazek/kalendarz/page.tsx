"use client";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";
import { useState } from "react";
import { Button } from "@/components/shared/Button/Button";
import { CalendarCard } from "@/components/shared/CalendarCard/CalendarCard";
import Container from "@/components/shared/Container";
import IconArrowCircle from "@/icons/IconArrowCircle";
import clsx from "clsx";
import Image from "next/image";

export default function CalendarPage() {
  const daysOfWeek = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Ndz"];
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );
    const firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7; // Poniedziałek jako pierwszy
    const daysInMonth = lastDayOfMonth.getDate();
    const prevMonthLastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ).getDate();
    const nextMonthDays = 42 - (firstDayIndex + daysInMonth);

    const weeks: {
      day: number;
      isCurrentMonth: boolean;
      hasEvent?: boolean;
      isToday?: boolean;
    }[][] = [];
    let week: {
      day: number;
      isCurrentMonth: boolean;
      hasEvent?: boolean;
      isToday?: boolean;
    }[] = [];

    // Poprzedni miesiąc
    for (let dayIndex = firstDayIndex; dayIndex > 0; dayIndex--) {
      const prevMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        prevMonthLastDay - dayIndex + 1,
      );
      week.push({
        day: prevMonthLastDay - dayIndex + 1,
        isCurrentMonth: false,
        hasEvent: cardsPlaceholder.some((card) => {
          const [day, month] = card.date.split(".").map(Number);
          return (
            day === prevMonthDate.getDate() &&
            month - 1 === prevMonthDate.getMonth()
          );
        }),
      });
    }

    // Bieżący miesiąc
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();
      const hasEvent = cardsPlaceholder.some((card) => {
        const [day, month] = card.date.split(".").map(Number);
        return day === i && month - 1 === currentDate.getMonth();
      });
      week.push({
        day: i,
        isCurrentMonth: true,
        isToday,
        hasEvent,
      });
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    // Następny miesiąc
    for (let i = 1; i <= nextMonthDays; i++) {
      const nextMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i,
      );
      week.push({
        day: i,
        isCurrentMonth: false,
        hasEvent: cardsPlaceholder.some((card) => {
          const [day, month] = card.date.split(".").map(Number);
          return (
            day === nextMonthDate.getDate() &&
            month - 1 === nextMonthDate.getMonth()
          );
        }),
      });
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    return weeks;
  };

  const calendarDays = generateCalendar();

  const [postsToShow, setPostsToShow] = useState(3);

  const handleShowMore = () => {
    setPostsToShow((prev) => prev + 3);
  };

  const showMoreButton = postsToShow < cardsPlaceholder.length;

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
        <div className="flex flex-col items-center gap-5">
          <CalendarHeader
            className="w-full items-center justify-between px-1.5 text-24 text-white"
            currentDate={`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
            prevMonth={handlePrevMonth}
            nextMonth={handleNextMonth}
          />
          <table className="flex flex-col items-center gap-5">
            <thead>
              <tr className="border-b-2 border-greenC text-greenC">
                {daysOfWeek.map((day) => (
                  <td key={day} className="h-10 w-10 text-center text-18">
                    {day}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {calendarDays.map((week, weekIndex) => (
                <tr key={weekIndex} className="flex items-center gap-0.5">
                  {week.map((dayObj, dayIndex) => (
                    <td
                      key={dayIndex}
                      className={`flex h-10 w-10 items-center justify-center text-18 ${
                        dayObj.hasEvent ? "rounded border-2 border-white" : ""
                      } ${
                        dayObj.isCurrentMonth ? "text-white" : "text-greenC"
                      } ${dayObj.isToday ? "rounded border-2 border-yellowVintage" : ""}`}
                    >
                      {dayObj.day}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CalendarCard date={"1234"} description="" hideButton />
      </section>

      <section className="flex flex-col items-center gap-5 px-4 py-10">
        <CalendarHeader
          className="items-center justify-center text-24 text-greenMain"
          iconClassName="stroke-greenMain h-7 w-7"
          currentDate={`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
          prevMonth={handlePrevMonth}
          nextMonth={handleNextMonth}
        />

        <article className="flex w-full flex-col items-center gap-5">
          {cardsPlaceholder.slice(0, postsToShow).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              date={card.date}
              description={card.description}
              isLast={index === cardsPlaceholder.length - 1}
            />
          ))}
        </article>
        {showMoreButton && (
          <Button
            label="Pokaż więcej"
            ariaDescription="Pokaż więcej"
            variant="inversion"
            onClick={handleShowMore}
          />
        )}
      </section>
    </Container>
  );
}

interface CalendarHeaderProps {
  currentDate: string;
  nextMonth: () => void;
  prevMonth: () => void;
  className?: string;
  iconClassName?: string;
}

const CalendarHeader = ({
  currentDate,
  prevMonth,
  nextMonth,
  className,
  iconClassName,
}: CalendarHeaderProps) => {
  return (
    <div className={clsx("flex items-center gap-5", className)}>
      <button onClick={prevMonth} aria-label="Poprzedni miesiąc">
        <IconArrowCircle
          className={clsx("rotate-180 stroke-white", iconClassName)}
        />
      </button>
      <h2 className="font-bold">{currentDate}</h2>
      <button onClick={nextMonth} aria-label="Następny miesiąc">
        <IconArrowCircle className={clsx("stroke-white", iconClassName)} />
      </button>
    </div>
  );
};

interface CardProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  date: string;
  description: string;
  isLast: boolean;
}

const Card = ({ title, image, date, description, isLast }: CardProps) => {
  return (
    <div
      className={`flex flex-col items-start gap-2 bg-white pb-10 ${isLast ? "last:border-b-0" : "border-b-4 border-b-greenMain"}`}
    >
      <div className="relative flex h-60 w-72 items-center justify-center self-center">
        <Image
          alt={image.alt}
          src={image.src}
          fill
          className="rounded"
          objectFit="cover"
        />
      </div>

      <Heading color="green" contrast="yellow" variant="h4">
        {title}
      </Heading>
      <p className="text-18">{date}</p>
      <p className="text-20 leading-6">{description}</p>
    </div>
  );
};

const cardsPlaceholder = [
  {
    title: "Polskie Termopile – Bitwa pod Węgrowem",
    image: {
      src: "/images/news_placeholder.png",
      alt: "placeholder",
    },
    date: "01.03.1863",
    description:
      "Podczas Powstania Styczniowego doszło do jednej z ważniejszych bitew, podczas której polscy powstańcy stawili opór wojskom rosyjskim. Wydarzenie nazwane „polskimi Termopilami” odbiło się szerokim echem w Europie.",
  },
  {
    title: "Początek wojny polsko-bolszewickiej",
    image: {
      src: "/images/news_placeholder.png",
      alt: "placeholder",
    },
    date: "25.02.1919",
    description:
      "Oddziały polskie zaatakowały wojska bolszewickie pod Berezą Kartuską. Tak rozpoczęła się wojna o granice II Rzeczypospolitej zakończona zwycięstwem Polski i podpisaniem pokoju ryskiego w 1921 roku.",
  },
  {
    title: "Zaślubiny Polski z morzem",
    image: {
      src: "/images/news_placeholder.png",
      alt: "placeholder",
    },
    date: "10.02.1920",
    description:
      "W symbolicznym akcie gen. Józef Haller wrzucił pierścień do Bałtyku w Pucku na znak odzyskania przez Polskę dostępu do morza po ponad 120 latach zaborów.",
  },
  {
    title: "Polskie Termopile – Bitwa pod Węgrowem",
    image: {
      src: "/images/news_placeholder.png",
      alt: "placeholder",
    },
    date: "04.02.1863",
    description:
      "Podczas Powstania Styczniowego doszło do jednej z ważniejszych bitew, podczas której polscy powstańcy stawili opór wojskom rosyjskim. Wydarzenie nazwane „polskimi Termopilami” odbiło się szerokim echem w Europie.",
  },
  {
    title: "Początek wojny polsko-bolszewickiej",
    image: {
      src: "/images/news_placeholder.png",
      alt: "placeholder",
    },
    date: "08.02.1919",
    description:
      "Oddziały polskie zaatakowały wojska bolszewickie pod Berezą Kartuską. Tak rozpoczęła się wojna o granice II Rzeczypospolitej zakończona zwycięstwem Polski i podpisaniem pokoju ryskiego w 1921 roku.",
  },
  {
    title: "Zaślubiny Polski z morzem",
    image: {
      src: "/images/news_placeholder.png",
      alt: "placeholder",
    },
    date: "10.02.1920",
    description:
      "W symbolicznym akcie gen. Józef Haller wrzucił pierścień do Bałtyku w Pucku na znak odzyskania przez Polskę dostępu do morza po ponad 120 latach zaborów.",
  },
];
