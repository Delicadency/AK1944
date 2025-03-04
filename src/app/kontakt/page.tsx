import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import IconBook from "@/icons/IconBook";
import IconBriefcase from "@/icons/IconBriefcase";
import IconMail from "@/icons/IconMail";
import IconPhone from "@/icons/IconPhone";
import IconMapPin from "@/icons/IconMapPin";


export default function ContactPage() {
  return (
    <div>
      <Container>
        <Breadcrumbs />
        <Heading variant="h3" contrast="black" color="green" className="mb-6">
          Kontakt
        </Heading>
        <section aria-labelledby="organization-info">
          <p id="organization-info" className="mb-6">
            Światowy Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy
          </p>
        </section>
        <section aria-labelledby="contact-info" className="space-y-4">

          {/* Adres */}
          <div className="flex items-start gap-3">
            <IconMapPin name="pin" className="w-6 h-6 text-gray-600" />
            <div>
              <p className="font-medium">Adres siedziby:</p>
              <p>39-200 Dębica, ul. Rzeszowska 15</p>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex items-start gap-3">
            <IconMail name="mail" className="w-6 h-6 text-gray-600" />
            <div>
              <p className="font-medium">E-mail:</p>
              <a href="mailto:ak.debica@gmail.com" className="text-blue-600 underline">
                ak.debica@gmail.com
              </a>
            </div>
          </div>

          {/* Telefon */}
          <div className="flex items-start gap-3">
            <IconPhone name="phone" className="w-6 h-6 text-gray-600" />
            <div>
              <p className="font-medium">Telefon:</p>
              <a href="tel:+48505248666" className="text-blue-600 underline">
                +48 505 248 666
              </a>
            </div>
          </div>
        </section>

        {/* Dane prawne */}
        <section aria-labelledby="legal-info" className="mt-6 space-y-4">

          {/* NIP */}
          <div className="flex items-start gap-3">
            <IconBriefcase name="briefcase" className="w-6 h-6 text-gray-600" />
            <div>
              <p className="font-medium">NIP:</p>
              <p>5261710045</p>
            </div>
          </div>
          {/* KRS */}
          <div className="flex items-start gap-3">
            <IconBook name="book" className="w-6 h-6 text-gray-600" />
            <div>
              <p className="font-medium">KRS:</p>
              <p>5261710045</p>
            </div>
          </div>
        </section>

      </Container>
    </div>
  )
}