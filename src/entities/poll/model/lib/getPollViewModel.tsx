import { getAvatarUrl } from "@/entities/profile/api/avatarApi";
import { formatTimeAgo } from "@/shared/utils/formatTimeAgo";
import { getPercent } from "@/shared/utils/getPercent";
import type { Poll, PollOptionWithPercent } from "../types";

export function getPollViewModel(poll: Poll) {
  const { poll_options, question, votes_count, author, author_id, created_at } =
    poll;

  const avatarUrl =
    author && author_id
      ? getAvatarUrl(author_id, author.avatar_updated_at)
      : null;

  const createdAt = formatTimeAgo(created_at);

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
    votesCount: votes_count,
    options: optionsWithPercent,
  };
}
