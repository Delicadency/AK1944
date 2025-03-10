import Image from "next/image";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import IconBook from "@/icons/IconBook";
import IconBriefcase from "@/icons/IconBriefcase";
import { IconMail } from "@/icons/IconMail";
import { IconPhone } from "@/icons/IconPhone";
import { IconMapPin } from "@/icons/IconMapPin";
import IconDollar from "@/icons/IconDollar";
import { TaxCard } from "@/components/shared/TaxCard/TaxCard";


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
      <div className="absolute inset-0 bg-backgroundB/50"></div>


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

        <div className="tablet:flex tablet:flex-row tablet:gap-28 desktop:gap-52 tablet:mb-28">

          <section aria-labelledby="contact-info" className="mb-10 text-[1.125rem] text-greenMain font-source-sans">

            {/* Adres */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 desktop:gap-8 desktop:mb-8">
                <IconMapPin className="w-8 h-8" />
                <div>
                  <p className="desktop:mb-4">Adres siedziby:</p>
                  <p className="font-medium">39-200 Dębica, ul. Rzeszowska 15</p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-center gap-3 desktop:gap-8 desktop:mb-8">
                <IconMail className="w-8 h-8" />
                <div>
                  <p className="desktop:mb-4">E-mail:</p>
                  <a href="mailto:ak.debica@gmail.com" className="font-medium">
                    ak.debica@gmail.com
                  </a>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-center gap-3 desktop:gap-8 desktop:mb-8">
                <IconPhone className="w-8 h-8" />
                <div>
                  <p className="desktop:mb-4">Telefon:</p>
                  <a href="tel:+48505248666" className="font-medium">
                    +48 505 248 666
                  </a>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-t-[1px] border-black my-6 tablet:hidden" />

          {/* Dane prawne */}

          <section aria-labelledby="informacje prawne" className="space-y-4 text-left max-w-[260px] mt-8 tablet:mt-0">

            {/* NIP */}
            <div className="flex gap-5 items-center desktop:gap-8 desktop:mb-8">
              <div className="w-6 flex-shrink-0">
                <IconBriefcase name="briefcase" className="w-8 h-8" />
              </div>
              <div>
                <p className="desktop:mb-4">NIP:</p>
                <p className="font-medium">5261710045</p>
              </div>
            </div>
            {/* KRS */}
            <div className="flex items-center gap-5 desktop:gap-8 desktop:mb-8 tablet:hidden desktop:flex">
              <div className="w-6 flex-shrink-0">
                <IconBook name="book" className="w-8 h-8" />
              </div>
              <div>
                <p className="desktop:mb-4">KRS:</p>
                <p className="font-medium">5261710045</p>
              </div>
            </div>

            <div className="flex items-center gap-5 desktop:gap-8 desktop:mb-8">
              <div className="w-6 flex-shrink-0">
                <IconDollar name="dollar" className="w-8 h-8" />
              </div>
              <div className="flex flex-col flex-wrap break-words">
                <p className="desktop:mb-4">Nr konta bankowego:</p>
                <p className="font-medium tablet:hidden desktop:block">Santander Bank Polska</p>
                <p className="font-medium">41 1090 2590 0000 0001 5299 0666</p>
              </div>
            </div>
          </section>
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