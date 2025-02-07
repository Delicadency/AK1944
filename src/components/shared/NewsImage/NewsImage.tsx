import Image from "next/image";

export const NewsImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} relative aspect-[288/191] w-full rounded-sm tablet:aspect-[261/169]`}
    >
      <Image
        alt="news image"
        src={src}
        fill
        className="rounded-sm object-cover"
      />
    </div>
  );
};
