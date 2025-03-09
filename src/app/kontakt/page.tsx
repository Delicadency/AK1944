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
    <div>
      <Container>
        <Breadcrumbs />
        <div className="flex flex-col items-start" >
          <Heading variant="h3" contrast="black" color="green" className="mb-6" >
            Kontakt
          </Heading>
        </div>
        <div className="text-[1.125rem] mb-[2.5rem]">
          <section aria-labelledby="organization-info" className="text-left text-greenMain font-source-sans">
            <p id="organization-info" className="mb-6 font-semibold ">
              Światowy Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy
            </p>
          </section>
          <section aria-labelledby="contact-info" className="space-y-4 text-left  text-greenMain">

            {/* Adres */}
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
          </section>

          <hr className="border-t-[1px] border-black my-6" />

          {/* Dane prawne */}
          <section aria-labelledby="informacje prawne" className="space-y-4 text-left max-w-[260px]">

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
            <div className="flex items-center gap-5">
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
                <p className="font-medium">Santander Bank Polska</p>
                <p className="font-medium">41 1090 2590 0000 0001 5299 0666</p>
              </div>
            </div>
          </section>
        </div>
        <div className="mb-[2.5rem]">
          <TaxCard />
        </div>
      </Container>
    </div>
  )
}