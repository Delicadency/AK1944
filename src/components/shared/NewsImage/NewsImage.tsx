import Image from "next/image";

export const NewsImage = ({ src }: { src: string }) => {
  return (
    <div>
      <Image
        alt="news image"
        src={src}
        width={288}
        height={191}
        className="rounded-sm object-cover"
      />
    </div>
  );
};
