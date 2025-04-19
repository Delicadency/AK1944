import { useState } from "react";
import { trails, TrailSlug } from "../data/trails";
import { Button } from "@/components/shared/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { Heading } from "@/components/shared/Heading/Heading";

interface TrailPointsProps {
  activeTrail: TrailSlug;
}

export const TrailPoints = ({ activeTrail }: TrailPointsProps) => {
  const points = trails[activeTrail].trailPoints;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const goToPrev = () =>
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const goToNext = () =>
    setActiveIndex((prev) =>
      prev !== null && prev < points.length - 1 ? prev + 1 : prev,
    );

  return (
    <section className="pb-12 desktop:pb-20">
      <Heading
        align="start"
        color="green"
        contrast="yellow"
        className="pb-5 desktop:pb-10"
      >
        Punkty Szlaku Partyzanckiego:
      </Heading>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))]">
        {points.map((point, index) => (
          <Button
            key={index}
            label={point.point}
            iconName="info"
            variant="secondary"
            size="large"
            ariaDescription={`Zobacz opis punktu ${point.point}`}
            onClick={() => openModal(index)}
            className="h-[85px] w-full font-bold text-redMain tablet:w-[270px]"
            align="start"
          />
        ))}
      </div>

      <Modal isOpen={activeIndex !== null} onClose={closeModal}>
        {activeIndex !== null && (
          <div className="max-w-[600px]">
            <Heading variant="h3" color="white" contrast="yellow">
              {points[activeIndex].point}
            </Heading>
            <p className="pb-6 pt-4 text-white">
              {points[activeIndex].description}
            </p>
            <div className="flex justify-between">
              <Button
                label="Poprzedni punkt"
                ariaDescription="Zobacz poprzedni punkt szlaku"
                variant="secondary"
                onClick={goToPrev}
                disabled={activeIndex === 0}
              />
              <Button
                label="Następny punkt"
                ariaDescription="Zobacz następny punkt szlaku"
                variant="primary"
                onClick={goToNext}
                disabled={activeIndex === points.length - 1}
              />
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
