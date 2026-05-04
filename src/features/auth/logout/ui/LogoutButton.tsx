import { LogoutIcon } from "@/shared/ui/icons/LogoutIcon";
import type { LogoutButtonProps } from "../model/types";
import styles from "./LogoutControl.module.css";

export function LogoutButton({ onClick }: LogoutButtonProps) {
  return (
    <button className={styles.logoutBtn} onClick={onClick}>
      <LogoutIcon />
      Выйти из аккаунта
    </button>
  );
}
