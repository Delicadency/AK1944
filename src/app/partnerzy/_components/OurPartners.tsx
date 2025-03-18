import { Heading } from "@/components/shared/Heading/Heading";
import { Carousel } from "./Carousel/Carousel";
import { partners } from "@/data/partners";

export const OurPartners = () => (
  <section aria-labelledby="our-partners-heading" className="space-y-6 py-10">
    <Heading
      id="our-partners-heading"
      variant="h4"
      color="green"
      contrast="yellow"
      className="text-center text-2xl tablet:text-26 desktop:text-28"
    >
      Wspierają nas:
    </Heading>

    <Carousel items={partners} />
  </section>
);
