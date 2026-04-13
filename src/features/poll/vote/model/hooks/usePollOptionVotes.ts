import { useEffect, useState } from "react";
import { supabase } from "@/shared/api/supabaseClient";
import type { Poll } from "@/entities/poll/model/types";

export function usePollOptionVotes(poll: Poll, isVoted: boolean) {
  const [pollWithOptionsVotes, setPollWithOptionsVotes] = useState<Poll>(poll);

  useEffect(() => {
    if (!isVoted) return;

    const fetchOptionVotes = async () => {
      const { data, error } = await supabase
        .from("poll_options_with_votes")
        .select("id, votes_count")
        .eq("poll_id", poll.id);

      if (error) {
        console.error("Error fetching option votes:", error);
        return;
      }

      const votesByOptionId = data.reduce<Record<number, number>>(
        (acc, row) => {
          acc[row.id] = row.votes_count;
          return acc;
        },
        {},
      );

      setPollWithOptionsVotes((prev) => ({
        ...prev,
        poll_options: prev.poll_options.map((option) => ({
          ...option,
          votes_count: votesByOptionId[option.id] ?? 0,
        })),
      }));
    };

    fetchOptionVotes();
  }, [isVoted, poll.id]);

  return { pollWithOptionsVotes };
}
