import { Metadata } from "next";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { ContactSection } from "@/components/Support/ContactSection";
import { DonationSection } from "@/components/Support/DonationSection";
import { PartnerSection } from "@/components/Support/PartnerSection";
import { SupportGratitude } from "@/components/Support/SupportGratitude";
import { SupportNav } from "@/components/Support/SupportNav";
import { TaxSection } from "@/components/Support/TaxSection";

export const metadata: Metadata = {
  title: "Wesprzyj",
  description: "Wesprzyj naszą działalność",
};

export default function SupportPage() {
  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container className="space-y-20">
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
