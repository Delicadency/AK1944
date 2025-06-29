import { summarySection } from "@/data/historyData";

const { content, author } = summarySection;

export const SummarySection = () => (
  <div className="m-auto mt-8 max-w-[918px] desktop:mt-12">
    <div className="flex flex-col gap-6 text-lg">
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    <p className="mt-4 justify-self-end font-courier">{author}</p>
  </div>
);
