import { getAvatarUrl } from "@/entities/profile/api/avatarApi";
import { formatTimeAgo } from "@/shared/utils/formatTimeAgo";
import { getPercent } from "@/shared/utils/getPercent";
import type { RadioChangeEvent } from "antd";
import type { Poll, PollOptionWithPercent } from "../types";

export function getPollViewModel(
  poll: Poll,
  onChange: (optionId: number) => void,
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

  const optionsWithPercent: PollOptionWithPercent[] = poll_options.map(
    (option) => ({
      ...option,
      percent: getPercent(option.votes_count, votes_count),
    }),
  );

  return {
    author,
    question,
    createdAt,
    avatarUrl,
    handleChange,
    votesCount: votes_count,
    options: optionsWithPercent,
  };
}
