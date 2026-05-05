import { useState } from "react";
import { sendVote, cancelVote } from "@/entities/vote/api/voteApi";
import { getOptionVotesByPollId } from "@/entities/poll/api/poll.api";
import type { Poll } from "@/entities/poll/model/types";
import type { UsePollVoteProps } from "../types";

export function usePollVote({ pollId, userVote }: UsePollVoteProps) {
  const [poll, setPoll] = useState<Poll | null>(null);
  const [optionId, setOptionId] = useState<number | null>(
    userVote?.option_id ?? null,
  );
  const [isVoted, setIsVoted] = useState(!!userVote);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const vote = (currentPoll: Poll) => (optionId: number) => {
    setIsLoading(true);

    sendVote(pollId, optionId)
      .then(async () => {
        setOptionId(optionId);
        setIsVoted(true);

        const data = await getOptionVotesByPollId(pollId);

        const votesByOptionId = data.reduce<Record<number, number>>(
          (acc, row) => {
            acc[row.id] = row.votes_count;
            return acc;
          },
          {},
        );

        const totalVotes = data.reduce((sum, row) => sum + row.votes_count, 0);

        setPoll({
          ...currentPoll,
          votes_count: totalVotes,
          poll_options: currentPoll.poll_options.map((option) => ({
            ...option,
            votes_count: votesByOptionId[option.id] ?? 0,
          })),
        });
      })
      .catch((e) => {
        setError(e instanceof Error ? e.message : "Ошибка голосования");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const cancel = () => {
    setIsLoading(true);

    cancelVote(pollId)
      .then(() => {
        setOptionId(null);
        setIsVoted(false);
        setPoll(null);
      })
      .catch((e) => {
        setError(e instanceof Error ? e.message : "Ошибка отмены голосования");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    optionId,
    isVoted,
    isLoading,
    error,
    vote,
    cancel,
    poll,
  };
}
