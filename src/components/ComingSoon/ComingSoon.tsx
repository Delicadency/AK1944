import { Button } from "@/components/shared/Button/Button";
import { SocialMediaTray } from "@/components/shared/SocialMedia/SocialMediaTray";
import { Routes } from "@/routes";

export const ComingSoon = () => (
  <section className="flex min-h-[70vh] items-center justify-center bg-white p-4">
    <article className="w-full max-w-2xl rounded-sm bg-emerald-50 p-4 shadow-lg">
      <header className="flex items-center justify-center p-2 text-emerald-700">
        <h2 className="text-2xl font-bold">Strona w przygotowaniu!</h2>
      </header>

      <main className="flex flex-col gap-4 p-4 text-center">
        <p className="text-xl text-emerald-700">
          Nasi niesamowici wolontariusze ciężko pracują nad tą stroną w tym
          momencie.
        </p>

        <p className="rounded-lg bg-emerald-100 p-4 text-emerald-600">
          Doceniamy Twoją cierpliwość! Ta strona będzie wkrótce dla Was dostępna
          wraz z ekscytującą i niesamowitą treścią.
        </p>
      </main>

      <div className="border-t border-emerald-100 p-4">
        <p className="mb-4 text-center text-emerald-600">
          W międzyczasie możesz zajrzeć na nasze media społecznościowe:
        </p>

        <SocialMediaTray className="flex items-center justify-center gap-6" />
      </div>

      <footer className="flex flex-col items-center justify-center gap-3 p-5">
        <Button
          variant="primaryBlue"
          label="Powrót do strony głównej"
          ariaDescription="Powrót do strony głównej"
          href={Routes.HOME}
          className="text-center"
        />
      </footer>
    </article>
  </section>
);
