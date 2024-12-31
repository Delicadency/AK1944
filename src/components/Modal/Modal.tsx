import ModalCloseIcon from "@/icons/ModalCloseIcon";
import { useEffect, useCallback, useRef } from "react";

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
  const modalRef = useRef<HTMLDivElement | null>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

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
      lastActiveElement.current = document.activeElement as HTMLElement;

      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      // Move focus to modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = "auto";

      // Restore focus to the last active element
      if (lastActiveElement.current) {
        lastActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleKeyDown]);

  if (!isModalOpen) return null;

  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-slate-900/20 backdrop-blur"
      role="dialog"
      aria-modal="true"
      ref={modalRef}
      tabIndex={-1}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative m-auto flex animate-modalAnimation flex-col items-center rounded bg-greenMain px-3 pt-12 text-white desktop:px-10 desktop:pt-[60px]"
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
  );
};
