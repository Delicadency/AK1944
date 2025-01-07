import Link from "next/link";

export const FooterLegalInfo = () => {
  return (
    <div className="mt-[30px] w-full text-center">
      <p className="mb-3 flex justify-center gap-[20px]">
        <Link
          href="/privatepolicy"
          className="text-sm transition-opacity hover:opacity-80"
        >
          Polityka prywatności
        </Link>

        <Link
          href="/regulations"
          className="text-sm transition-opacity hover:opacity-80"
        >
          Regulamin
        </Link>
      </p>
      <p className="mt-[20px] text-sm">© 2023 . All rights reserved.</p>
      <p className="mt-[20px] text-sm">
        Strona powstała dzięki pracy wolontariuszy
      </p>
    </div>
  );
};
