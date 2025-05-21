import { MemorialPlace } from "@/components/MemorialPlace/MemorialPlace";
import { memorialPlaces } from "@/data/memorialPlacesData";
import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";

export default function MiejscaPamieci() {
  return (
    <Container className="mx-auto max-w-7xl p-4 pt-12 tablet:pb-20 desktop:pb-150">
      <Breadcrumbs />
      <div className="mt-10 space-y-10">
        {memorialPlaces.map((miejsce) => (
          <MemorialPlace key={miejsce.id} place={miejsce} />
        ))}
      </div>
    </Container>
  );
}
