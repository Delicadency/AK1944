"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  items: string[]; // Todo: Add { id, name, href }, Maybe extract <CarouselItem /> ?
}

// Todo: Adjust spacings for viewports.
export const Carousel = ({ items }: Props) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, slidesToScroll: "auto", align: "start" },
    [Autoplay({ playOnInit: true, delay: 3_000, stopOnInteraction: false })],
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <ul className="flex gap-4 tablet:gap-6 desktop:gap-10">
        <div id="spacer" className="w-4 tablet:w-6 desktop:w-10" />
        {items.map((item) => (
          <li
            key={item}
            className="min-w-0 flex-shrink-0 flex-grow-0"
            title={item}
          >
            <Image
              src="/images/placeholder_image.png"
              alt={item}
              width={304}
              height={304}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
