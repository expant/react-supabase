import { getAvatarUrl } from "@/entities/profile/api/avatarApi";
import { formatTimeAgo } from "@/shared/utils/formatTimeAgo";
import type { RadioChangeEvent } from "antd";
import type { Poll } from "../types";

export function getPollViewModel(
  poll: Poll,
  onChange: (optionId: number) => void
) {
  const { poll_options, question, votes_count, author, author_id, created_at } =
    poll;

  const avatarUrl =
    author && author_id
      ? getAvatarUrl(author_id, author.avatar_updated_at)
      : null;

  const createdAt = formatTimeAgo(created_at);

  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return {
    author,
    question,
    createdAt,
    avatarUrl,
    handleChange,
    votesCount: votes_count,
    options: poll_options,
  };
}
