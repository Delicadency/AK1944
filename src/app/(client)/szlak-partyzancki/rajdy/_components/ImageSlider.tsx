"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { SliderImage } from "../_models/rally";

interface ImageSliderProps {
  images: SliderImage[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [index, setIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  // Dynamiczne wykrywanie liczby widocznych slajdów
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1024) setVisibleSlides(4);
      else if (window.innerWidth >= 640) setVisibleSlides(2);
      else setVisibleSlides(1);
    };
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  // Liczba stron/slajdów
  const pageCount = Math.ceil(images.length / visibleSlides);

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, pageCount - 1));
  };

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="hover:bg-green-800 rounded-sm bg-greenB p-3"
          aria-label="Poprzednie zdjęcie"
          disabled={index === 0}
        >
          <Image
            src="/images/icons/left-arrow-alt.svg"
            alt="Strzałka w lewo"
            className="h-6 w-6"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={handleNext}
          className="hover:bg-green-800 rounded-sm bg-greenB p-3"
          aria-label="Kolejne zdjęcie"
          disabled={index === pageCount - 1}
        >
          <Image
            src="/images/icons/right-arrow-alt.svg"
            alt="Strzałka w prawo"
            className="h-6 w-6"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            width: "100%",
            transform: `translateX(-${index * (100 / visibleSlides)}%)`,
          }}
        >
          {images.map((image, id) => (
            <div
              key={id}
              style={{ width: `${100 / visibleSlides}%` }}
              className="flex-shrink-0 px-4"
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
      </div>

      <div className="mt-10 flex justify-center gap-1">
        {Array.from({ length: pageCount }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              "h-2 w-2 rounded-full",
              index === i ? "bg-greenMain" : "bg-greenLight",
            )}
            onClick={() => setIndex(i)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};
