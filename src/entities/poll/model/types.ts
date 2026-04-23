import type { Author } from "@/entities/profile/model/types";
import type { Vote } from "@/entities/vote/model/types";
import type { ReactNode } from "react";

export type PollOption = {
  id: number;
  text: string;
  position: number;
  votes_count: number;
};

export type PollOptionWithPercent = PollOption & {
  percent: number;
};

export type PollRow = {
  id: number;
  question: string;
  is_anonymous: boolean;
  created_at: string;
  author_id: string | null;
  votes_count: number;
};

export type Poll = PollRow & {
  author: Author | null;
  poll_options: PollOption[];
};

export type PollCardProps = {
  poll: Poll;
  optionId: number | null;
  disabled?: boolean;
  isLoading: boolean;
  onChange: (optionId: number) => void;
  onCancel: () => void;
};

export type UserPollCardProps = {
  poll: Poll;
  actionSlot?: ReactNode;
};

export type OnPollInserted = (pollRow: PollRow) => void;
export type onPollVotesCountUpdated = (
  data: Pick<PollRow, "id" | "votes_count">,
) => void;

export type PollsStore = {
  // State
  polls: Poll[];
  userVotes: Record<number, Vote>;
  newPollsCount: number;
  isLoading: boolean;

  // Actions
  loadPolls: () => Promise<void>;
  loadUserVotes: () => Promise<void>;
  loadFeed: () => Promise<void>;
  showNewPolls: () => Promise<void>;
  addNewPollCount: () => void;
  initSubscriptions: (userId: string) => {
    unsubscribeFromNewPolls: () => Promise<"ok" | "timed out" | "error">;
    unsubscribeFromPollVotesCount: () => void;
  };
};
