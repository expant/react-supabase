import styles from "./UserPanelSkeleton.module.css";

export function UserPanelSkeleton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text} />
      <div className={styles.avatar} />
    </div>
  );
}
