import { Button } from "@/components/shared/Button/Button";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { allRallies } from "../data/rallyPageData";
import { RallyPagination } from "./RallyPagination";

export type Rally = {
  id: number;
  slug: string;
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
          <div className="absolute bottom-0 top-0 z-0 mt-10 mobile:left-[10px] tablet:left-[18px] desktop:left-[-24px]">
            <div className="h-full w-1 bg-greenMain" />
          </div>
          <div className="absolute top-4 z-10 h-4 w-4 rounded-full bg-greenMain mobile:left-[5px] tablet:left-[12px] desktop:left-[-30px]" />
          <div className="relative z-10 order-2 mx-auto h-96 w-[80%] mobile:ml-12 tablet:order-2 desktop:ml-0 desktop:w-[100%]">
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
                className="mb-2"
              >
                {rally.title}
              </Heading>
              <Heading
                variant="h4"
                color="green"
                contrast="yellow"
                className="mb-2"
              >
                {rally.date}
              </Heading>
              <p className="pb-4 pt-1 font-sourceSans text-18 text-gray-700">
                {rally.description}
              </p>
              <div className="flex flex-wrap gap-5">
                {/* TODO add a valid href - task : https://app.clickup.com/t/8699ayu7n */}
                <Button
                  label="Zasady uczestnictwa"
                  href={`/szlak-partyzancki/rajdy/zasady-uczestnictwa/${rally.slug}`}
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
