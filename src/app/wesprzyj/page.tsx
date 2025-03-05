import { Metadata } from "next";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { ContactSection } from "./_components/ContactSection";
import { DonationSection } from "./_components/DonationSection";
import { PartnerSection } from "./_components/PartnerSection";
import { SupportGratitude } from "./_components/SupportGratitude";
import { SupportNav } from "./_components/SupportNav";
import { TaxSection } from "./_components/TaxSection";

export const metadata: Metadata = {
  title: "Wesprzyj",
  description: "Wesprzyj naszą działalność",
};

export default function SupportPage() {
  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container as="main" className="space-y-20">
        <div className="space-y-4 desktop:space-y-10">
          <Breadcrumbs />
          <SupportNav />
        </div>
        <TaxSection />
        <DonationSection />
        <PartnerSection />
        <ContactSection />
        <SupportGratitude />
      </Container>
    </div>
  );
}
