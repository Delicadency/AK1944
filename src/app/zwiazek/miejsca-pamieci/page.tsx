
import { MemorialPlace } from "@/components/MemorialPlace/MemorialPlace";
import { memorialPlaces } from "@/data/memorialPlacesData";
import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";





export default function MiejscaPamieci() {
  return (

    <Container className="mx-auto max-w-7xl p-4 pt-12">
      <Breadcrumbs />
      <div className="space-y-10 mt-10 ">
        {memorialPlaces.map((miejsce) => (
          <MemorialPlace key={miejsce.id} place={miejsce} />
        ))}
      </div>
    </Container>
  );
};
