import { Routes } from "@/routes";
import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import { Button } from "../shared/Button/Button";
import { Heading } from "../shared/Heading/Heading";

export const BecomeDonor = () => (
  <section className="relative w-full">
    <BackgroundImage
      src="/images/become_donor_bg_1.webp"
      alt="Starszy mężczyzna wręcza starszej kobiecie ważne odznaczenie."
      width={1920}
      height={1080}
      priority
    >
      <div className="flex h-full min-h-[400px] w-full flex-col items-center justify-center px-4 py-10 text-center tablet:px-8 desktop:px-[368px] desktop:py-60">
        <Heading variant="h2" color="white" contrast="yellow" underline>
          Zostań darczyńcą
        </Heading>
        <p className="mb-16 mt-10 max-w-[690px] text-center text-lg leading-7 text-white tablet:mb-[60px] tablet:mt-6 tablet:text-24">
          Twoje wsparcie pozwala nam kontynuować ważną misję – pielęgnowanie
          pamięci o bohaterach Armii Krajowej, utrzymanie miejsc pamięci oraz
          rozwój projektów edukacyjnych i historycznych.
        </p>
        <Button
          variant="primary"
          href={Routes.SUPPORT}
          label="Wesprzyj"
          ariaDescription="Wesprzyj"
        />
      </div>
    </BackgroundImage>
  </section>
);
