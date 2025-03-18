import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";

export const Navigation = () => (
  <nav
    aria-labelledby="partners-nav-heading"
    className="space-y-5 desktop:space-y-10"
  >
    <Breadcrumbs />

    <h2
      id="partners-nav-heading"
      className="mb-10 font-lora text-2xl font-bold"
    >
      Partnerzy
    </h2>
  </nav>
);
