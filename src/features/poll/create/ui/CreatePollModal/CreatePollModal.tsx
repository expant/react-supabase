import { createPortal } from "react-dom";
import { CreatePollForm } from "../CreatePollForm/CreatePollForm";
import { useCreatePollModal } from "../../model/hooks/useCreatePollModal";
import type { CreatePollModalProps } from "../../model/types";
import styles from "./CreatePollModal.module.css";

export function CreatePollModal({
  isOpen,
  onClose,
  onCreated,
}: CreatePollModalProps) {
  useCreatePollModal(isOpen, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <CreatePollForm onCloseModal={onClose} onCreated={onCreated} />
      </div>
    </div>,
    document.body,
  );
}
