import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import IconBook from "@/icons/IconBook";
import IconBriefcase from "@/icons/IconBriefcase";
import { IconMail } from "@/icons/IconMail";
import { IconPhone } from "@/icons/IconPhone";
import { IconMapPin } from "@/icons/IconMapPin";
import IconDollar from "@/icons/IconDollar";


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
        <section aria-labelledby="organization-info" className="text-left  text-greenMain font-source-sans">
          <p id="organization-info" className="mb-6 text-1.25 font-semibold ">
            Światowy Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy
          </p>
        </section>
        <section aria-labelledby="contact-info" className="space-y-4 text-left  text-greenMain">

          {/* Adres */}
          <div className="flex items-start gap-3 ">
            <IconMapPin className="w-6 h-6" />
            <div>
              <p>Adres siedziby:</p>
              <p className="font-medium">39-200 Dębica, ul. Rzeszowska 15</p>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex items-start gap-3 ">
            <IconMail className="w-6 h-6" />
            <div>
              <p>E-mail:</p>
              <a href="mailto:ak.debica@gmail.com" className="font-medium">
                ak.debica@gmail.com
              </a>
            </div>
          </div>

          {/* Telefon */}
          <div className="flex items-start gap-3">
            <IconPhone className="w-6 h-6" />
            <div>
              <p>Telefon:</p>
              <a href="tel:+48505248666" className="font-medium">
                +48 505 248 666
              </a>
            </div>
          </div>
        </section>

        {/* Dane prawne */}
        <section aria-labelledby="legal-info" className="mt-6 space-y-4 text-left">

          {/* NIP */}
          <div className="flex items-start gap-3">
            <IconBriefcase name="briefcase" className="w-6 h-6" />
            <div>
              <p >NIP:</p>
              <p className="font-medium">5261710045</p>
            </div>
          </div>
          {/* KRS */}
          <div className="flex items-start gap-3"></div>
          <IconBook name="book" className="w-6 h-6" />
          <div>
            <p >KRS:</p>
            <p className="font-medium">5261710045</p>
          </div>
          <div className="flex items-start gap-3">
            <IconDollar name="dollar" className="w-6 h-6" />
            <div>
              <p >Nr konta bankowego:</p>
              <p className="font-medium">41 1090 2590 0000 0001 5299 0666</p>
            </div>
          </div>
        </section>

      </Container>
    </div>
  )
}