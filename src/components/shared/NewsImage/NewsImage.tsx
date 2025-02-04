import Image from "next/image";

export const NewsImage = ({ src }: { src: string }) => {
  return (
    <div>
      <Image
        alt="news image"
        src={src}
        width={400}
        height={300}
        className="object-cover"
      />
    </div>
  );
};
