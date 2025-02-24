"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { DonationInstructions } from "../Support/DonationInstructions";
import { Button } from "./Button/Button";
import opp from "../../../public/images/support/opp.png";
import pit from "../../../public/images/support/pit.png";

const Modal = dynamic(() => import("../Modal/Modal").then((mod) => mod.Modal), {
  ssr: false,
});

export const TaxDonationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        label="Przekaż podatek"
        ariaDescription="Przekaż podatek"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <div className="flex min-h-[269px] w-full flex-col justify-center overflow-hidden rounded-md bg-greenLight px-16 py-6 max-md:max-w-full max-md:px-5">
            <Image
              src={opp}
              alt="Pomarańczowe logo organizacji pożytku publicznego (OPP) z napisem 'organizacja pożytku publicznego' oraz symbolem 1,5% w obramowanej ramce."
              className="aspect-[3.13] w-[300px] max-w-full object-contain"
            />
            <DonationInstructions />
          </div>
          <Image
            src={pit}
            alt="Przykładowo wypełniona sekcja K i L formularza PIT dotycząca przekazania 1,5% podatku na organizację pożytku publicznego. Zawiera numer KRS 0000113420, kwotę 3,40 zł oraz cel szczegółowy 'Okręg Tarnów Koło Dębica'. Zaznaczona jest także zgoda na przekazanie danych podatnika."
            className="mt-5 aspect-[3.51] w-full object-contain"
          />
        </Modal>
      )}
    </>
  );
};
