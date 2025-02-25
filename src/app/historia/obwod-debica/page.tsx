"use client";
import Container from "@/components/shared/Container";
import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { Fortress } from "@/components/History/DebicaPage/Fortress";
import { Beginnings } from "@/components/History/DebicaPage/Beginnings";
import { Places } from "@/components/History/DebicaPage/Places";
import { Readiness } from "@/components/History/DebicaPage/Readiness";
import { Expansion } from "@/components/History/DebicaPage/Expansion";
import { useState } from "react";

export default function DebicaDistrictPage() {
  const { title } = historyData.debica ?? {};
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = (newState: boolean) => {
    setReadMore(newState);
  };

  return (
    <div className="contrast:bg-black">
      <Container as="article" className="flex flex-col gap-10 pb-6 pt-4">
        <Heading variant="h3" color="green" contrast="yellow" className="mb-6">
          {title}
        </Heading>
        <Fortress />
        <Beginnings />
        <Places onToggle={toggleReadMore} />
        {readMore && <Readiness />}
        {readMore && <Expansion />}
      </Container>
    </div>
  );
}
