import { cn } from "@/utils";
import { Heading } from "../shared/Heading/Heading";

interface Props {
  includeHeader?: boolean;
}

export const DonationInstructions = ({ includeHeader }: Props) => {
  return (
    <>
      {includeHeader && (
        <Heading variant="h4" color="green" contrast="black">
          Jak przekazać 1,5%?
        </Heading>
      )}
      <div
        className={cn(
          "text-greenMain max-md:max-w-full desktop:text-xl",
          includeHeader ? "mt-6" : "mt-3",
        )}
      >
        <p>W swoim rocznym zeznaniu podatkowym (PIT)</p>
        <ul className="list-disc pl-6">
          <li>
            wpisz numer KRS: <strong>0000113420</strong>
          </li>
          <li>
            Podaj cel szczegółowy: <strong>Okręg Tarnów Koło Dębica</strong>
          </li>
          <li>Potwierdź swój wybór i złóż deklarację – to wszystko!</li>
        </ul>
      </div>
    </>
  );
};
