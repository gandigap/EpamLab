import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;
interface ModalProps {
  children: React.ReactNode,
  isModalOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ children, isModalOpen }) => {
  const el = useRef(document.createElement("div"));
  useEffect(() => {
    const current = el.current;
    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  if (isModalOpen) {
    return createPortal(children, el.current);
  }
  return null;
};

export default Modal;
