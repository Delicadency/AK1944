import { Heading } from "@/components/shared/Heading/Heading";

export const Chapters = ({ chapters }: { chapters: string[] }) => (
  <div className="flex flex-col gap-6">
    <Heading variant="h3" contrast="yellow" color="green">
      Spis treści:
    </Heading>
    <ul className="list-decimal pl-6 tablet:text-18 desktop:text-20">
      {chapters.map((chapter, index) => (
        <li key={index} className="mb-2">
          {chapter}
        </li>
      ))}
    </ul>
  </div>
);
