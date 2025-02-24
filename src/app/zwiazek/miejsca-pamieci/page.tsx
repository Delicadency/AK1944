
import IconArrowLeft from "@/icons/IconArrowLeft";
import { PlaceItem } from "@/components/PlaceItem/PlaceItem";
import { memorialPlaces } from "@/data/memorialPlacesData";
import Container from "@/components/shared/Container";


const Breadcrumb = () => (
  <div className="text-greenMain font-lora inline-flex items-center gap-2 whitespace-nowrap shadow-md pb-2 border border-transparent w-max">
    <h4 className="text-[0.875rem] md:text-[1.5rem]">Światowy Związek Żołnierzy AK</h4>
    <IconArrowLeft className="w-6 h-6" />
    <h2 className=" text-[1.75rem] md:text-[2rem]font-bold">Miejsca pamięci</h2>
  </div>
);



export default function MiejscaPamieci() {
  return (
    <div className="mx-auto max-w-7xl p-4 pt-12">
      <Container>
        <Breadcrumb />
        <div className="space-y-10 mt-10 ">
          {memorialPlaces.map((miejsce) => (
            <PlaceItem key={miejsce.id} place={miejsce} />
          ))}
        </div>
      </Container>
    </div>
  );
};
