import Image from "next/image";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { TaxCard } from "@/components/shared/TaxCard/TaxCard";
import ContactInfo from "./components/ContactInfo";
import LegalInfo from "./components/LegalInfo";


export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <div className="hidden desktop:block absolute right-0 top-1/2 -translate-y-1/2">
        <Image
          src="/images/contact-bg-desktop.png"
          alt="Obrazek przedstawiający retro telefon"
          width={595}
          height={739}
          className="object-contain items-center w-full h-full"
        />
      </div>
      <div className="absolute min-h-screen hidden tablet:block inset-0 bg-no-repeat bg-contain bg-right tablet:bg-[url('/images/contact-bg.png')] desktop:hidden"></div>
      <div className="absolute inset-0 bg-backgroundB/50 desktop:bg-backgroundB/10"></div>


      <Container className="relative z-10 desktop:max-w-[85%]">
        <div className="tablet:hidden desktop:block">
          <Breadcrumbs />
        </div>

        <div className="flex items-start" >
          <Heading variant="h3" contrast="black" color="green" className="tablet:mt-5 text-[1.75rem] tablet:text-[2.5rem] desktop:text-[2rem] desktop:mb-6" >
            Kontakt
          </Heading>
        </div>

        <section aria-labelledby="organization-info" className="text-left text-greenMain font-source-sans mb-10 tablet:flex  tablet:flex-col justify-start">
          <Image
            src="/images/Logo_SZZAK.png"
            alt="Logo SZZAK"
            width={247}
            height={90}
            className="hidden tablet:block desktop:hidden tablet:mt-14 tablet:w-[247px] h-auto mb-6 tablet:mb-14"
          />

          <Heading variant="h3" contrast="black" color="green" className="mb-6 text-[1.75rem] tablet:text-[2.5rem] tablet:mb-14 desktop:hidden" >
            Światowy związek AK
            oraz kontakt w sprawie grobów
          </Heading>
          <Heading variant="h4" contrast="black" color="green" className="mb-6 hidden  desktop:flex flex-col flex-wrap break-words" >
            Światowy Związek Żołnierzy Armii Krajowej <br></br>
            Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy
          </Heading>
          <p id="organization-info" className="mb-6 font-semibold tablet:hidden desktop:blockh">
            Światowy Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy
          </p>
        </section>

        <div className="tablet:flex tablet:flex-row tablet:gap-28 desktop:gap-42 tablet:mb-28">

          <ContactInfo />

          <hr className="border-t-[1px] border-black my-6 tablet:hidden" />
          <div className="hidden desktop:block h-auto border-l border-black mx-10"></div>

          <LegalInfo />

        </div>
        <div className="mt-[2.5rem] tablet:hidden desktop:flex desktop:justify-start desktop:max-w-[55%]">
          <TaxCard />
        </div>

        {/* Sekcja Partner */}
        <section className="mb-[2.5rem] text-left hidden tablet:block desktop:hidden">
          <Heading variant="h3" contrast="black" color="green" className="mb-10">
            Chcesz zostać naszym partnerem?
          </Heading>
          <p className="text-[1.125rem] text-greenMain text-lef font-source-sans font-source-sans mb-10">
            Prosimy o kontakt z Maciejem Małozięć.
          </p>
        </section>
      </Container>
    </div>
  )
}