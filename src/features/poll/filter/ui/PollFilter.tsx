import { SearchOutlined } from "@ant-design/icons";
import type { PollFilterProps } from "../model/types";
import styles from "./PollFilter.module.css";

export function PollFilter({ onFilterChange }: PollFilterProps) {
  return (
    <div className={styles.filterWrapper}>
      <SearchOutlined className={styles.filterIcon} />
      <input
        type="text"
        className={styles.filterInput}
        placeholder="Поиск опроса..."
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}
