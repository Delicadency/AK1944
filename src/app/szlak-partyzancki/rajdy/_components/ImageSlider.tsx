"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { SliderImage } from "../_models/rally";

interface ImageSliderProps {
  images: SliderImage[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const slideCount = images.length;

  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const visibleSlides = getVisibleSlides();

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, slideCount - visibleSlides));
  };

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="rounded-sm bg-greenB p-2 hover:bg-green-800"
          aria-label="Poprzednie zdjęcie"
        >
          <Image
            src="/images/icons/left-arrow-alt.svg"
            alt="Strzałka w lewo"
            className="h-5 w-5"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={handleNext}
          className="rounded-sm bg-greenB p-2 hover:bg-green-800"
          aria-label="Kolejne zdjęcie"
        >
          <Image
            src="/images/icons/right-arrow-alt.svg"
            alt="Strzałka w prawo"
            className="h-5 w-5"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${(index * 100) / visibleSlides}%)`,
          width: `${(images.length * 100) / visibleSlides}%`,
        }}
      >
        {images.map((image, id) => (
          <div
            key={id}
            className="w-[80%] flex-shrink-0 p-2"
            style={{ width: `${80 / slideCount}%` }}
          >
            <div className="flex">
              <Image
                src={image.src}
                alt={image.alt}
                width={350}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="mt-8 flex justify-center gap-1">
        {Array.from({
          length: Math.ceil(slideCount / visibleSlides),
        }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              "h-2 w-2 rounded-full",
              index === i ? "bg-greenMain" : "bg-greenLight",
            )}
          />
        ))}
      </div>
    </div>
  );
};
