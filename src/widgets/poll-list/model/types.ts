import type { Poll } from '@/entities/poll/model/types';

export type PollListProps = {
	polls: Poll[];
	isLoading: boolean;
};
