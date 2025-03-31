"use client";
import Container from "@/components/shared/Container";
import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { Fortress } from "@/components/History/DebicaPage/Fortress";
import { Beginnings } from "@/components/History/DebicaPage/Beginnings";
import { Places } from "@/components/History/DebicaPage/Places";
import { Readiness } from "@/components/History/DebicaPage/Readiness";
import { Expansion } from "@/components/History/DebicaPage/Expansion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { useDisclosure } from "@/hooks/useDisclosure";

export default function DebicaDistrictPage() {
  const { title } = historyData.debica ?? {};
  const { isOpen, toggle } = useDisclosure();

  const handleToggle = async () => {
    toggle();
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="contrast:bg-black">
      <Container as="article" className="flex flex-col gap-10 pb-6 pt-4">
        <Breadcrumbs />
        <Heading variant="h3" color="green" contrast="yellow" className="mb-6">
          {title}
        </Heading>
        <Fortress />
        <Beginnings />
        <Places onToggle={handleToggle} />
        {isMobile ? isOpen && <Readiness /> : <Readiness />}
        {isMobile ? isOpen && <Expansion /> : <Expansion />}
      </Container>
    </div>
  );
}
