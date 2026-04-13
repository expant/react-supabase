import { PollCard } from "@/entities/poll/ui/PollCard";
import { usePollVote } from "../model/hooks/usePollVote";
import type { PollVoteCardProps } from "../model/types";
import { usePollOptionVotes } from "../model/hooks/usePollOptionVotes";

export function PollVoteCard({ poll, userVote }: PollVoteCardProps) {
  const { optionId, error, isVoted, isLoading, vote, cancel } = usePollVote({
    pollId: poll.id,
    userVote,
  });

  const { pollWithOptionsVotes } = usePollOptionVotes(poll, isVoted);

  if (error) {
    console.error(error);
  }

  return (
    <PollCard
      poll={pollWithOptionsVotes}
      optionId={optionId}
      disabled={isVoted}
      isLoading={isLoading}
      onChange={vote}
      onCancel={cancel}
    />
  );
}
