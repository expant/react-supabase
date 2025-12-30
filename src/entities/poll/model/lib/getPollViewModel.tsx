import { getAvatarUrl } from "@/entities/profile/api/avatarApi";
import type { RadioChangeEvent } from "antd";
import type { Poll } from "../types";
import styles from "../../ui/PollCard.module.css";

export function getPollViewModel(
  poll: Poll,
  onChange: (optionId: number) => void
) {
  const { poll_options, question, votes_count, author, author_id } = poll;

  const options = poll_options.map((option) => ({
    value: option.id,
    label: <div className={styles.option}>{option.text}</div>,
  }));

  const avatarUrl =
    author && author_id
      ? getAvatarUrl(author_id, author.avatar_updated_at)
      : null;

  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return {
    author,
    options,
    question,
    avatarUrl,
    handleChange,
    votesCount: votes_count,
  };
}
