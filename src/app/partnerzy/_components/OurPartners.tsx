import { Heading } from "@/components/shared/Heading/Heading";
import { Carousel } from "./Carousel/Carousel";

export const OurPartners = () => (
  <section aria-labelledby="our-partners-heading" className="space-y-6 py-10">
    <Heading
      id="our-partners-heading"
      variant="h4"
      color="green"
      contrast="yellow"
      className="text-center text-2xl tablet:text-26 desktop:text-28"
    >
      Wspierają nas:
    </Heading>

    <Carousel items={items} />
  </section>
);

const items = [
  "Let’s talk about IT",
  "Związek Strzelecki „Strzelec” Józefa Piłsudskiego Jednostka Strzelecka 2017 w Dębicy",
  "Światowy Związek Żołnierzy Armii Krajowej Zarząd Główny",
  "Światowy Związek Żołnierzy Armii Krajowej Okręg Tarnów",
  "Fundacja Polskiego Państwa Podziemnego",
  "Lasy Państwowe Nadleśnictwo Dębica",
  "Miasto Dębica",
  "Powiat Dębicki",
  "Gmina Dębica",
  "Gmina Pilzno",
  "Gmina Żyraków",
  "33. Batalion Lekkiej Piechoty im. Ppłk. Adama Lazarowicza „Klamry” w Dębicy",
  "Związek Harcerstwa Polskiego Hufiec ZHP im. Dębickich Szarych Szeregów w Dębicy",
  "Muzeum Regionalne w Dębicy",
  "Miejski Ośrodek Kultury w Dębicy",
  "Miejska i Powiatowa Biblioteka Publiczna w Dębicy",
  "Miejski Ośrodek Pomocy Społecznej w Dębicy",
  "Parafia pw. Wniebowzięcia Najświętszej Marii Panny w Gumniskach",
  "Parafia pw. Św. Jadwigi w Dębicy",
  "Publiczna Szkoła Podstawowa w Gumniskach im. Majora Adama Lazarowicza",
  "Publiczna Szkoła Podstawowa nr 3 im. Tadeusza Bora-Komorowskiego w Dębicy",
  "Publiczna Szkoła Podstawowa nr 11 z Oddziałami Integracyjnymi im. 5 Pułku Strzelców Konnych Armii Krajowej w Dębicy",
  "Szkoła Podstawowa nr 12 im. Armii Krajowej w Dębicy",
  "Publiczna Szkoła Podstawowa im. Stanisława Mroczki „Miecza” w Górze Motycznej",
  "Publiczna Szkoła Podstawowa im. Rotmistrza Witolda Pileckiego w Zwierniku",
  "Szkoła Podstawowa im. III Zgrupowania Armii Krajowej „Pocisk” w Dobrkowie",
  "Liceum Ogólnokształcące im. Sebastiana Petrycego w Pilźnie",
];
