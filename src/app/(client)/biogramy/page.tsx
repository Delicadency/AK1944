import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";
import Container from "@/components/shared/Container";
import { biogramsParagraphs } from "./data/biogramsText";
import { BiogramsList } from "./components/biogramsList";
import { people } from "./data/peopleList";

export default function BiogramsPage() {
  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Biogramy
        </Heading>
        <div className="max-w-4xl">
          {biogramsParagraphs.map((paragraph, idx) => (
            <p key={idx} className="py-4 font-sourceSans text-18">
              {paragraph}
            </p>
          ))}
          <p className="py-4 font-sourceSans text-18 font-bold">
            Niech pamięć o nich trwa wiecznie!
          </p>
        </div>

        <div>
          <BiogramsList people={people} />
        </div>
      </Container>
    </div>
  );
}

// "use client";

// import Link from "next/link";

// interface Person {
//   id: number;
//   name: string;
//   href: string;
//   birthDate: string;
//   deathDate: string;
// }

// interface BiogramsListProps {
//   people: Person[];
// }

// export const BiogramsList = ({ people }: BiogramsListProps) => {
//   return (
//     <div className="relative mx-auto w-full max-w-md md:max-w-6xl">
//       <div
//         className="absolute bottom-0 top-0 hidden w-[2px] bg-greenMain md:block"
//         style={{ left: "calc(500px)" }}
//       />
//       <div
//         className="absolute bottom-0 top-0 hidden w-[2px] bg-greenMain md:block"
//         style={{ left: "calc(100% - 170px - 1rem)" }}
//       />

//       <div className="flex w-full items-center px-4 py-2 pb-6 font-courier text-18 desktop:pb-16">
//         <div className="flex min-w-[120px] gap-2 text-left font-bold">
//           <span>L.p.</span>
//           <span>Nazwisko i imię</span>
//         </div>

//         <div className="hidden flex-1 justify-center font-bold md:flex">
//           <p>Data urodzenia</p>
//         </div>

//         <div className="hidden min-w-[120px] text-right font-bold md:flex">
//           <p>Data śmierci</p>
//         </div>
//       </div>

//       {/* Items */}
//       {people.map((person, index) => (
//         <div
//           key={person.id}
//           className={`flex items-center justify-between px-4 py-2 font-courier text-18 font-bold ${
//             index % 2 === 0 ? "bg-greenLight" : "bg-backgroundB"
//           }`}
//         >
//           <div className="flex min-w-[120px] gap-2">
//             <span>{index + 1}.</span>

//             <span className="md:hidden">{person.name}</span>

//             <Link href={person.href} className="hidden md:inline md:underline">
//               {person.name}
//             </Link>
//           </div>

//           <div className="flex w-full max-w-[700px] items-center">
//             <Link href={person.href} className="mr-4 text-xl md:hidden">
//               &rsaquo;
//             </Link>

//             <div className="hidden flex-1 justify-between md:flex">
//               <span className="mr-10 flex-1 text-center">
//                 {person.birthDate}
//               </span>
//               <span className="mr-5 flex-1 text-right">{person.deathDate}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
