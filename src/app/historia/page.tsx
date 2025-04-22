import { HistoryBanner } from "@/components/History/History";
import { HistoryNav } from "@/components/History/HistoryNav";
import { HistoryList } from "@/components/History/HistoryList";
import { LiteratureComponent } from "@/components/History/Literature";
import { HistoryBiogramComponent } from "@/components/History/HistoryBiogram";
import { SeeAlsoSection } from "@/components/History/SeeAlsoSection";

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-10">
      <HistoryBanner />
      <HistoryNav />
      <HistoryList />
      <SeeAlsoSection>
        <HistoryBiogramComponent />
        <LiteratureComponent />
      </SeeAlsoSection>
    </div>
  );
}
