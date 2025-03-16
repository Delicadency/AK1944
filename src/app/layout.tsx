import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import ThemeProvider from "@/context/ThemesProvider";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { cn } from "@/utils";
import "./globals.css";

const figtree = localFont({
  src: "./fonts/Figtree-Variable.woff2",
  variable: "--font-figtree",
  weight: "400",
});
const lora = localFont({
  src: "./fonts/Lora-Variable.woff2",
  variable: "--font-lora",
  weight: "700",
});
const sourceSans = localFont({
  src: "./fonts/SourceSans3-Variable.woff2",
  variable: "--font-source-sans",
  weight: "400 600",
});

export const metadata: Metadata = {
  // Todo: https://app.clickup.com/t/8697z86kj
  title: {
    default: "AK1944",
    template: "%s | AK1944",
  },
  description: "AK1944 - Strona poświęcona działalności Armii Krajowej",
  keywords:
    "Armia Krajowa, Dębica, AK Dębica, Szlak Partyzancki, Szlak II Zgrupowania, Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica, Deser, Adam Lazarowicz, Środowisko 5 Pułku Strzelców Konnych Armii Krajowej, ŚZŻAK, Światowy Związek Żołnierzy AK, 5 Pułk Strzelców Konnych, 5 psk, AK, powiat dębicki, ziemia dębicka, Maciej Małozięć, weterani AK, kombatanci, Polskie Państwo Podziemne, Dziekania, Braciejowa, Gumniska, biogramy żołnierzy, Gdzie Karpat progi, Dziesiątka w akcji, Wojenne losy uczniów",
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-lt-installed="true">
      <body
        className={cn(
          figtree.variable,
          lora.variable,
          sourceSans.variable,
          "flex min-h-screen flex-col antialiased",
        )}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
