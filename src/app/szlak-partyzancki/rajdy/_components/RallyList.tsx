import { Button } from "@/components/shared/Button/Button";
import Image from "next/image";
import { allRallies } from "../data/rallyPageData";
import { RallyPagination } from "./RallyPagination";
import { Heading } from "@/components/shared/Heading/Heading";

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
    <div className="px-4 desktop:px-8">
      {paginatedRallies.map((rally) => (
        <div
          key={rally.id}
          className="relative grid grid-cols-1 items-center gap-6 tablet:grid-cols-2"
        >
          <div className="absolute bottom-0 mobile:left-[10px] tablet:left-[18px] desktop:left-[-24px] top-0 z-0 mt-10">
            <div className="h-full w-1 bg-greenMain" />
          </div>
          <div className="absolute mobile:left-[5px] tablet:left-[12px] desktop:left-[-30px] top-4 z-10 h-4 w-4 rounded-full bg-greenMain" />
          <div className="relative z-10 order-2 mx-auto h-96 mobile:ml-12 desktop:ml-0 w-[80%] tablet:order-2 desktop:w-[100%]">
            <Image
              src={rally.imageUrl}
              alt={rally.title}
              sizes="80vw"
              fill
              className="object-cover pb-20"
            />
          </div>

          <div className="relative z-10 order-1 flex tablet:order-1">
            <article className="ml-14 space-y-4 pb-5 tablet:pb-24">
              <Heading
                variant="h2"
                color="green"
                contrast="yellow"
                className="mb-6"
              >
                {rally.title}
              </Heading>
              <p className="pt-1 text-2xl font-bold text-greenB desktop:text-xl">
                {rally.date}
              </p>
              <p className="pb-4 pt-1 text-gray-700">{rally.description}</p>
              <div className="flex flex-wrap gap-5">
                {/* TODO add a valid href - task : https://app.clickup.com/t/8699ayu7n */}
                <Button
                  label="Zasady uczestnictwa"
                  href={""}
                  ariaDescription="Zasady uczestnictwa"
                  variant="lightGreen"
                />
                <Button
                  label="Zobacz relację"
                  href={""}
                  ariaDescription="Zobacz relację"
                  variant="lightGreen"
                />
              </div>
            </article>
          </div>
        </div>
      ))}
      <RallyPagination
        currentPage={currentPage}
        totalPages={Math.ceil(allRallies.length / ITEMS_PER_PAGE)}
      />
    </div>
  );
};
