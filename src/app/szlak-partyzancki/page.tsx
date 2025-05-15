"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Article } from "./_components/Article";
import { Map } from "./_components/Map";
import { Partners } from "./_components/Partners";
import { Section } from "./_components/Section";
import { TrailSlug, trails } from "./data/trails";
import { TrailSwitcher } from "./_components/TrailSwitcher";
import { TrailPoints } from "./_components/TrailPoints";

export default function PartisanTrailPage() {
  const [activeTrail, setActiveTrail] = useState<TrailSlug>("first");
  const trailData = trails[activeTrail];

  return (
    <main className="contrast:bg-black00 contrast:text-yellowContrast">
      <Container as="section">
        <Breadcrumbs />
        <TrailSwitcher active={activeTrail} onChange={setActiveTrail} />
        <Article
          paragraphs={trailData.paragraphs}
          displayName={trailData.displayName}
        />
        <Map map={trailData.map} />
        <TrailPoints activeTrail={activeTrail} />
        <div className="flex flex-col justify-between desktop:flex-row desktop:pb-20">
          <Section sectionName="Geneza" />
          <Section sectionName="Rajdy" />
        </div>
        <Partners />
      </Container>
    </main>
  );
}
