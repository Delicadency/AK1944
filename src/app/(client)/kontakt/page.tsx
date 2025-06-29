import Image from "next/image";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { TaxCard } from "@/components/shared/TaxCard/TaxCard";
import { ContactInfo } from "./components/ContactInfo";
import { LegalInfo } from "./components/LegalInfo";
import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";

export default function ContactPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden tablet:pb-20 desktop:pb-150">
      <div className="absolute inset-y-0 right-0 hidden h-full w-[40vw] desktop:block">
        <BackgroundImage
          src="/images/contact-bg.png"
          alt="Obrazek przedstawiający retro telefon"
          sizes="(max-width: 1280px) 40vw, 595px"
          quality={85}
          fill
        />
      </div>

      <div className="pointer-events-none absolute inset-0 hidden justify-end tablet:flex desktop:hidden">
        <div className="relative h-full w-[80vw] overflow-hidden">
          <BackgroundImage
            src="/images/contact-bg.png"
            alt="Obrazek przedstawiający retro telefon"
            sizes="80vw"
            quality={70}
            fill
            className="h-full translate-x-[40%] object-cover object-left"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-backgroundB/50 tablet:bg-backgroundB/70"></div>

      <Container className="relative z-10 desktop:max-w-[85%]">
        <div className="tablet:hidden desktop:block">
          <Breadcrumbs />
        </div>

        <div className="flex items-start">
          <Heading
            variant="h3"
            contrast="black"
            color="green"
            className="text-[1.75rem] tablet:mt-5 tablet:text-[2.5rem] desktop:mb-6 desktop:text-[2rem]"
          >
            Kontakt
          </Heading>
        </div>

        <section
          aria-labelledby="organization-info"
          className="font-source-sans mb-10 justify-start text-left text-greenMain tablet:flex tablet:flex-col"
        >
          <Image
            src="/images/Logo_SZZAK.png"
            alt="Logo SZZAK"
            width={247}
            height={90}
            className="mb-6 hidden h-auto tablet:mb-14 tablet:mt-14 tablet:block tablet:w-[247px] desktop:hidden"
          />

          <Heading
            id="organization-info"
            variant="h3"
            contrast="black"
            color="green"
            className="mb-6 text-[1.75rem] tablet:mb-14 tablet:text-[2.5rem] desktop:hidden"
          >
            Światowy związek AK oraz kontakt w sprawie grobów
          </Heading>
          <Heading
            variant="h4"
            contrast="black"
            color="green"
            className="mb-6 hidden flex-col flex-wrap break-words desktop:flex"
          >
            Światowy Związek Żołnierzy Armii Krajowej <br></br>
            Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy
          </Heading>
          <p
            id="organization-info"
            className="mb-6 font-semibold tablet:hidden desktop:block"
          >
            Światowy Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku
            Strzelców Konnych Armii Krajowej w Dębicy
          </p>
        </section>

        <div className="desktop:gap-42 tablet:mb-28 tablet:flex tablet:flex-row tablet:gap-28">
          <ContactInfo />

          <hr className="my-6 border-t border-black tablet:hidden" />
          <div className="mx-10 hidden h-auto border-l border-black desktop:block"></div>

          <LegalInfo />
        </div>
        <div className="mt-[2.5rem] tablet:hidden desktop:flex desktop:max-w-[55%] desktop:justify-start">
          <TaxCard />
        </div>

        <section className="mb-[2.5rem] hidden text-left tablet:block desktop:hidden">
          <Heading
            variant="h3"
            contrast="black"
            color="green"
            className="mb-10"
          >
            Chcesz zostać naszym partnerem?
          </Heading>
          <p className="text-lef font-source-sans font-source-sans mb-10 text-lg text-greenMain">
            Prosimy o kontakt z Maciejem Małozięć.
          </p>
        </section>
      </Container>
    </div>
  );
}
