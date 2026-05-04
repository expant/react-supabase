import { Modal } from "@/shared/ui/modal/Modal";
import type { LogoutModalProps } from "../model/types";
import styles from "./LogoutControl.module.css";

export function LogoutModal({
  isOpen,
  isLoading,
  onClose,
  onLogout,
}: LogoutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.confirmTitle}>Выйти из аккаунта?</h2>
      <p className={styles.confirmText}>Вы сможете войти снова в любое время.</p>
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
          onClick={onLogout}
          disabled={isLoading}
        >
          {isLoading && <span className={styles.spinner} aria-hidden="true" />}
          Выйти
        </button>
      </div>
    </Modal>
  );
}
