import ModalCloseIcon from "@/icons/ModalCloseIcon";
import { useEffect } from "react";

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

const Modal = ({ children, isModalOpen, setIsModalOpen }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsModalOpen]);

  return (
    isModalOpen && (
      <div
        onClick={() => setIsModalOpen(false)}
        className="fixed inset-0 z-50 flex h-screen cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 backdrop-blur"
      >
        <div className="relative m-auto flex animate-modalAnimation cursor-default flex-col items-center overflow-hidden overflow-y-auto rounded bg-greenMain px-3 pt-[10px] text-white ease-in">
          <button className="self-end" onClick={() => setIsModalOpen(false)}>
            <ModalCloseIcon />
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
