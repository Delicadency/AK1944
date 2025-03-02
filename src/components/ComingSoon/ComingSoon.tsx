import { Button } from "@/components/shared/Button/Button";
import { SocialMediaTray } from "@/components/shared/SocialMedia/SocialMediaTray";

export const ComingSoon = () => (
  <section className="flex min-h-[70vh] items-center justify-center bg-white p-4">
    <article className="w-full max-w-2xl rounded-sm bg-greenMain p-4 font-lora text-white shadow-lg">
      <header className="flex items-center justify-center p-4">
        <h2 className="text-2xl font-bold">Strona w przygotowaniu.</h2>
      </header>

      <main className="flex flex-col items-center gap-10 p-4 text-center text-xl">
        <p>
          Nasi wolontariusze intensywnie pracują nad jej rozbudową, <br />
          aby dostarczyć wartościowe treści. <br />
          Dziękujemy za cierpliwość i zapraszamy już wkrótce!
        </p>

        <p>
          W międzyczasie zachęcamy do śledzenia naszych profili <br />w Social
          Mediach, aby być na bieżąco z działalnością <br />
          Światowego Związku Żołnierzy Armii Krajowej.
        </p>

        <hr className="w-2/3 border-t" />

        <SocialMediaTray className="flex items-center justify-center gap-6" />
      </main>

      <footer className="mt-6 flex flex-col items-center justify-center gap-3 p-5">
        <Button
          label="Powrót do strony głównej"
          ariaDescription="Powrót do strony głównej"
          href="/"
          className="text-center"
        />
      </footer>
    </article>
  </section>
);
