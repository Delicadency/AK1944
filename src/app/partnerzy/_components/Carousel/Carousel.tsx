"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Partner {
  id: string;
  name: string;
  href: string;
  image: string; // Optional?
}

interface Props {
  items: Partner[];
}

// Todo: Adjust spacings for viewports. Maybe extract <CarouselItem /> ?
export const Carousel = ({ items }: Props) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, slidesToScroll: "auto", align: "start" },
    [Autoplay({ playOnInit: true, delay: 3_000, stopOnInteraction: false })],
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <ul className="flex gap-4 tablet:gap-6 desktop:gap-10">
        <div id="spacer" className="w-4 tablet:w-6 desktop:w-10" />
        {items.map(({ id, name, href }) => (
          <li
            key={id}
            className="min-w-0 flex-shrink-0 flex-grow-0 hover:brightness-75"
            title={name}
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/placeholder_image.png"
                alt={name}
                width={304}
                height={304}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
