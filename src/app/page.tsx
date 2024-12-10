import { NewsSkeleton } from "@/components/NewsSkeleton/NewsSkeleton";
import SwitchContrast from "@/components/Switcher/SwitchContrast";

export default function Home() {
  return (
    <main>
      <NewsSkeleton />
      <SwitchContrast />
    </main>
  );
}
