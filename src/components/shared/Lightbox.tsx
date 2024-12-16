import Image, { StaticImageData } from "next/image";
import AnotherLightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  index: number;
  slides: (string | StaticImageData)[];
}

export const Lightbox = ({ isOpen, onClose, index, slides }: LightboxProps) => {
  return (
    <AnotherLightbox
      open={isOpen}
      close={onClose}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
        closeOnPullUp: true,
      }}
      index={index}
      slides={slides.map((item, index) => ({
        src: typeof item === "string" ? item : item.src,
        alt: `Zdjęcie ${index + 1}`,
      }))}
      render={{
        slide: ({ slide }) => (
          <Image
            src={slide.src || ""}
            alt={slide.alt || ""}
            fill
            sizes="100vw"
            className="max-h-[95vh] max-w-[350px] rounded-lg object-cover desktop:max-w-[1080px]"
          />
        ),
      }}
    />
  );
};
