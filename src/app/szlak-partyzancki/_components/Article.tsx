import { useState } from "react";
import { Button } from "@/components/shared/Button/Button";
import { Heading } from "@/components/shared/Heading/Heading";
import { Paragraph } from "../data/trails";
import { Modal } from "@/components/Modal/Modal";
import { TrailRegulations } from "./TrailRegulations";

type ArticleProps = {
  paragraphs: Paragraph[];
  displayName: string;
};

export const Article = ({ paragraphs, displayName }: ArticleProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <article className="flex flex-col gap-5 desktop:flex-row desktop:gap-[86px]">
        <section className="flex flex-col gap-5 desktop:gap-9">
          <Heading
            color="green"
            contrast="yellow"
            className="desktop:max-w-[600px]"
          >
            {displayName}
          </Heading>
          <p className="text-18 desktop:max-w-[521px]">
            jest propozycją dla Wszystkich rozmiłowanych w pieszych wędrówkach
            i historii regionu dębickiego, a także cenną pomocą dydaktyczną dla
            nauczycieli i rodziców w wychowaniu patriotycznym dzieci
            i młodzieży.
          </p>
          <Button
            variant="secondary"
            label="Zasady korzystania ze Szlaku Partyzanckiego"
            ariaDescription="Przejdź do regulaminu Szlaku Partyzanckiego"
            className="mb-[50px] hidden desktop:block desktop:max-w-[400px] desktop:self-start"
            onClick={openModal}
          />
        </section>

        <section className="flex flex-col gap-5 desktop:gap-9">
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="desktop:max-w-[700px]">
              <strong>{paragraph.title}</strong>
              <p>{paragraph.content}</p>
            </div>
          ))}
          <Button
            variant="secondary"
            label="Zasady korzystania ze Szlaku Partyzanckiego"
            ariaDescription="Przejdź do regulaminu Szlaku Partyzanckiego"
            className="mb-[50px] mt-1 max-w-[288px] self-center desktop:hidden"
            onClick={openModal}
          />
        </section>
      </article>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TrailRegulations />
      </Modal>
    </>
  );
};
