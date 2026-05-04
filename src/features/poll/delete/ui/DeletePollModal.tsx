import { Modal } from "@/shared/ui/modal/Modal";
import type { DeletePollModalProps } from "../model/types";
import styles from "./DeletePollControl.module.css";

export function DeletePollModal({
  isOpen,
  isLoading,
  onClose,
  onDelete,
}: DeletePollModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.confirmTitle}>Удалить опрос?</h2>
      <p className={styles.confirmText}>
        Это действие нельзя отменить. Все голоса будут удалены вместе с
        опросом.
      </p>
      <div className={styles.confirmActions}>
        <button
          className={styles.cancelBtn}
          onClick={onClose}
          disabled={isLoading}
        >
          Отмена
        </button>
        <button
          className={styles.confirmBtn}
          onClick={onDelete}
          disabled={isLoading}
        >
          {isLoading && <span className={styles.spinner} aria-hidden="true" />}
          Удалить
        </button>
      </div>
    </Modal>
  );
}
