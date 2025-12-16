import type { Poll } from '@/entities/poll/model/types';
import type { Vote } from '@/entities/vote/model/types';

export type PollListProps = {
	polls: Poll[];
	userVotes: Record<number, Vote | null>;
	isLoading: boolean;
};
