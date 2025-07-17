import { MemorialPlace } from "@/components/MemorialPlace/MemorialPlace";
import { Pagination } from "@/components/shared/Pagination";
import { memorialPlaces } from "@/data/memorialPlacesData";
import { PageProps } from "@/types";

export default function MemorialPlacesList({ currentPage }: PageProps) {
  const ITEMS_PER_PAGE = 4;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedMemorialPlaces = memorialPlaces.slice(
    start,
    start + ITEMS_PER_PAGE,
  );

  return (
    <>
      <div className="mt-10 space-y-10">
        {paginatedMemorialPlaces.map((miejsce) => (
          <MemorialPlace key={miejsce.slug} place={miejsce} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(memorialPlaces.length / ITEMS_PER_PAGE)}
        basePath="/zwiazek/miejsca-pamieci"
      />
    </>
  );
}
