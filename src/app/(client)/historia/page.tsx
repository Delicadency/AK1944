import { HistoryBanner } from "@/components/History/HistoryBanner";
import { HistoryNav } from "@/components/History/HistoryNav";
import { HistoryChapters } from "@/components/History/HistoryChapters";
import { LiteratureComponent } from "@/components/History/Literature";
import { HistoryBiogramComponent } from "@/components/History/HistoryBiogram";
import { SeeAlsoSection } from "@/components/History/SeeAlsoSection";

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-10 contrast:bg-black00 md:gap-14">
      <HistoryBanner />
      <HistoryNav />
      <HistoryChapters />
      <SeeAlsoSection>
        <HistoryBiogramComponent />
        <LiteratureComponent />
      </SeeAlsoSection>
    </div>
  );
}
