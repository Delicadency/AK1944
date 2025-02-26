import { GratitudeIcon } from "./icons";
import { Heading } from "../shared/Heading/Heading";

export const SupportGratitude = () => (
  <section
    aria-labelledby="gratitude-heading"
    className="flex flex-col items-center justify-center gap-y-6 tablet:gap-y-8 desktop:gap-y-10"
  >
    <Heading
      id="gratitude-heading"
      variant="h3"
      color="green"
      contrast="yellow"
      className="!text-center text-2xl tablet:text-26 desktop:text-28"
    >
      Z głębi serca dziękujemy za okazane wsparcie!
    </Heading>
    <GratitudeIcon />
  </section>
);
