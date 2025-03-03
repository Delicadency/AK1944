import { Routes } from "@/routes";
import Link from "next/link";

export const FooterLegalInfo = () => {
  return (
    <div className="mt-8 flex w-full flex-col gap-5 text-center">
      <p className="flex justify-center gap-5">
        <Link
          href={Routes.POLICY}
          className="text-16 transition-opacity hover:opacity-80"
          aria-label="Przejdź do strony Polityka prywatności"
          title="Przejdź do strony Polityka prywatności"
        >
          Polityka prywatności
        </Link>

        <Link
          href={Routes.REGULATIONS}
          className="text-16 transition-opacity hover:opacity-80"
          aria-label="Przejdź do strony Regulamin"
          title="Przejdź do strony Regulamin"
        >
          Regulamin
        </Link>
      </p>

      <p className="text-16">© 2025. All rights reserved.</p>

      <Link
        href={Routes.VOLUNTEERS}
        className="text-16 transition-opacity hover:opacity-80"
        aria-label="Przejdź do strony Wolontariuszy"
        title="Przejdź do strony Wolontariuszy"
      >
        Strona powstała dzięki pracy wolontariuszy.
      </Link>
    </div>
  );
};
