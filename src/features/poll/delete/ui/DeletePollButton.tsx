import { TrashIcon } from "@/shared/ui/icons/TrashIcon";
import type { DeletePollButtonProps } from "../model/types";
import styles from "./DeletePollControl.module.css";

export function DeletePollButton({ onClick, isLoading }: DeletePollButtonProps) {
  return (
    <button
      className={styles.trashBtn}
      onClick={onClick}
      disabled={isLoading}
      type="button"
      aria-label="Удалить опрос"
    >
      <TrashIcon />
    </button>
  );
}
