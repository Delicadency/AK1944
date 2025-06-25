import Image from "next/image";

export const NewsImage = ({ src }: { src: string }) => {
  return (
    <div className="h-[191px] w-[288px] tablet:col-start-1 tablet:row-span-2 tablet:row-start-1 tablet:h-[169px] tablet:w-[262px] desktop:h-[191px] desktop:w-[300px]">
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
