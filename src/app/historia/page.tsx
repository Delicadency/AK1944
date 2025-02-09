import History from "@/components/History/History";
import HistoryNav from "@/components/History/HistoryNav";
import HistoryList from "@/components/History/HistoryList";
import Literature from "@/components/History/Literature";
import HistoryBiogram from "@/components/History/HistoryBiogram";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import Container from "@/components/shared/Container";

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-10">
      <History />
      <HistoryNav />
      <HistoryList />
      <Container as="section" className="relative bg-greenB pb-10 pt-6">
        <Image
          src="/images/history/main/stamp.png"
          alt="Stamp"
          width={100}
          height={100}
          className="absolute right-1 top-1 z-10"
        />
        <Heading variant="h4" color="white" contrast="black">
          Zobacz także
        </Heading>
        <div className="flex flex-col desktop:flex-row desktop:gap-[104px]">
          <HistoryBiogram />
          <Literature />
        </div>
      </Container>
    </div>
  );
}
