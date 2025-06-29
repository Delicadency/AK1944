import { QuotationIcon } from "@/icons/QuotationIcon";
import clsx from "clsx";

type Quote = {
  content: string;
  emphasis?: string;
};

type Layout = "emphasis-first" | "content-first" | "no-emphasis";

type QuoteSectionProps = {
  quote: Quote;
  layout?: Layout;
  className?: string;
};

export const QuoteSection = ({
  quote,
  layout = "content-first",
  className,
}: QuoteSectionProps) => {
  return (
    <section
      className={clsx(
        "relative h-fit max-w-[620px] rounded-md bg-greenLight px-3 py-8 text-greenMain desktop:px-14",
        className,
      )}
    >
      <QuotationIcon className="mb-5 shrink-0 text-greenMain desktop:absolute desktop:-left-2 desktop:mb-0" />
      <blockquote className="font-courier text-16">
        {layout === "emphasis-first" && quote.emphasis && (
          <footer className="font-bold">{quote.emphasis}</footer>
        )}

        <p className="italic">“{quote.content}”</p>

        {layout === "content-first" && quote.emphasis && (
          <p className="font-bold">{quote.emphasis}</p>
        )}
      </blockquote>
    </section>
  );
};
