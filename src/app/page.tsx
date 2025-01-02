import { Heading } from "@/components/Heading/Heading";
import { NewsSkeleton } from "@/components/NewsSkeleton/NewsSkeleton";
import SwitchContrast from "@/components/Switcher/ContrastSwitcher";
import FontSwitcher from "@/components/Switcher/FontSwitcher";

export default function Home() {
  return (
    <main>
      <NewsSkeleton />
      <SwitchContrast />
      <FontSwitcher />
      <Heading variant="h1" contrast="yellow" color="green" underline>
        Aktualności
      </Heading>
    </main>
  );
}
