// import parse from "html-react-parser";
// import { getCalendarPost } from "@/dataAccess/calendarPosts";
// import { months } from "@/components/Calendar/Dates/Dates";

// export const List = async () => {
//   const [posts, error] = await getCalendarPost();
//   console.log(posts);

//   if (error) {
//     return <p>{`Wystąpił błąd podczas ładowania danych. ${error.message}`}</p>;
//   }

//   if (!posts) {
//     return <p>Brak danych</p>;
//   }

//   const splitEventsByMonth = (content?: string): Record<string, string[]> => {
//     const sections: Record<string, string[]> = {};
//     let currentMonth = "";

//     // Podział contentu na linie
//     content?.split(/<p>/).forEach((line) => {
//       const cleanLine = line.replace(/<\/p>/g, "").trim();

//       if (months.includes(cleanLine.replace(/<[^>]+>/g, "").toUpperCase())) {
//         currentMonth = cleanLine;
//         sections[currentMonth] = [];
//       } else if (currentMonth && cleanLine) {
//         sections[currentMonth].push(line);
//       }
//     });
//     return sections;
//   };

//   const eventsByMonth = splitEventsByMonth(posts?.content);

//   return (
//     <div className="mx-auto max-w-2xl p-4">
//       {Object.entries(eventsByMonth).map(([month, events]) => (
//         <div key={month} className="mb-6">
//           <h2 className="text-blue-600 mb-2 text-xl font-bold">
//             {parse(month)}
//           </h2>
//           <div className="space-y-2">
//             {events.map((event, index) => (
//               <p key={index}>{parse(event)}</p>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export const cardsPlaceholder = [
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
