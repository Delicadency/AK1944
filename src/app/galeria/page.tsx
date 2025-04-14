import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";

interface Props {
  title: string;
  date: string;
}

const PhotoGallery = ({ title, date }: Props) => (
  <article className="w-full">
    <header className="space-y-4">
      <Heading
        color="green"
        contrast="yellow"
        className="text-2xl tablet:text-26 desktop:text-28"
        variant="h3"
      >
        {title}
      </Heading>
      <p className="font-lora text-2xl text-greenMain">{date}</p>
    </header>
  </article>
);

const galleries = [
  { title: "Zjazd lorem ipsum", date: "18 sierpnia, 2020" },
  { title: "Zjazd lorem ipsum", date: "18 sierpnia, 2020" },
  { title: "Zjazd lorem ipsum", date: "18 sierpnia, 2020" },
  { title: "Zjazd lorem ipsum", date: "18 sierpnia, 2020" },
];

export default function GalleryPage() {
  return (
    <div className="bg-backgroundMain pb-20 text-greenMain contrast:bg-black00 contrast:text-yellowContrast">
      <Container as="main" className="space-y-10">
        <Breadcrumbs />

        <h2 className="mb-10 mt-5 font-lora text-4xl font-bold desktop:mt-10">
          Galeria zdjęć
        </h2>

        <div className="flex flex-col items-center desktop:gap-16">
          {galleries.map(({ title, date }, i) => (
            <PhotoGallery key={i} title={title} date={date} />
          ))}
        </div>
      </Container>
    </div>
  );
}
