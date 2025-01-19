import NewsLanding from "@/components/NewsLanding/NewsLanding";
import Hero from "@/components/Hero/Hero";
import SwitchContrast from "@/components/Switcher/ContrastSwitcher";
import FontSwitcher from "@/components/Switcher/FontSwitcher";

export default function Home() {
  return (
    <main>
      <SwitchContrast />
      <FontSwitcher />
      <Hero />
      <NewsLanding />
    </main>
  );
}
