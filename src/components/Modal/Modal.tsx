import ModalCloseIcon from "@/icons/ModalCloseIcon";
import { useEffect, useCallback } from "react";

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

export const Modal = ({
  children,
  isModalOpen,
  setIsModalOpen,
}: ModalProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    },
    [setIsModalOpen],
  );

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleKeyDown]);

  return (
    isModalOpen && (
      <div
        onClick={() => setIsModalOpen(false)}
        className="fixed inset-0 z-50 flex h-screen items-center justify-center overflow-y-scroll bg-slate-900/20 backdrop-blur"
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative m-auto flex animate-modalAnimation cursor-default flex-col items-center rounded bg-greenMain px-3 pt-12 text-white ease-in desktop:px-10 desktop:pt-[60px]"
        >
          <button
            className="absolute right-3 top-3"
            aria-label="Close modal"
            onClick={() => setIsModalOpen(false)}
          >
            <ModalCloseIcon />
          </button>
          {children}
        </div>
      </div>
    )
  );
};
