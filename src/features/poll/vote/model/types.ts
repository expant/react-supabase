import type { Poll } from '@/entities/poll/model/types';

export type PollVoteCardProps = {
	poll: Poll;
};

export type UsePollVoteProps = {
	pollId: number;
};

export type UsePollVoteResult = {
	value: number | null;
	isVoted: boolean;
	isLoading: boolean;
	error: string | null;
	vote: (optionId: number) => Promise<void>;
	// cancel: () => Promise<void>;
};

export type LoadMyVoteResult = {
	optionId: number | null;
	isAuthenticated: boolean;
};
