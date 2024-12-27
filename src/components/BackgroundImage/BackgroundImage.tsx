import Image from "next/image";

export type BackgroundImageProps = {
  children: React.ReactNode;
  src: string;
};

export const BackgroundImage = ({ children, src }: BackgroundImageProps) => {
  return (
    <div className="relative w-full">
      <Image
        src={src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute -z-10"
      />
      {children}
    </div>
  );
};
