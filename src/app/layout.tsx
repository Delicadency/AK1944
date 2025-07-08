// src/app/layout.tsx
import "./(client)/globals.css";
import localFont from "next/font/local";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const lora = localFont({
  src: "./(client)/fonts/Lora-Variable.woff2",
  variable: "--font-lora",
  weight: "400 700",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={lora.variable}>
      <body className="scroll-pt-20 scroll-smooth bg-backgroundMain text-textDarkGreen antialiased tablet:scroll-pt-[136px]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
