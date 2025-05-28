"use client";

import { Button } from "@/components/shared/Button/Button";
import Image from "next/image";
import { rallies } from "../data/rallyData";

export type Rally = {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

export default function RallyList() {
  return (
    <div className="px-2 desktop:px-8">
      {rallies.map((rally, index) => (
        <div
          key={index}
          
          className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 "
        >
          {/* Zdjęcie */}
          <div className="relative h-96 w-[85%] desktop:w-[100%] mx-auto order-2 md:order-2">
            <Image
              src={rally.imageUrl}
              alt={rally.title}
              fill
              className="object-cover pb-20"
            />
          </div>

          {/* Blok tekstowy z linią */}
          <div className="relative flex order-1 md:order-1">
            {/* Linia z kropką */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center desktop:ml-[-20px]">
              <div className="w-1 h-full bg-greenMain" />
              <div
                className="w-4 h-4 bg-black rounded-full absolute top-[20px] desktop:top-[0.8rem]"
              />
            </div>

            {/* Treść */}
            <div className="ml-10 space-y-4 pb-5 md:pb-24">
              <h2 className="text-3xl font-bold text-greenB xl:text-3xl">
                {rally.title}
              </h2>
              <p className="text-2xl desktop:text-xl font-bold text-greenB pt-1">{rally.date}</p>
              <p className="text-gray-700 pb-4 pt-1">{rally.description}</p>
              <div className="flex flex-wrap gap-5">
                <Button
                  label="Zasady uczestnictwa"
                  href={""}
                  ariaDescription="Zasady uczestnictwa"
                  variant="lightGreen"
                />
                <Button
                  label="Zobacz relację"
                  href={""}
                  ariaDescription="Zobacz relację"
                  variant="lightGreen"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

