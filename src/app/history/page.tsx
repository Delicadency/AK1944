import History from "@/components/History/History";
import Literature from "@/components/History/Literature";
import HistoryList from "@/components/History/HistoryList";
import HistoryNav from "@/components/History/HistoryNav";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-10">
      <History />
      <HistoryNav />
      <HistoryList />
      <section className="relative flex flex-col gap-10 bg-greenB pb-10 pt-6">
        <Image
          src="/images/history/main/stamp.png"
          alt="Stamp"
          width={100}
          height={100}
          className="absolute right-1 top-1"
        ></Image>
        <Heading variant="h4" color="white" contrast="black">
          Zobacz także
        </Heading>
        <p>Biogramy?</p>
        <Literature />
      </section>
    </div>
  );
}
