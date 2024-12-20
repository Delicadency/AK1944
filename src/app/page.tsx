import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import { NewsSkeleton } from "@/components/NewsSkeleton/NewsSkeleton";
import SwitchContrast from "@/components/Switcher/ContrastSwitcher";
import FontSwitcher from "@/components/Switcher/FontSwitcher";

export default function Home() {
  return (
    <main>
      <NewsSkeleton />
      <SwitchContrast />
      <FontSwitcher />
      <BackgroundImage>
        <p>Home</p>
      </BackgroundImage>
    </main>
  );
}
