import { GratitudeIcon } from "@/app/wesprzyj/_components/icons/GratitudeIcon";
import { Heading } from "@/components/shared/Heading/Heading";

export const ThankYou = () => (
  <section
    aria-labelledby="gratitude-heading"
    className="flex flex-col items-center justify-center gap-y-6 tablet:gap-y-8 desktop:gap-y-10"
  >
    <Heading
      id="gratitude-heading"
      variant="h3"
      color="green"
      contrast="yellow"
      className="text-2xl tablet:text-26 desktop:text-28"
    >
      Serdecznie dziękujemy za owocną współpracę!
    </Heading>

    <GratitudeIcon />
  </section>
);
