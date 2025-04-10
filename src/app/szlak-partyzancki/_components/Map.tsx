"use client";
import dynamic from "next/dynamic";

const LazyIframe = dynamic(
  () => import("./LazyIFrame").then((mod) => mod.LazyIframe),
  { ssr: false },
);

export const Map = () => {
  return (
    <section className="pb-12 pt-6 desktop:pb-20 desktop:pt-10">
      <LazyIframe />
      <div className="w-full py-1">
        <a
          className="text-12 text-grayDate"
          href="https://traseo.pl/trasa/szlak-partyzantow-ii-zgrupowania-ak-obwodu-debica"
        >
          Zobacz trasę w Traseo
        </a>
      </div>
    </section>
  );
};
