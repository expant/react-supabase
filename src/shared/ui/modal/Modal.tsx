import { createPortal } from "react-dom";
import { useModal } from "./useModal";
import type { ModalProps } from "./types";
import styles from "./Modal.module.css";

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useModal(isOpen, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
}
