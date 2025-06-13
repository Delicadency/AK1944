import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
}

// Todo: Handle no image - default image.

export const NewsImage = ({ src, alt = "Zdjęcie z artykułu" }: Props) => (
  <div className="relative aspect-[500/300] max-h-[194px] w-[300px] min-w-[260px] overflow-hidden">
    <Image src={src} alt={alt} layout="responsive" width={300} height={194} />
  </div>
);
