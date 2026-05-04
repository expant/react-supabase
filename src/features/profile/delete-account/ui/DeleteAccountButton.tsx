import type { DeleteAccountButtonProps } from "../model/types";
import styles from "./DeleteAccountControl.module.css";

export function DeleteAccountButton({ onClick }: DeleteAccountButtonProps) {
  return (
    <button className={styles.deleteBtn} onClick={onClick}>
      Удалить аккаунт
    </button>
  );
}
