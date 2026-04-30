import type { DecorativePollCardProps } from "./types";
import styles from "./DecorativePollCard.module.css";

export function DecorativePollCard({
  title,
  options,
}: DecorativePollCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles.options}>
        {options.map((option) => (
          <div key={option.label} className={styles.option}>
            <div
              className={`${styles.fill} ${option.highlighted ? styles.fillHighlighted : ""}`}
              style={{ width: `${option.percent}%` }}
            />
            <div className={styles.row}>
              <span className={styles.label}>{option.label}</span>
              <span
                className={`${styles.percent} ${option.highlighted ? styles.percentHighlighted : ""}`}
              >
                {option.percent}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
