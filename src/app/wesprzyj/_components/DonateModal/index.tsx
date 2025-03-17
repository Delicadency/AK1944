"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/shared/Button/Button";
import { useDisclosure } from "@/hooks/useDisclosure";

const DonateForm = dynamic(
  () => import("./DonateForm").then((mod) => mod.DonateForm),
  {
    ssr: false,
  },
);

const Modal = dynamic(
  () => import("@/components/Modal/Modal").then((mod) => mod.Modal),
  {
    ssr: false,
  },
);

export const DonateModal = () => {
  const { isOpen, open, close } = useDisclosure();

  return (
    <>
      <Button
        label="Wpłać darowiznę"
        ariaDescription="Wpłać darowiznę"
        className="mt-10"
        onClick={open}
      />
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={close}
          className="bg-backgroundB px-10 text-greenMain"
        >
          <DonateForm />
        </Modal>
      )}
    </>
  );
};
