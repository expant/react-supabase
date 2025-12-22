import { Radio, Skeleton } from "antd";
import { CheckSquareOutlined } from "@ant-design/icons";
import { getPollViewModel } from "../model/lib/getPollViewModel";
import type { PollCardProps } from "../model/types";
import styles from "./PollCard.module.css";

export function PollCard({
  poll,
  optionId,
  disabled,
  isLoading,
  onChange,
  onCancel,
}: PollCardProps) {
  const { question, options, votesCount, handleChange } = getPollViewModel(
    poll,
    onChange
  );

  if (isLoading)
    return (
      <div className={styles.falloutCard}>
        <div className={styles.falloutFrame}>
          <div className={styles.falloutScreen}>
            <div className={styles.falloutTitle}>{question}</div>
            <Skeleton active className={styles.skeleton} />
          </div>
        </div>
      </div>
    );

  return (
    <div className={styles.falloutCard}>
      <div className={styles.falloutFrame}>
        <div className={styles.falloutScreen}>
          <div className={styles.falloutTitle}>{question}</div>

          <Radio.Group
            value={optionId}
            options={options}
            onChange={handleChange}
            disabled={disabled}
            className={styles.options}
          />

          {disabled && (
            <button
              onClick={onCancel}
              className={styles.cancelButton}
              type="button"
            >
              Отменить голос
            </button>
          )}

          <div className={styles.votesCount}>
            <CheckSquareOutlined className={styles.checkSquareOutlinedIcon} />
            <span>{votesCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
