import { Button } from "@/components/shared/Button/Button";
import Image from "next/image";
import { allRallies } from "../../data/rallyPageData";
import { RallyPagination } from "./RallyPagination";

export type Rally = {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

type RallyListProps = {
  currentPage: number;
};

export const RallyList = ({ currentPage }: RallyListProps) => {
  const ITEMS_PER_PAGE = 4;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRallies = allRallies.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="px-2 desktop:px-8">
      {paginatedRallies.map((rally) => (
        <div
          key={rally.id}
          className="grid grid-cols-1 items-center gap-6 md:grid-cols-2"
        >
          {/* Zdjęcie */}
          <div className="relative order-2 mx-auto h-96 w-[85%] md:order-2 desktop:w-[100%]">
            <Image
              src={rally.imageUrl}
              alt={rally.title}
              fill
              className="object-cover pb-20"
            />
          </div>

          {/* Blok tekstowy z linią */}
          <div className="relative order-1 flex md:order-1">
            {/* Linia z kropką */}
            <div className="absolute bottom-0 left-0 top-0 flex flex-col items-center desktop:ml-[-20px]">
              <div className="h-full w-1 bg-greenMain" />
              <div className="absolute top-[20px] h-4 w-4 rounded-full bg-black desktop:top-[0.8rem]" />
            </div>

            {/* Treść */}
            <div className="ml-10 space-y-4 pb-5 md:pb-24">
              <h2 className="text-3xl font-bold text-greenB xl:text-3xl">
                {rally.title}
              </h2>
              <p className="pt-1 text-2xl font-bold text-greenB desktop:text-xl">
                {rally.date}
              </p>
              <p className="pb-4 pt-1 text-gray-700">{rally.description}</p>
              <div className="flex flex-wrap gap-5">
                <Button
                  label="Zasady uczestnictwa"
                  href={`/szlak-partyzancki/rajdy/${rally.id}`}
                  ariaDescription={`Zasady uczestnictwa dla ${rally.title}`}
                  variant="lightGreen"
                />
                <Button
                  label="Zobacz relację"
                  href={""}
                  ariaDescription="Zobacz relację"
                  variant="lightGreen"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <RallyPagination
        currentPage={currentPage}
        totalPages={Math.ceil(allRallies.length / ITEMS_PER_PAGE)}
      />
    </div>
  );
}
