import Calendar from "@/components/Calendar/Calendar";
import { NewsSkeleton } from "@/components/NewsSkeleton/NewsSkeleton";
import SwitchContrast from "@/components/Switcher/ContrastSwitcher";
import FontSwitcher from "@/components/Switcher/FontSwitcher";

export default function Home() {
  return (
    <main>
      <NewsSkeleton />
      <SwitchContrast />
      <FontSwitcher />
      <Calendar
        date={1942}
        description="Związek Walki Zbrojnej (ZWZ) został przekształcony w Armię Krajową
              (AK)"
      />
    </main>
  );
}
