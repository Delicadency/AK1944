import { Heading } from "@/components/shared/Heading/Heading";
import { QuoteSection } from "./QuoteSection";
import { quotes } from "../data/quotes";
import { regulations } from "../data/regulations";

export const TrailRegulations = () => {
  return (
    <div className="flex flex-col gap-10 pb-7">
      <Heading color="white" contrast="yellow" className="max-w-[490px]">
        Regulanim korzystania ze Szlaku Partyzanckiego
      </Heading>
      <QuoteSection
        quote={quotes.find((q) => q.id === "intro")!}
        layout="content-first"
      />
      <ol className="max-w-[620px] list-decimal pl-6 text-16 leading-relaxed">
        {regulations.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ol>
      <QuoteSection
        quote={quotes.find((q) => q.id === "outro")!}
        layout="emphasis-first"
      />
    </div>
  );
};
