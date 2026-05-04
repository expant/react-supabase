import { Modal } from "@/shared/ui/modal/Modal";
import type { DeleteAccountModalProps } from "../model/types";
import styles from "./DeleteAccountControl.module.css";

export function DeleteAccountModal({
  isOpen,
  isLoading,
  onClose,
  onDelete,
}: DeleteAccountModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.confirmTitle}>Удалить аккаунт?</h2>
      <p className={styles.confirmText}>
        Все ваши опросы и данные будут безвозвратно удалены. Это действие нельзя
        отменить.
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
          Удалить навсегда
        </button>
      </div>
    </Modal>
  );
}
