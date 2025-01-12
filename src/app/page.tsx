import NewsLanding from "@/components/NewsLanding/NewsLanding";
import { NewsSkeleton } from "@/components/NewsSkeleton/NewsSkeleton";
import SwitchContrast from "@/components/Switcher/ContrastSwitcher";
import FontSwitcher from "@/components/Switcher/FontSwitcher";

export default function Home() {
  return (
    <main>
      <NewsSkeleton />
      <SwitchContrast />
      <FontSwitcher />
      <NewsLanding />
    </main>
  );
}
