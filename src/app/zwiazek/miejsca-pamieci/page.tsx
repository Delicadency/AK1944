import { PlaceItem } from "@/components/PlaceItem/PlaceItem";
import { memorialPlaces } from "@/data/memorialPlacesData";


const Breadcrumb = () => (
  <div className="text-sm text-gray-600 mb-4">
    <h4>Światowy Związek Żołnierzy AK</h4>
    <h2 className="text-xl font-bold">Miejsca pamięci</h2>
  </div>
);



export default function MiejscaPamieci() {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <Breadcrumb />
      {/* Lista miejsc */}
      <div className="space-y-8">
        {memorialPlaces.map((miejsce) => (
          <PlaceItem key={miejsce.id} place={miejsce} />
        ))}
      </div>
    </div>
  );
};

