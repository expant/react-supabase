import { PollVoteCard } from "@/features/poll/vote/ui/PollVoteCard";
import type { PollListProps } from "../model/types";
import styles from "./PollList.module.css";

const SKELETON_COUNT = 5;

export function PollList({ polls, userVotes, isLoading }: PollListProps) {
  if (isLoading) {
    return (
      <div className={styles.list}>
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <div key={i} className={styles.skeleton} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {polls.map((poll) => (
        <PollVoteCard key={poll.id} poll={poll} userVote={userVotes[poll.id]} />
      ))}
    </div>
  );
}
