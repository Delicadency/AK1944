import Image from "next/image";

export const NewsImage = ({ src }: { src: string }) => {
  return (
    <div>
      <Image
        alt="news image"
        src={src}
        width={288}
        height={191}
        className="tablet:w-3/3 rounded-sm object-cover tablet:order-1"
      />
    </div>
  );
};
