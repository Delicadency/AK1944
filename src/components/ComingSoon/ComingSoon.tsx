import { Button } from "@/components/shared/Button/Button";
import { SocialMediaTray } from "@/components/shared/SocialMedia/SocialMediaTray";
import { Routes } from "@/routes";

export const ComingSoon = () => (
  <section className="flex min-h-[70vh] items-center justify-center p-4">
    <article className="bg-emerald-50 w-full max-w-2xl rounded-sm p-4 shadow-lg">
      <header className="text-emerald-700 flex items-center justify-center p-2">
        <h2 className="text-2xl font-bold">Strona w przygotowaniu!</h2>
      </header>

      <div className="flex flex-col gap-4 p-4 text-center">
        <p className="text-emerald-700 text-xl">
          Nasi niesamowici wolontariusze ciężko pracują nad tą stroną w tym
          momencie.
        </p>

        <p className="bg-emerald-100 text-emerald-600 rounded-lg p-4">
          Doceniamy Twoją cierpliwość! Ta strona będzie wkrótce dla Was dostępna
          wraz z ekscytującą i niesamowitą treścią.
        </p>
      </div>

      <div className="border-emerald-100 border-t p-4">
        <p className="text-emerald-600 mb-4 text-center">
          W międzyczasie możesz zajrzeć na nasze media społecznościowe:
        </p>

        <SocialMediaTray className="flex items-center justify-center gap-6" />
      </div>

      <footer className="flex flex-col items-center justify-center gap-3 p-5">
        <Button
          variant="primary"
          label="Powrót do strony głównej"
          ariaDescription="Powrót do strony głównej"
          href={Routes.HOME}
          className="text-center"
        />
      </footer>
    </article>
  </section>
);
