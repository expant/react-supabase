import { supabase } from "@/shared/api/supabaseClient";
import { POLL_SELECT } from "./poll.selects";
import type { Poll } from "../model/types";

export async function getPolls() {
  const { data, error } = await supabase
    .from("polls")
    .select(POLL_SELECT)
    .order("created_at", { ascending: false })
    .order("position", { referencedTable: "poll_options", ascending: true });

  if (error) {
    console.error("Error fetching polls:", error);
    return [];
  }

  const polls = data as unknown as Poll[];

  const pollsWithOptionsVotes = await enrichPollsWithOptionVotes(polls);

  return pollsWithOptionsVotes;
}

export async function getPollsByAuthor(authorId: string) {
  const { data, error } = await supabase
    .from("polls")
    .select(POLL_SELECT)
    .eq("author_id", authorId)
    .order("created_at", { ascending: false })
    .order("position", { referencedTable: "poll_options", ascending: true });

  if (error) {
    console.error("Error fetching user polls:", error);
    return [];
  }

  const polls = data as unknown as Poll[];

  const pollsWithOptionsVotes = await enrichPollsWithOptionVotes(polls);

  return pollsWithOptionsVotes;
}

export async function getOptionVotesByPollId(pollId: number) {
  const { data, error } = await supabase
    .from("poll_options_with_votes")
    .select("id, votes_count")
    .eq("poll_id", pollId);

  if (error) {
    console.error("Error fetching option votes:", error);
    return [];
  }

  return data;
}

async function enrichPollsWithOptionVotes(polls: Poll[]): Promise<Poll[]> {
  if (polls.length === 0) return polls;

  const pollIds = polls.map((p) => p.id);

  const { data: optionVotes, error: votesError } = await supabase
    .from("poll_options_with_votes")
    .select("poll_id, id, votes_count")
    .in("poll_id", pollIds);

  if (votesError) {
    console.error("Error fetching option votes:", votesError);
    return polls;
  }

  const votesByPollId = optionVotes.reduce<
    Record<number, Record<number, number>>
  >((acc, row) => {
    if (!acc[row.poll_id]) {
      acc[row.poll_id] = {};
    }
    acc[row.poll_id][row.id] = row.votes_count;
    return acc;
  }, {});

  return polls.map((poll) => ({
    ...poll,
    poll_options: poll.poll_options.map((option) => ({
      ...option,
      votes_count: votesByPollId[poll.id]?.[option.id] ?? 0,
    })),
  }));
}
