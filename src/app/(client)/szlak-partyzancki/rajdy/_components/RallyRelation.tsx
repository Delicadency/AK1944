import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { ImageSlider } from "./ImageSlider";
import { Rally } from "../_models/rally";

interface RallyRelationProps {
  rally: Rally;
}

export const RallyRelation = ({ rally }: RallyRelationProps) => {
  return (
    <div className="pb-20">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 tablet:gap-8 tablet:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          {rally.title}
        </Heading>
        <p className="font-lora text-xl font-bold">{rally.date}</p>
        {rally.relation && (
          <div className="space-y-3">
            {rally.relation.map((text, index) => (
              <p key={index} className="font-sourceSans text-16 tablet:text-18">
                {text}
              </p>
            ))}
          </div>
        )}

        {rally.images && rally.images.length > 0 && (
          <ImageSlider
            images={rally.images.map((img) => ({
              src: `/images/${img.src}`,
              alt: img.alt,
            }))}
          />
        )}
      </Container>
    </div>
  );
};
