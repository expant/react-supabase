import { PollCard } from '@/entities/poll/ui/PollCard';
import { usePollVote } from '../model/hooks/usePollVote';
import type { PollVoteCardProps } from '../model/types';

export function PollVoteCard({ poll }: PollVoteCardProps) {
	const { value, isVoted, isLoading } = usePollVote({
		pollId: poll.id,
	});

	return (
		<PollCard
			poll={poll}
			value={value}
			disabled={isVoted}
			onChange={() => {}}
			onCancel={() => {}}
		/>
	);
}
