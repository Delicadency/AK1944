// src/app/not-found.tsx
import { Routes } from "@/routes";
import { Button } from "@/components/shared/Button/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-backgroundMain px-4 text-center text-greenMain">
      <h1 className="text-2.5 mb-4 font-bold">Zapis nie został odnaleziony…</h1>

      <div className="relative mb-6">
        <Image src="/images/404.png" alt="Błąd 404" width="860" height="280" />
      </div>

      <p className="text-1.75 mb-6 max-w-xl font-medium leading-relaxed">
        W kronikach tej witryny nie ma śladu po wskazanej stronie.
        <br />
        Możliwe, że została usunięta lub jej historia jeszcze nie została
        napisana.
      </p>

      <p className="text-2.5 mb-8 font-semibold">
        Przeglądaj inne rozdziały historii.
        <br />
        <span className="font-normal">(wróć na stronę główną)</span>
      </p>

      <Button
        variant="primary"
        label="Strona "
        ariaDescription="Powrót do strony głównej"
        href={Routes.HOME}
        className="text-center"
      />
    </main>
  );
}
