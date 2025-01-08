// import { NewsSkeleton } from "@/components/NewsSkeleton/NewsSkeleton";
import Header from "@/components/Header/Header";
import SwitchContrast from "@/components/Switcher/ContrastSwitcher";
import FontSwitcher from "@/components/Switcher/FontSwitcher";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <NewsSkeleton /> */}
      <SwitchContrast />
      <FontSwitcher />
    </main>
  );
}
