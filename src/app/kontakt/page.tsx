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
      <div className="hidden tablet:block absolute inset-0 bg-no-repeat bg-contain bg-right bg-[url('/images/contact-bg.png')]"></div>
      <div className="absolute inset-0 bg-backgroundB/50"></div>
      <Container className="relative z-10">
        <div className="tablet:hidden">
          <Breadcrumbs />
        </div>

        <div className="flex items-start" >
          <Heading variant="h3" contrast="black" color="green" className="tablet:mt-5 text-[1.75rem] tablet:text-[2.5rem]" >
            Kontakt
          </Heading>
        </div>

        <section aria-labelledby="organization-info" className="text-left text-greenMain font-source-sans mb-10 tablet:flex  tablet:flex-col justify-start">
          <Image
            src="/images/Logo_SZZAK.png"
            alt="Logo SZZAK"
            width={247}
            height={90}
            className="hidden tablet:block tablet:mt-14 tablet:w-[247px] h-auto mb-6 tablet:mb-14"
          />

          <Heading variant="h3" contrast="black" color="green" className="mb-6 text-[1.75rem] tablet:text-[2.5rem] tablet:mb-14" >
            Światowy związek AK
            oraz kontakt w sprawie grobów
          </Heading>
          <p id="organization-info" className="mb-6 font-semibold tablet:hidden">
            Światowy Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy
          </p>
        </section>

        <div className="tablet:flex tablet:flex-row tablet:gap-28 tablet:mb-28">

          <section aria-labelledby="contact-info" className="mb-10 text-[1.125rem] text-greenMain font-source-sans">

            {/* Adres */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 ">
                <IconMapPin className="w-8 h-8" />
                <div>
                  <p>Adres siedziby:</p>
                  <p className="font-medium">39-200 Dębica, ul. Rzeszowska 15</p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-center gap-3 ">
                <IconMail className="w-8 h-8" />
                <div>
                  <p>E-mail:</p>
                  <a href="mailto:ak.debica@gmail.com" className="font-medium">
                    ak.debica@gmail.com
                  </a>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-center gap-3">
                <IconPhone className="w-8 h-8" />
                <div>
                  <p>Telefon:</p>
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
            <div className="flex gap-5 items-center">
              <div className="w-6 flex-shrink-0">
                <IconBriefcase name="briefcase" className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <p >NIP:</p>
                <p className="font-medium">5261710045</p>
              </div>
            </div>
            {/* KRS */}
            <div className="flex items-center gap-5 tablet:hidden">
              <div className="w-6 flex-shrink-0">
                <IconBook name="book" className="w-8 h-8" />
              </div>
              <div>
                <p >KRS:</p>
                <p className="font-medium">5261710045</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-6 flex-shrink-0">
                <IconDollar name="dollar" className="w-8 h-8" />
              </div>
              <div className="flex flex-col flex-wrap break-words">
                <p >Nr konta bankowego:</p>
                <p className="font-medium tablet:hidden">Santander Bank Polska</p>
                <p className="font-medium">41 1090 2590 0000 0001 5299 0666</p>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-[2.5rem] tablet:hidden">
          <TaxCard />
        </div>

        {/* Sekcja Partner */}
        <section className="mb-[2.5rem] text-left hidden tablet:block">
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