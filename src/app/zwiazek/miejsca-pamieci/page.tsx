import { PlaceItem } from "@/components/PlaceItem/PlaceItem";
import { memorialPlaces } from "@/data/memorialPlacesData";

const MemorialPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl p-4">
      {/* Breadcrumb
        <Breadcrumb /> */}

      {/* Lista miejsc */}
      <div className="space-y-8">
        {memorialPlaces.map((miejsce) => (
          <PlaceItem key={miejsce.id} miejsce={miejsce} />
        ))}
      </div>
    </div>
  );
};

export default MemorialPage;
