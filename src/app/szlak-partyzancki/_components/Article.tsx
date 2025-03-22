import { Button } from "@/components/shared/Button/Button";
import { Heading } from "@/components/shared/Heading/Heading";
import { paragraphs } from "../data";

export const Article = () => {
  return (
    <article className="flex flex-col gap-5 desktop:flex-row desktop:gap-[86px]">
      <section className="flex flex-col gap-5 desktop:gap-9">
        <Heading
          color="green"
          contrast="yellow"
          className="hidden max-w-[520px] pt-7 desktop:block"
        >
          „Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica”
        </Heading>
        <p className="text-18 desktop:max-w-[521px]">
          jest propozycją dla Wszystkich rozmiłowanych w pieszych wędrówkach
          i historii regionu dębickiego, a także cenną pomocą dydaktyczną dla
          nauczycieli i rodziców w wychowaniu patriotycznym dzieci i młodzieży.
        </p>
        <Button
          variant="secondary"
          label="Zasady korzystania ze Szlaku Partyzanckiego"
          ariaDescription="Przejdź do regulaminu Szlaku Partyzanckiego"
          className="mb-[50px] hidden desktop:block desktop:max-w-[400px] desktop:self-start"
        />
      </section>

      <section className="flex flex-col gap-5 desktop:gap-9">
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="desktop:max-w-[800px]">
            <strong>{paragraph.title}</strong>
            <p>{paragraph.content}</p>
          </div>
        ))}
        <Button
          variant="secondary"
          label="Zasady korzystania ze Szlaku Partyzanckiego"
          ariaDescription="Przejdź do regulaminu Szlaku Partyzanckiego"
          className="mb-[50px] mt-1 max-w-[288px] self-center desktop:hidden"
        />
      </section>
    </article>
  );
};
