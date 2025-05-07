import { QuotationIcon } from "@/icons/QuotationIcon";

type Quote = {
  content: string;
  emphasis?: string;
};

type Layout = "emphasis-first" | "content-first" | "no-emphasis";

type QuoteSectionProps = {
  quote: Quote;
  layout?: Layout;
};

export const QuoteSection = ({
  quote,
  layout = "content-first",
}: QuoteSectionProps) => {
  return (
    <section className="relative h-fit max-w-[620px] rounded-md bg-greenLight px-3 desktop:px-14 py-8 text-greenMain contrast:bg-yellowContrast contrast:text-black00">
      <QuotationIcon className="desktop:absolute desktop:-left-2 mb-5 desktop:mb-0 shrink-0 text-greenMain contrast:text-black00" />
      <blockquote className="font-courier text-16">
        {layout === "emphasis-first" && quote.emphasis && (
          <footer className="font-bold">{quote.emphasis}</footer>
        )}

        <p className="italic">“{quote.content}”</p>

        {layout === "content-first" && quote.emphasis && (
          <footer className="font-bold">{quote.emphasis}</footer>
        )}
      </blockquote>
    </section>
  );
};
