import Image, { ImageProps } from "next/image";

export interface BackgroundImageProps extends Omit<ImageProps, "alt"> {
  children?: React.ReactNode;
  alt: string;
  src: string;
}

export const BackgroundImage = ({
  children,
  src,
  alt,
  ...props
}: BackgroundImageProps) => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        quality={100}
        className="absolute -z-10 h-full w-full object-cover"
        {...props}
      />
      {children}
    </div>
  );
};
