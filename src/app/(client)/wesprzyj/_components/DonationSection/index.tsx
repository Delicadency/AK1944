import { SupportSection } from "../SupportSection";
import { DonationCard } from "./DonationCard";

export const DonationSection = () => (
  <SupportSection
    id="dotacja"
    title="Wpłać darowiznę lub wspieraj nas regularnie."
    card={<DonationCard />}
  >
    <p>
      Każda, nawet najmniejsza darowizna, przyczynia się do realizacji naszych
      działań. Dzięki Twojemu wsparciu możemy organizować wydarzenia
      upamiętniające, dbać o miejsca pamięci i prowadzić działania edukacyjne.
    </p>
    <p>Dane do przelewu:</p>
    <div>
      <p>
        Nazwa odbiorcy:{" "}
        <strong>
          Światowy Związek Żołnierzy Armii Krajowej - Środowisko 5. Pułku
          Strzelców Konnych Armii Krajowej w Dębicy
        </strong>
      </p>
      <p>
        Numer konta: <strong>41 1090 2590 0000 0001 5299 0666</strong>
      </p>
      <p>
        Tytuł przelewu: <strong>Darowizna na cele statutowe</strong>
      </p>
    </div>
  </SupportSection>
);
