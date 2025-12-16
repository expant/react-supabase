import type { Poll } from '@/entities/poll/model/types';
import type { Vote } from '@/entities/vote/model/types';

export type PollVoteCardProps = {
	poll: Poll;
	userVote: Vote | null;
};

export type UsePollVoteProps = {
	pollId: number;
	userVote: Vote | null;
};
