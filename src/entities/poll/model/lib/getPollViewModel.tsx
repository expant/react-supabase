import type { RadioChangeEvent } from "antd";
import type { Poll } from "../types";
import styles from "../../ui/PollCard.module.css";

export function getPollViewModel(
  poll: Poll,
  onChange: (optionId: number) => void
) {
  const { poll_options, question, votes_count, author } = poll;

  const options = poll_options.map((option) => ({
    value: option.id,
    label: <div className={styles.option}>{option.text}</div>,
  }));

  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return {
    author,
    options,
    question,
    handleChange,
    votesCount: votes_count,
  };
}
