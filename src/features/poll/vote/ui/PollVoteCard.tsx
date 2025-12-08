import { PollCard } from '@/entities/poll/ui/PollCard';
import { usePollVote } from '../model/hooks/usePollVote';
import type { PollVoteCardProps } from '../model/types';

export function PollVoteCard({ poll }: PollVoteCardProps) {
	const { value, error, isVoted, isLoading } = usePollVote({
		pollId: poll.id,
	});

	if (error) {
		console.error(error);
	}

	return (
		<PollCard
			poll={poll}
			value={value}
			disabled={isVoted}
			isLoading={isLoading}
			// onChange={vote}
			// onCancel={cancel}
		/>
	);
}
