import type { Poll } from '@/entities/poll/model/types';

export type PollVoteCardProps = {
	poll: Poll;
};

export type UsePollVoteProps = {
	pollId: number;
};

export type LoadMyVoteResult = {
	optionId: number | null;
	isAuthenticated: boolean;
};
