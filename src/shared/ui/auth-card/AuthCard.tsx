import type { AuthCardProps } from "./types";
import styles from "./AuthCard.module.css";

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <div className={styles.logoMark}>P</div>
        <span className={styles.logoText}>PollFeed</span>
      </div>
      {children}
    </div>
  );
}
