import { cn } from "@/utils";
import Image, { ImageProps } from "next/image";

export interface BackgroundImageProps extends Omit<ImageProps, "alt"> {
  children?: React.ReactNode;
  alt: string;
  src: string;
  className?: string;
}

export const BackgroundImage = ({
  children,
  src,
  alt,
  className,
  ...props
}: BackgroundImageProps) => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        quality={100}
        className={cn("absolute z-0 h-full w-full object-cover", className)}
        {...props}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
