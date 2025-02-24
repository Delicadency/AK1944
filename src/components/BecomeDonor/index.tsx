import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import { Button } from "../shared/Button/Button";
import { Heading } from "../shared/Heading/Heading";

export const BecomeDonor = () => (
  <section className="h-[569px] w-full tablet:h-[465px]">
    <BackgroundImage
      src="/images/become-donor-bg.png"
      alt="Starszy mężczyzna siedzący na ławce nad morzem, czytający gazetę pod zachmurzonym niebem."
      width={1920}
      height={1080}
      priority
    >
      <div className="flex size-full flex-col items-center justify-center px-4 pb-[100px] pt-10 text-center tablet:px-8 tablet:pb-[100px] tablet:pt-[70px] desktop:px-[368px]">
        <Heading variant="h2" color="white" contrast="yellow" underline>
          Zostań darczyńcą
        </Heading>
        <p className="mb-16 mt-10 max-w-[690px] text-center text-lg leading-7 text-white contrast:text-yellowContrast tablet:mb-[60px] tablet:mt-6 tablet:text-24">
          Twoje wsparcie pozwala nam kontynuować ważną misję – pielęgnowanie
          pamięci o bohaterach Armii Krajowej, utrzymanie miejsc pamięci oraz
          rozwój projektów edukacyjnych i historycznych.
        </p>
        <Button
          variant="primary"
          href="/wesprzyj"
          label="Wesprzyj"
          ariaDescription="Wesprzyj"
        />
      </div>
    </BackgroundImage>
  </section>
);
