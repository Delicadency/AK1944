"use client";
import { History } from "@/components/History/History";
import { HistoryNav } from "@/components/History/HistoryNav";
import { HistoryList } from "@/components/History/HistoryList";
import { Literature } from "@/components/History/Literature";
import { HistoryBiogram } from "@/components/History/HistoryBiogram";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import Container from "@/components/shared/Container";

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-10">
      <History />
      <HistoryNav />
      <HistoryList />
      <section className="overflow-hidden bg-greenB pb-10 pt-6">
        <Container className="relative">
          <Image
            src="/images/history/main/stamp.webp"
            alt="Stamp"
            width={160}
            height={160}
            className="absolute -top-14 right-1 z-10 desktop:-right-20"
          />
          <Heading variant="h4" color="white" contrast="black">
            Zobacz także
          </Heading>
          <div className="mt-5 flex flex-col desktop:flex-row desktop:gap-[104px]">
            <HistoryBiogram />
            <Literature />
          </div>
        </Container>
      </section>
    </div>
  );
}
